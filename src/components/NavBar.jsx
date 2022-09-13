import React, {Component} from "react";
import { Link } from 'react-router-dom';
import logo from '../logo/rb.png'


class NavBar extends Component {
    render() {
        return <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt={logo}/>
                    </a>
                    <div className="navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" >
                                <Link className="nav-link" to="/rent">
                                    <h2>Wynajem</h2>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    <h2>O firmie </h2>
                                </Link>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <Link className="nav-link" to="/contact">
                                    <h2>Kontakt</h2>
                            </Link>
                        </span>
                    </div>
                </div>
            </nav>

        </div>
    }
}

export default NavBar;