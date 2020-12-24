import * as React from "react";
import { KegWithDetails } from "../../types/KegWithDetails";

interface KevViewProps {
    keg: KegWithDetails
}

export const KegView = React.memo(function KegView({keg} : KevViewProps) {
    return <div>{keg.beerDetails.beer_name}</div>
})