import * as React from "react";
import { KegWithDetails } from "../../types/KegWithDetails";
import "../../styles/otter-keg/KegView.scss"

interface KevViewProps {
    keg: KegWithDetails
}

export const KegView = React.memo(function KegView({keg} : KevViewProps) {
    return <div className="keg-view">
        <p className="beer-title">{keg.beerDetails.beer_name}</p>
        <img className="beer-logo" src={keg.beerDetails.beer_label_hd || keg.beerDetails.beer_label} />
        <p className="beer-description">{keg.beerDetails.beer_description}</p>
    </div>
})