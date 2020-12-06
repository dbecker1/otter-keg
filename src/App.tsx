import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import {OtterKeg }from "./components/otter-keg/OtterKeg";

function App() {
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
