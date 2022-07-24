import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className="web-header">
                <img src="https://www.cicloindoor.com/themes/shared/images/logo-big.png" alt="" />
            </div>

            <Outlet />
        </>
    );
};

export default Layout;
