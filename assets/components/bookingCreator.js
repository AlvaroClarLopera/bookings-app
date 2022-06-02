import React, {Component} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';
import axios from "axios";

const json = require('../config/conf.json');

const BASE_URL = json.BASE_URL.prod // change to local if needed

export default class BookingCreator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: new Date(),
            endDate: new Date(),
            numGuests: 1,
            roomType: "",
            rooms: [],
            name: "",
            email: "",
            phone: "",
            bookingPrice: 0,
            roomsAvailableCheck: false,
            calculatedCheck: false,
        }
    }

    setStartDate(date) {
        this.hideAvailableRooms();
        this.hideContactData();

        if (date > this.state.endDate) {
            date = this.state.endDate
        }

        if (date < Date.now) {
        }

        this.setState({
            startDate: date
        });
    };

    setEndDate(date) {
        this.hideAvailableRooms();
        this.hideContactData();

        if (date < this.state.startDate) {
            date = this.state.startDate
        }

        if (date < Date.now) {
        }

        this.setState({
            endDate: date
        });
    };

    getRoomTypeToDisplay(roomType) {
        switch (roomType) {
            case 'Single':
                return 'Individual';
            case 'Double':
                return 'Doble';
            case 'Triple':
                return 'Triple';
            case 'Quadruple':
                return 'Cuádruple';
        }
    }

    hideContactData() {
        let contactFields = ["name", "email", "phone"];
        let i = 0;

        document.getElementById("contactData").style.visibility = "hidden";

        while (i < contactFields.length) {
            document.getElementById(contactFields[i]).style.visibility = "hidden";
            document.getElementById(contactFields[i] + "L").style.visibility = "hidden";
            i = i + 1;
        }

        document.getElementById("createBooking").style.visibility = "hidden";
    }

    hideAvailableRooms() {
        let i = 0;
        let roomTypes = ['Quadruple', 'Triple', 'Double', 'Single'];


        document.getElementById("roomsAvailableTitle").style.visibility = "hidden";

        while (i < 4) {
            document.getElementById(roomTypes[i].toLowerCase()).disabled = false;
            document.getElementById(roomTypes[i].toLowerCase()).style.visibility = "hidden";
            document.getElementById(roomTypes[i].toLowerCase() + "L").style.visibility = "hidden";
            document.getElementById(roomTypes[i].toLowerCase() + "L").innerText = this.getRoomTypeToDisplay(roomTypes[i]) + ": ";
            i = i + 1;
        }

        document.getElementById("bookingPrice").innerHTML = ""
        document.getElementById("bookingPrice").style.visibility = "hidden";
    }

    getAvailableRooms() {
        let startDateString = this.state.startDate.toISOString().split('T')[0];
        let endDateString = this.state.endDate.toISOString().split('T')[0];

        this.hideAvailableRooms()

        this.setState({
            rooms: []
        });


        let i = 0;
        let roomTypes = ['QUADRUPLE', 'TRIPLE', 'DOUBLE', 'SINGLE'];
        let promises = []
        while (i < 5 - this.state.numGuests) {
            promises.push(axios.get(BASE_URL + '/api/rooms-available?startDate=' +
                '' + startDateString +
                '&endDate=' + endDateString +
                '&roomType=' + roomTypes[i]).then(rooms => {
                this.state.rooms.push([rooms.data.rooms_available, rooms.data.roomType]);
                this.setState({rooms: this.state.rooms});
            }));
            i = i + 1;
        }
        Promise.all(promises).then((room) => {
            i = 0
            let roomType = '';

            while (i < 5 - this.state.numGuests) {
                switch (this.state.rooms[i][1]) {
                    case 'SINGLE': roomType = 'single'; break;
                    case 'DOUBLE': roomType = 'double'; break;
                    case 'TRIPLE': roomType = 'triple'; break;
                    case 'QUADRUPLE': roomType = 'quadruple'; break;
                }

                if (this.state.rooms[i][0] === 0) {
                    document.getElementById(roomType).disabled = true;
                }

                document.getElementById(roomType).style.visibility = "visible";
                document.getElementById(roomType + "L").style.visibility = "visible";
                document.getElementById(roomType + "L").innerHTML += this.state.rooms[i][0] + " habitaciones disponibles";
                i = i + 1;
            }

        })
        document.getElementById("roomsAvailableTitle").style.visibility = "visible";
    }

    selectedNumGuests() {
        this.hideAvailableRooms();
        this.hideContactData();

        this.setState({
            numGuests: document.getElementById('numGuests').selectedIndex + 1
        });
        let roomTypes = ['QUADRUPLE', 'TRIPLE', 'DOUBLE', 'SINGLE'];
        let i = 0;
        while (i < 5 - this.state.numGuests) {
            document.getElementById(roomTypes[i].toLowerCase()).style.visibility = "hidden";
            document.getElementById(roomTypes[i].toLowerCase() + "L").style.visibility = "hidden";
            i = i + 1;
        }

        document.getElementById("roomsAvailableTitle").style.visibility = "hidden";
    }

    getBookingPrice() {
        let startDateString = this.state.startDate.toISOString().split('T')[0];
        let endDateString = this.state.endDate.toISOString().split('T')[0];

        let roomType = document.querySelector('input[name="roomTypes"]:checked').value.toUpperCase();
        this.setState({
            roomType: roomType
        })
        axios.get(BASE_URL + '/api/bookings/price?startDate=' +
            '' + startDateString +
            '&endDate=' + endDateString +
            '&roomType=' + roomType).then(prices => {
            this.setState({bookingPrice: prices.data.bookingTotals});
            document.getElementById("bookingPrice").innerHTML = "Precio total: " + this.state.bookingPrice + "€";
            document.getElementById("bookingPrice").style.visibility = "visible";
        })

        this.displayContactDataForm();
    }

    createBooking() {

        document.getElementById("nameCheck").innerText = "";
        document.getElementById("emailCheck").innerText = "";
        document.getElementById("phoneCheck").innerText = "";

        let nameOk = true;
        let emailOk = true;
        let phoneOk = true;

        if (this.state.name == "") {
            document.getElementById("nameCheck").innerText = "Este campo esta vacío. Por favor, rellénalo";
            nameOk = false;
        }

        if (this.state.name.length > 50) {
            document.getElementById("nameCheck").innerText = "Este campo tiene un máximo de 50 caracteres.";
            nameOk = false;
        }

        if (this.state.email == "") {
            document.getElementById("emailCheck").innerText = "Este campo esta vacío. Por favor, rellénalo";
            emailOk = false;
        }

        if (this.state.email.length > 50) {
            document.getElementById("emailCheck").innerText = "Este campo tiene un máximo de 50 caracteres.";
            emailOk = false;
        }

        if (this.state.phone == "") {
            document.getElementById("phoneCheck").innerText = "Este campo esta vacío. Por favor, rellénalo";
            phoneOk = false;
        }

        if (this.state.phone.length > 10) {
            document.getElementById("nameCheck").innerText = "Este campo tiene un máximo de 10 caracteres.";
            phoneOk = false;
        }

        if (!nameOk || !emailOk || !phoneOk) {
            console.log(nameOk, emailOk, phoneOk);
            return;
        }

        axios.post(BASE_URL + '/api/bookings', {
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            roomType: this.state.roomType,
            numGuests: this.state.numGuests,
            bookingTotals: this.state.bookingPrice,
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone
        })
            .then(function (response) {
                new Swal("Genial!", ", Se ha creado la reserva correctamente.", "success").then(() =>
                    document.location.href = '../'
                );
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    displayContactDataForm() {
        let contactFields = ["name", "email", "phone"];
        let i = 0;

        document.getElementById("contactData").style.visibility = "visible";

        while (i < contactFields.length) {
            document.getElementById(contactFields[i]).style.visibility = "visible";
            document.getElementById(contactFields[i] + "L").style.visibility = "visible";
            i = i + 1;
        }

        document.getElementById("createBooking").style.visibility = "visible";

    }

    handleChange(field, event) {
        switch (field) {
            case "name":
                this.setState({name: event.target.value});
                break;
            case "email":
                this.setState({email: event.target.value});
                break;
            case "phone":
                this.setState({phone: event.target.value});
                break;
        }
    }

    render() {
        return (
            <div className="new-booking-form">
                <h2 className="text-center"><span>Nueva reserva</span></h2>
                <div className="bookings-list-title mt-3"></div>
                Fecha de entrada
                <DatePicker
                    dateFormat="dd/MM/yyyy"
                    selected={this.state.startDate}
                    onChange={(date) => {
                        this.setStartDate(date)
                    }}
                    minDate={new Date()}/>
                <div className="bookings-list-title mt-3"></div>
                Fecha de salida
                <DatePicker
                    dateFormat="dd/MM/yyyy"
                    selected={this.state.endDate}
                    onChange={(date) => {
                        this.setEndDate(date)
                    }}
                    minDate={new Date()}/>
                <div className="bookings-list-title mt-5"></div>
                Nº de huéspedes
                <select onChange={this.selectedNumGuests.bind(this)} name="numGuests" id="numGuests">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <button id="show-available-rooms" className="btn btn-primary"
                        onClick={this.getAvailableRooms.bind(this)}
                >Ver habitaciones disponibles
                </button>
                <div className="bookings-list-title mt-3"></div>
                <p id="roomsAvailableTitle" style={{visibility: "hidden"}}>Habitaciones disponibles: </p>
                <div className="bookings-list-title mt-1"></div>
                <input type="radio" id="single" name="roomTypes" value="Single"
                       onClick={this.getBookingPrice.bind(this)} style={{visibility: "hidden"}}/>
                <label htmlFor="single" id="singleL" style={{visibility: "hidden"}}>Individual </label><br/>
                <input type="radio" id="double" name="roomTypes" value="Double"
                       onClick={this.getBookingPrice.bind(this)} style={{visibility: "hidden"}}/>
                <label htmlFor="double" id="doubleL" style={{visibility: "hidden"}}>Doble </label><br/>
                <input type="radio" id="triple" name="roomTypes" value="Triple"
                       onClick={this.getBookingPrice.bind(this)}
                       style={{visibility: "hidden"}}/>
                <label htmlFor="triple" id="tripleL" style={{visibility: "hidden"}}>Triple </label><br/>
                <input type="radio" id="quadruple" name="roomTypes" value="Quadruple"
                       onClick={this.getBookingPrice.bind(this)}
                       style={{visibility: "hidden"}}/>
                <label htmlFor="quadruple" id="quadrupleL" style={{visibility: "hidden"}}>Cuadruple </label><br/>
                <div className="bookings-list-title mt-2"></div>
                <p id="bookingPrice" style={{visibility: "hidden"}}>Precio total: </p>
                <div className="bookings-list-title mt-3"></div>
                <p id="contactData" style={{visibility: "hidden"}}>Datos de contacto para la reserva: </p>
                <label htmlFor="name" id="nameL" style={{visibility: "hidden"}}>Nombre y Apellidos:</label>
                <input type="text" id="name" name="name" onChange={(evt) => this.handleChange('name', evt)}
                       style={{visibility: "hidden"}}/><br/>
                <p id="nameCheck"></p>
                <label htmlFor="email" id="emailL" style={{visibility: "hidden"}}>Correo electrónico:</label>
                <input type="text" id="email" name="email" onChange={(evt) => this.handleChange('email', evt)}
                       style={{visibility: "hidden"}}/><br/>
                <p id="emailCheck"></p>
                <label htmlFor="phone" id="phoneL" style={{visibility: "hidden"}}>Nº de teléfono/móvil:</label>
                <input type="text" id="phone" name="phone" onChange={(evt) => this.handleChange('phone', evt)}
                       style={{visibility: "hidden"}}/><br/>
                <p id="phoneCheck"></p>
                <button className="btn btn-primary"
                        id="createBooking"
                        style={{
                            position: "relative",
                            float: "right",
                            right: "15px",
                            top: "-40px",
                            visibility: "hidden"
                        }}
                        onClick={this.createBooking.bind(this)}
                >Crear reserva
                </button>
            </div>
        )
    }
}