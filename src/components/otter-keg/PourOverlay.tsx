import { Classes, Overlay } from "@blueprintjs/core";
import classNames from "classnames";
import * as React from "react";
import { useSelector } from "react-redux";
import { populate, useFirebaseConnect } from "react-redux-firebase";
import { OtterKegState } from "../../state/OtterKegState";
import { KegWithDetails } from "../../types/KegWithDetails";
import "../../styles/otter-keg/PourOverlay.scss";

const POUR_END_TIME_THRESHOLD = 10
const LITERS_TO_PINTS = 2.11338;

export const PourOverlay = React.memo(function PourOverlay() {
    const kegs: KegWithDetails[] = useSelector((state: OtterKegState) => state.activeKegs);
    const populates = [{ child: "drinkerId", root: "drinkers"}];

    useFirebaseConnect([{
        path: "pours", 
        populates, 
        queryParams: [ 'orderByChild=lastUpdate', 'limitToLast=1' ],
        storeAs: "latestPour"
    }]);
    let pourRaw: any = useSelector((state: OtterKegState) => populate(state.firebase, "latestPour", populates));

    if (!pourRaw) {
        return <span style={{display: "none"}}>No Pour</span>;
    }

    let pour = pourRaw[Object.keys(pourRaw)[0]];
    
    let pourUpdate = new Date(pour.lastUpdate);
    let now =  new Date();
    // for local testing, enter a date less than 10 seconds after an existing pour
    // let now = new Date("2020-12-17T13:47:38.160438")
    let drinker = pour.drinkerId;
    let withinThreshold = (now.getTime() - pourUpdate.getTime()) / 1000 < POUR_END_TIME_THRESHOLD;
    let keg = kegs.filter((keg:KegWithDetails) => keg.kegId === pour.kegId)[0];

    let overlayClasses = classNames(
        Classes.CARD,
        Classes.ELEVATION_4,
        "overlay-container"
    )
    let amountInPints = pour.amount * LITERS_TO_PINTS;
    let title = pour.isCurrent ? "Pouring!" : "Pour Finished!"
    return (withinThreshold || pour.isCurrent) && !!pour && !!keg ? <div className="pour-overlay-wrapper">
        <Overlay isOpen={true} usePortal={true} hasBackdrop={true}>
            <div className={overlayClasses}>
                <div>
                    <p className="title">{title}</p>
                </div>
                <div>
                    <p className="amount">{amountInPints.toFixed(2)}</p>
                    <p>Pints</p>
                </div>
                <div className="details">
                    <p>Beer: {keg.beerDetails.beer_name}</p>
                    <p>Drinker: {drinker.name}</p>
                </div>
            </div>
        </Overlay>
    </div>: <span style={{display: "none"}}>No Pour</span>;
})