import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";


class Nav extends Component {
    render() {
        return (

            <div>
                <nav className="navbar" id="mainNav">
                    <div className="container px-5">
                        <a className="navbar-brand fw-bold" href="#">Demo React Router</a>
                        <li className="btn btn-light">
                            <NavLink to="/" activeStyle={{
                                fontWeight: "bold",
                                color: "Blue"
                            }}>Trang chủ</NavLink>
                        </li>
                        <li className="btn btn-light">
                            <NavLink to="/tin" activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>Tin </NavLink>
                        </li>
                        <li className="btn btn-light" >
                            <NavLink to="/tin-tuc" activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>Chi tiết tin</NavLink>
                        </li>
                        <li className="btn btn-light" >
                            <NavLink to="/lien-he" activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>Giới Thiệu</NavLink>
                        </li>

                    </div>
                </nav>

            </div>

        );
    }
}

export default Nav;