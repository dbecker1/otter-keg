import React from 'react'
import { useSelector } from 'react-redux'
import { populate, useFirebaseConnect } from 'react-redux-firebase'
import { OtterKegState } from "../../state/OtterKegState";
import { Classes } from "@blueprintjs/core";
import { OtterKegHeader } from "./OtterKegHeader";
import { OtterKegMain } from "./OtterKegMain";
import { UserBoard } from "./UserBoard";
import "../../styles/otter-keg/OtterKeg.scss";

export const OtterKeg = React.memo(function OtterKeg() {

    /*
    const populates = [
        { child: 'activeBeers', root: 'beers' },
    ]

    useFirebaseConnect([
        // passing populates parameter also creates all necessary child queries
        { path: 'admin', populates }
    ]);

    const admin = useSelector((state: OtterKegState) => {return (populate(state.firebase, 'admin', populates))} );
    
    
    const admin = undefined;
    if (admin === undefined) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    const beers = admin;
    */
    return (
        <React.Fragment>
            <OtterKegHeader />
            <div className="otter-keg-body">
                <OtterKegMain />
                <UserBoard />
            </div>
        </React.Fragment>
    )
})