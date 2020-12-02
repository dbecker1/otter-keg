import React from 'react'
import { BrowserRouter, Link, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Link to={"/view"}>View</Link>
            <Link to={"/admin"}>Admin</Link>
            <Route path={"/admin"} component = {Admin} />
            <Route path={"/view"} component = {View} />
        </BrowserRouter>
    )

}

const Admin = () => {
    return (
        <p>Admin</p>
    )
}

const View = () => {
    return (
        <p>View</p>
    )
}


export default App;
