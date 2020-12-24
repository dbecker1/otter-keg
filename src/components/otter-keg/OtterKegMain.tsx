import * as React from "react";
import { useFirebaseConnect, populate } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { OtterKegState } from "../../state/OtterKegState";
import { Spinner } from "@blueprintjs/core";
import { getBeerDetails } from "../../utils/untappedUtils";
import "../../styles/otter-keg/OtterKegMain.scss";
import useDeepCompareEffect from 'use-deep-compare-effect'
import { KegView } from "./KegView";

export const OtterKegMain = React.memo(function OtterKegMain() {
    const [kegsWithDetails, setKegsWithDetails] = React.useState<any []>([]);
    const populates = [{ child: "beerId", root: "beers"}];

    useFirebaseConnect([{path: "kegs", populates, queryParams: [ 'orderByChild=isActive', 'equalTo=true' ]}]);
    let kegs: Object = useSelector((state: OtterKegState) => populate(state.firebase, "kegs", populates)) || {};
    console.log("Kegs: ", kegs);

    useDeepCompareEffect(() => {
        let promises = Object.entries(kegs).map(([id, keg]) => getBeerDetails(keg.beerId.untappedBid))
        Promise.all(promises).then(beerDetails => {
            let newKegsWithDetails: any[] = []
            Object.keys(kegs).forEach((kegId: string) => {
                // maddie typescript made me do this i hate typescript why did you make me use it ugh
                let dumbTypescriptKegs: any = kegs;
                let keg: any = dumbTypescriptKegs[kegId];
                let kegWithDetails = {
                    "position": keg.position,
                    "kegId": kegId,
                    "beer": beerDetails.filter((beer: any) => {return beer.response.beer.bid === keg.beerId.untappedBid})[0].response.beer
                };
                newKegsWithDetails.push(kegWithDetails);
            });
            newKegsWithDetails.sort((a: any, b: any) => {
                let aValue = a.position == "left" ? 1 : a.position == "right" ? 2 : 3;
                let bValue = b.position == "left" ? 1 : b.position == "right" ? 2 : 3;
                return aValue - bValue;
            })
            setKegsWithDetails(newKegsWithDetails);
        }).catch(e => {
            console.log("Error loading beer details", e)
        })
    }, [kegs])
    console.log("Kegs With Details: ", kegsWithDetails)
    return kegsWithDetails.length > 0 ? <div className={"otter-keg-main"}>
        <div className={"beers"}>
        {kegsWithDetails.map((keg, index) => {
            return <KegView keg={keg} key={index} />
        })}
        </div>
    </div> : <Spinner />
})