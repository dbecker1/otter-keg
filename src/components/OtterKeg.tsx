import React from 'react'
import { useSelector } from 'react-redux'
import { populate, useFirebaseConnect } from 'react-redux-firebase'
import { OtterKegState } from "../state/OtterKegState";

export const OtterKeg = React.memo(function OtterKeg() {

    const populates = [
        { child: 'activeBeers', root: 'beers' },
    ]

    useFirebaseConnect([
        // passing populates parameter also creates all necessary child queries
        { path: 'admin', populates }
    ]);

    const admin = useSelector((state: OtterKegState) => {return (populate(state.firebase, 'admin', populates))} );
    
    if (admin === undefined) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    const beers = admin.activeBeers;
    return (
        <div>
            <div>
                <h1>{beers[0].name}</h1>
                <img src={beers[0].image} style={{width:  "70%"}} alt={beers[0].name}/>
            </div>
            <div>
                <h1>{beers[1].name}</h1>
                <img src={beers[1].image} style={{width:  "70%"}} alt={beers[0].name}/> 
            </div>
        </div>
    )
})