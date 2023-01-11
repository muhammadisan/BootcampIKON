import './AppHeader.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function AppHeader() {
    const [showNav, setShowNav] = useState(false);

    const ToggleSidebar = () => {
        showNav === true ? setShowNav(false) : setShowNav(true);
    }

    return (
        <div className="AppHeader">
            <div className="container-fluid">

                <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
                    <div className="container-fluid p-2">
                        <Link to="/" className="navbar-brand text-primary mr-0">&#9818; &#9813; &#9820; &#9815; &#9822; &#9817;</Link>
                        <div className="form-inline ml-auto">
                            <div className="btn btn-primary" onClick={ToggleSidebar} >
                                <span>&#9776;</span>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className={`sidebar ${showNav === true ? 'active' : ''}`}>
                    <div className="sd-header">
                        <h4 className="mb-0">Menu</h4>
                        <div className="btn btn-primary" onClick={ToggleSidebar}><span>&#9932;</span></div>
                    </div>
                    <div className="sd-body">
                        <Link to="/" className='sd-link'>Home</Link>
                        <Link to="/about" className='sd-link'>About</Link>
                        <Link to="/form" className='sd-link'>Bootcamp Registration</Link>
                    </div>
                </div>
                <div className={`sidebar-overlay ${showNav === true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
            </div>
        </div>
    );
}
