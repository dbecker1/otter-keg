import * as React from "react";
import { Classes, Overlay } from "@blueprintjs/core";
import classNames from "classnames";

interface PourOverlayProps{
    pour: any;
    keg: any;
}

const LITERS_TO_PINTS = 2.11338;

export const  PourOverlay = React.memo(function PourOverlay(props: PourOverlayProps){
    const { pour, keg } = props;
    const { isCurrent, drinkerId: drinker, amount } = pour;

    const [shouldShowPourOverlay, setShouldShowPourOverlay] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (isCurrent) {
            setShouldShowPourOverlay(true);
        } else if  (!isCurrent) {
            setTimeout(() => setShouldShowPourOverlay(false), 10000)
        }
    }, [isCurrent])

    const amountInPints = amount * LITERS_TO_PINTS;
    const title = isCurrent ? "Pouring" : "Pour Finished";
    return shouldShowPourOverlay ? <div className="pour-overlay-wrapper">
        <Overlay isOpen={true} usePortal={true} hasBackdrop={true}>
            <div className={classNames(Classes.CARD,
        Classes.ELEVATION_4,
        "overlay-container")}>
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