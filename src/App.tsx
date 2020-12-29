import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { populate, useFirebaseConnect } from 'react-redux-firebase';
import { BrowserRouter, Route } from "react-router-dom";
import useDeepCompareEffect from 'use-deep-compare-effect';
import {OtterKeg }from "./components/otter-keg/OtterKeg";
import { setActiveKegs } from './state/ActiveKegsSlice';
import { OtterKegState, useOtterKegDispatch } from './state/OtterKegState';
import { populateKegDetails } from './utils/untappedUtils';

function App() {
    const populates = [{ child: "beerId", root: "beers"}];

    useFirebaseConnect([{
        path: "kegs", 
        populates, 
        queryParams: [ 'orderByChild=isActive', 'equalTo=true' ],
        storeAs: "activeKegs"
    }]);
    let kegs: Object = useSelector((state: OtterKegState) => populate(state.firebase, "activeKegs", populates)) || {};
    let dispatch = useOtterKegDispatch();
    useDeepCompareEffect(() => {
        populateKegDetails(kegs as any).then((kegsWithDetails) => {
            dispatch(setActiveKegs(kegsWithDetails));
        }).catch(e => {
            console.log("Error loading beer details", e)
        })
    }, [kegs])
    return (
        <BrowserRouter>
            <Route path={"/admin"} render={() => {return <p>Admin</p>}} />
            <Route path={"/view"}>
                <OtterKeg />
            </Route>
        </BrowserRouter>
    )
}

export default App;
