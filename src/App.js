import React from 'react'
import { BrowserRouter, Link, Route } from "react-router-dom";
import KegView from "./views/KegView";

function App() {
    return (
        <BrowserRouter>
            <Route path={"/admin"} render={() => {return <p>Admin</p>}} />
            <Route path={"/view"} component = {KegView} />
        </BrowserRouter>
    )

}

export default App;
