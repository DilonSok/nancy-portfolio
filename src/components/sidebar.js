import React from "react";
import '../css/sidebar.css';
import DEFAULT_IMG from '../images/logo192.png';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-outer-container">
                <div className="sidebar-inner-container">
                    <div className="sidebar-profile-img-container">
                        <img className="sidebar-profile-img" alt="" src={DEFAULT_IMG} />
                    </div>
                    <div className="sidebar-name">
                        Nancy Tran
                    </div>
                    <div className="sidebar-bio">
                        I am Nancy Tran, and I do research! I really enjoy biochem and all sorts of things.
                    </div>
                    <ul className="sidebar-links-container">
                        <li className="sidebar-link">
                            <img className="sidebar-link-img" alt="" src={DEFAULT_IMG} />
                            <p className="sidebar-link-name">
                                nancy.tran@gmail.com
                            </p>
                        </li>
                        <li className="sidebar-link">
                            <img className="sidebar-link-img" alt="" src={DEFAULT_IMG} />
                            <p className="sidebar-link-name">
                                LinkedIn
                            </p>
                        </li>
                        <li className="sidebar-link">
                            <img className="sidebar-link-img" alt="" src={DEFAULT_IMG} />
                            <p className="sidebar-link-name">
                                TBD
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;