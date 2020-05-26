import React from 'react';
import logo from '../logo.svg';
import '../App.css';

function Example() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and to.
                </p>
                <a
                    className="App-link"
                    href="/route"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
        );
    }


export default Example;
