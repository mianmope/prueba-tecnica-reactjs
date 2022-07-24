import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className="web-header">
                <img src="https://www.cicloindoor.com/themes/shared/images/logo-big.png" alt="" />
                <Link to="/subscripcion">
                    <button >SUSCRÍBETE</button>
                </Link>
                
            </div>

            <Outlet />
        </>
    );
};

export default Layout;
