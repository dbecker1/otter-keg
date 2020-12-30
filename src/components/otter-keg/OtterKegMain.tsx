import * as React from "react";
import { useSelector } from "react-redux";
import { OtterKegState } from "../../state/OtterKegState";
import { Spinner } from "@blueprintjs/core";
import "../../styles/otter-keg/OtterKegMain.scss";
import { KegWithDetails } from "../../types/KegWithDetails";
import { PourOverlay } from "./PourOverlay";

export const OtterKegMain = React.memo(function OtterKegMain() {
    let activeKegs: KegWithDetails[] = useSelector((state: OtterKegState) => state.activeKegs) || {};

    console.log("Kegs With Details: ", activeKegs)
    return activeKegs.length > 0 ? <div className={"otter-keg-main"}>
        <div className={"keg-details"}>
            <div className="keg-details-row header">
                {activeKegs.map((keg, index) => {
                    return <div className="keg-details-col" key={index}>
                        <p className="beer-title">{keg.beerDetails.beer_name}</p>
                        <p>{keg.beerDetails.beer_style}</p>
                    </div>
                })}
            </div>
            <div className="keg-details-row image">
                {activeKegs.map((keg, index) => {
                    return <div className="keg-details-col" key={index}>
                        <img className="beer-logo" src={keg.beerDetails.beer_label_hd || keg.beerDetails.beer_label} alt={keg.beerDetails.beer_name}/>
                    </div>
                })}
            </div>

            <div className="keg-details-row footer">
                {activeKegs.map((keg, index) => {
                    return <div className="keg-details-col" key={index}>
                        <p className="beer-description">{keg.beerDetails.beer_description}</p>
                    </div>
                })}
            </div>
        </div>
        <PourOverlay />
    </div> : <Spinner />
})