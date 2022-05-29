// ./src/js/app.js

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookingsList from './components/BookingsList';
import {BrowserRouter, Routes, Route, Redirect, Navigate} from "react-router-dom";
import BookingCreator from "./components/bookingCreator";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/bookings" element={<BookingsList/>} />
            <Route path="/bookings/create" element={<BookingCreator/>}/>
            <Route path="/"element={<Navigate to="/bookings" replace />}/>
        </Routes>
    </BrowserRouter>
    , document.getElementById('root'));