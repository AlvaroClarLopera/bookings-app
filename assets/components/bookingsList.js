import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';

import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
    Link, Routes
} from "react-router-dom";
import BookingCreator from "./bookingCreator";


export default class Bookings extends Component {
    constructor() {
        super();

        this.state = {bookings: []}
    }

    componentDidMount() {
        this.getBookings();
    }

    getBookings() {
        axios.get(`http://localhost:8000/api/bookings`).then(bookings => {
            this.setState({bookings: bookings.data})
            console.log(this.state.bookings.endDate);
        })
    }

    getRoomTypeToDisplay (roomType) {
        switch (roomType) {
            case 'SINGLE': return 'Individual';
            case 'DOUBLE': return 'Doble';
            case 'TRIPLE': return 'Triple';
            case 'QUADRUPLE': return 'Cuádruple';
        }
    }

    render() {
        return (
            <div>
                <Link className="btn btn-primary" to="/bookings/create"
                      style={{position: "relative", float: "right", right: "200px"}}>Crear reserva</Link>
                <section className="row-section">
                    <div className="container">
                        <div className="bookings-list-title mt-5">
                            <h2 className="text-center">Lista de reservas</h2>
                        </div>
                        <div className="bookings-list-title mt-5"></div>
                        <div className={'row'}>
                            {this.state.bookings.map(booking =>
                                <div className="mt-3" key={booking.locator}
                                     style={{background: "black;", color: "white;", padding: "20px;"}}>
                                    <div className="booking">
                                        <div className="booking-body">
                                            <div className="booking-locator"><p><b>Localizador de la reserva: </b> {booking.locator} </p></div>
                                            <span
                                                className="booking-room-type"><b>Tipo de habitación: </b> {this.getRoomTypeToDisplay(booking.roomType)}</span>
                                            <span
                                                className="booking-num-guests"><b>Nº de huéspedes: </b> {booking.numGuests}</span>
                                            <span
                                                className="booking-start-date"><b>Fecha de entrada: </b> {booking.startDate}</span>
                                            <span
                                                className="booking-end-date"><b>Fecha de salida: </b> {booking.endDate}</span>
                                            <span
                                                className="booking-totals"><b>Precio de la reserva: </b> {booking.bookingTotals}€</span><br/>
                                            <span className="booking-contact-data"><b>Datos de contacto: </b></span><br/>
                                            <span id="name" className="booking-name"><b>Nombre: </b>{booking.name}</span>
                                            <span id="email" className="booking-email"><b>Correo electrónico: </b>{booking.email}</span>
                                            <span id="phone" className="booking-phone"><b>Nº de teléfono: </b>{booking.phone}</span>
                                        </div>
                                        <div className="bookings-list-title mt-5"></div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
