import React from "react";
import { Outlet } from "react-router-dom";


function Layout(): JSX.Element {
    return (
        <div className="App">
            <Outlet />
        </div>
    )
}

export default Layout;