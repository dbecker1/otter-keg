import * as React from "react";
import { useFirebaseConnect, populate } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { OtterKegState } from "../../state/OtterKegState";
import { Spinner } from "@blueprintjs/core";
import { populateKegDetails } from "../../utils/untappedUtils";
import "../../styles/otter-keg/OtterKegMain.scss";
import useDeepCompareEffect from 'use-deep-compare-effect'
import { KegWithDetails } from "../../types/KegWithDetails";

export const OtterKegMain = React.memo(function OtterKegMain() {
    const [kegsWithDetails, setKegsWithDetails] = React.useState<KegWithDetails []>([]);
    const populates = [{ child: "beerId", root: "beers"}];

    useFirebaseConnect([{
        path: "kegs", 
        populates, 
        queryParams: [ 'orderByChild=isActive', 'equalTo=true' ],
        storeAs: "activeKegs"
    }]);
    let kegs: Object = useSelector((state: OtterKegState) => populate(state.firebase, "activeKegs", populates)) || {};
    console.log("Kegs: ", kegs);

    useDeepCompareEffect(() => {
        populateKegDetails(kegs as any).then((kegsWithDetails) => {
            setKegsWithDetails(kegsWithDetails);
        }).catch(e => {
            console.log("Error loading beer details", e)
        })
    }, [kegs])
    console.log("Kegs With Details: ", kegsWithDetails)
    return kegsWithDetails.length > 0 ? <div className={"otter-keg-main"}>
        <div className={"keg-details"}>
            <div className="keg-details-row header">
                {kegsWithDetails.map((keg, index) => {
                    return <div className="keg-details-col" key={index}>
                        <p className="beer-title">{keg.beerDetails.beer_name}</p>
                        <p>{keg.beerDetails.beer_style}</p>
                    </div>
                })}
            </div>
            <div className="keg-details-row image">
                {kegsWithDetails.map((keg, index) => {
                    return <div className="keg-details-col" key={index}>
                        <img className="beer-logo" src={keg.beerDetails.beer_label_hd || keg.beerDetails.beer_label} alt={keg.beerDetails.beer_name}/>
                    </div>
                })}
            </div>

            <div className="keg-details-row footer">
                {kegsWithDetails.map((keg, index) => {
                    return <div className="keg-details-col" key={index}>
                        <p className="beer-description">{keg.beerDetails.beer_description}</p>
                    </div>
                })}
            </div>
        </div>

        
    </div> : <Spinner />
})