import React, {Component} from 'react';
import {BrowserRouter, Link, Navigate, Route, Routes} from 'react-router-dom';
import BookingsList from './bookingsList';
import BookingCreator from './BookingCreator';

class Home extends Component {

    render() {
        return (

            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className={"navbar-brand"} to={"/"}> Symfony React Project </Link>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className={"nav-link"} to={"/bookings"}> Bookings </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        )
    }
}

export default Home;
