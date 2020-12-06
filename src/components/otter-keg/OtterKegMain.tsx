import * as React from "react";
import { useFirebaseConnect, populate } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { OtterKegState } from "../../state/OtterKegState";
import { Spinner } from "@blueprintjs/core";
import "../../styles/otter-keg/OtterKegMain.scss";

export const OtterKegMain = React.memo(function OtterKegMain() {

    const populates = [{ child: "beerId", root: "beers"}];

    useFirebaseConnect([{path: "kegs", populates, queryParams: [ 'orderByChild=isActive', 'equalTo=true' ]}]);
    const beers: Object = useSelector((state: OtterKegState) => populate(state.firebase, "kegs", populates));
    console.log(beers);
    return beers != null ? <div className={"otter-keg-main"}>
        <div className={"beers"}>
        {Object.entries(beers).map(([id, beer]) => <div key={id}>{beer.beerId.name}</div>)}
        </div>
    </div> : <Spinner />
})