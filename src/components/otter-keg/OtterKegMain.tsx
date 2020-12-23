import * as React from "react";
import { useFirebaseConnect, populate } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { OtterKegState } from "../../state/OtterKegState";
import { Spinner } from "@blueprintjs/core";
import { getBeerDetails } from "../../utils/untappedUtils";
import "../../styles/otter-keg/OtterKegMain.scss";
import useDeepCompareEffect from 'use-deep-compare-effect'

export const OtterKegMain = React.memo(function OtterKegMain() {
    const [beerDetails, setBeerDetails] = React.useState(null);
    const populates = [{ child: "beerId", root: "beers"}];

    useFirebaseConnect([{path: "kegs", populates, queryParams: [ 'orderByChild=isActive', 'equalTo=true' ]}]);
    let kegs: Object = useSelector((state: OtterKegState) => populate(state.firebase, "kegs", populates)) || {};
    console.log("Kegs: ", kegs);

    useDeepCompareEffect(() => {
        let promises = Object.entries(kegs).map(([id, keg]) => getBeerDetails(keg.beerId.untappedBid))
        console.log("Calling uptappd api")
        Promise.all(promises).then(details => {
            let newBeerDetails: any = {}
            details.forEach((beerResponse: any) => {
                newBeerDetails[beerResponse.response.beer.bid] = beerResponse.response.beer
            });
            setBeerDetails(newBeerDetails);
        }).catch(e => {
            console.log("Error loading beer details", e)
        })
    }, [kegs])
    console.log("Beer Details: ", beerDetails)
    return kegs !== null && beerDetails !== null ? <div className={"otter-keg-main"}>
        <div className={"beers"}>
        {Object.entries(kegs).map(([id, beer]) => {
            let details: any = beerDetails![beer.beerId.untappedBid]
            if (details === undefined) {
                return <></>;
            }
            return <div key={id}>{details.beer_name}</div>
        })}
        </div>
    </div> : <Spinner />
})