import * as React from "react";
import { useSelector } from "react-redux";
import { useFirebaseConnect } from "react-redux-firebase";
import { OtterKegState } from "../../state/OtterKegState";
import "../../styles/otter-keg/KegStats.scss";
import { KegWithDetails } from  "../../types/KegWithDetails"
import Numeral from "numeral";

interface KegStatsProps {
    keg: KegWithDetails
}

const LITERS_TO_PINTS = 2.11338;

export const KegStats = React.memo(function KegStats(props: KegStatsProps) {
    let keg = props.keg;

    useFirebaseConnect([{
        path: "pours", 
        queryParams: [ 'orderByChild=kegId', `equalTo=${keg.kegId}` ],
        storeAs: `pours_${keg.kegId}`
    }]);
    let pours: any[] = useSelector((state: OtterKegState) => state.firebase.ordered[`pours_${keg.kegId}`]) || []
    let drinkCount = pours.length;
    let totalPourVolume = pours.reduce((acc, cur) => {
        return acc + cur.value.amount;
    }, 0) * LITERS_TO_PINTS;
    let percentRemaining = 1 - (totalPourVolume / keg.sizeInPints);

    return <div className="keg-stats">
        <div className="stat">
            <p className="stat-value">{drinkCount}</p>
            <p className="stati-title">Pours</p>
        </div>
        <div className="stat">
            <p className="stat-value">{totalPourVolume.toFixed(2)}</p>
            <p className="stati-title">Pints Poured</p>
        </div>
        <div className="stat">
            <p className="stat-value">{Numeral(percentRemaining).format("%")}</p>
            <p className="stati-title">Percent Remaining (est)</p>
        </div>
    </div>;
})