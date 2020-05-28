import React from 'react';
import logo from '../logo.png';
import '../App.css';
import routes from '../constants/routes'
import {NavLink} from "react-router-dom";
function Example() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <NavLink to={routes.EXAMPLE}>
                    Menu
                </NavLink>
            </header>
        </div>
        );
    }


export default Example;
