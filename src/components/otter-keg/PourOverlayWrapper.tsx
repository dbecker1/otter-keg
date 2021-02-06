import * as React from "react";
import { useSelector } from "react-redux";
import { populate, useFirebaseConnect } from "react-redux-firebase";
import { OtterKegState } from "../../state/OtterKegState";
import { KegWithDetails } from "../../types/KegWithDetails";
import "../../styles/otter-keg/PourOverlay.scss";
import { PourOverlay } from "./PourOverlay";

export const PourOverlayWrapper = React.memo(function PourOverlayWrapper() {
    const kegs: KegWithDetails[] = useSelector((state: OtterKegState) => state.activeKegs);
    const populates = [{ child: "drinkerId", root: "drinkers"}];

    useFirebaseConnect([{
        path: "pours", 
        populates, 
        queryParams: [ 'orderByChild=lastUpdate', 'limitToLast=1' ],
        storeAs: "latestPour"
    }]);
    const pourRaw: any = useSelector((state: OtterKegState) => populate(state.firebase, "latestPour", populates));

    const pour = pourRaw != null ? pourRaw[Object.keys(pourRaw)[0]] : undefined;
    const keg = pour != null ? kegs.filter((keg:KegWithDetails) => keg.kegId === pour.kegId)[0] : undefined;
    if (pour != null && keg != null) {
        return <PourOverlay pour={pour} keg={keg} />
    } else {
        return <span style={{display: "none"}}>No Pour</span>;
    }
})