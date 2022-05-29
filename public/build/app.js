"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _components_bookingsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/bookingsList */ "./assets/components/bookingsList.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _components_bookingCreator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/bookingCreator */ "./assets/components/bookingCreator.js");
// ./src/js/app.js







react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
  path: "/bookings",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_bookingsList__WEBPACK_IMPORTED_MODULE_4__["default"], null)
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
  path: "/bookings/create",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_bookingCreator__WEBPACK_IMPORTED_MODULE_5__["default"], null)
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
  path: "/",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Navigate, {
    to: "/bookings",
    replace: true
  })
}))), document.getElementById('root'));

/***/ }),

/***/ "./assets/components/bookingCreator.js":
/*!*********************************************!*\
  !*** ./assets/components/bookingCreator.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BookingCreator)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-iso-string.js */ "./node_modules/core-js/modules/es.date.to-iso-string.js");
/* harmony import */ var core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_23__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }






















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var BookingCreator = /*#__PURE__*/function (_Component) {
  _inherits(BookingCreator, _Component);

  var _super = _createSuper(BookingCreator);

  function BookingCreator(props) {
    var _this;

    _classCallCheck(this, BookingCreator);

    _this = _super.call(this, props);
    _this.state = {
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
      calculatedCheck: false
    };
    return _this;
  }

  _createClass(BookingCreator, [{
    key: "setStartDate",
    value: function setStartDate(date) {
      this.hideAvailableRooms();
      this.hideContactData();

      if (date > this.state.endDate) {
        date = this.state.endDate;
      }

      if (date < Date.now) {
        console.log("pollaaaa");
      }

      this.setState({
        startDate: date
      });
    }
  }, {
    key: "setEndDate",
    value: function setEndDate(date) {
      this.hideAvailableRooms();
      this.hideContactData();

      if (date < this.state.startDate) {
        date = this.state.startDate;
      }

      if (date < Date.now) {
        console.log("pollaaaa");
      }

      this.setState({
        endDate: date
      });
    }
  }, {
    key: "getRoomTypeToDisplay",
    value: function getRoomTypeToDisplay(roomType) {
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
  }, {
    key: "hideContactData",
    value: function hideContactData() {
      var contactFields = ["name", "email", "phone"];
      var i = 0;
      document.getElementById("contactData").style.visibility = "hidden";

      while (i < contactFields.length) {
        document.getElementById(contactFields[i]).style.visibility = "hidden";
        document.getElementById(contactFields[i] + "L").style.visibility = "hidden";
        i = i + 1;
      }

      document.getElementById("createBooking").style.visibility = "hidden";
    }
  }, {
    key: "hideAvailableRooms",
    value: function hideAvailableRooms() {
      var i = 0;
      var roomTypes = ['Quadruple', 'Triple', 'Double', 'Single'];
      document.getElementById("roomsAvailableTitle").style.visibility = "hidden";

      while (i < 4) {
        document.getElementById(roomTypes[i].toLowerCase()).style.visibility = "hidden";
        document.getElementById(roomTypes[i].toLowerCase() + "L").style.visibility = "hidden";
        document.getElementById(roomTypes[i].toLowerCase() + "L").innerText = this.getRoomTypeToDisplay(roomTypes[i]) + ": ";
        i = i + 1;
      }

      document.getElementById("bookingPrice").innerHTML = "";
      document.getElementById("bookingPrice").style.visibility = "hidden";
    }
  }, {
    key: "getAvailableRooms",
    value: function getAvailableRooms() {
      var _this2 = this;

      var startDateString = this.state.startDate.toISOString().split('T')[0];
      var endDateString = this.state.endDate.toISOString().split('T')[0];
      this.hideAvailableRooms();
      this.setState({
        rooms: []
      });
      var i = 0;
      var roomTypes = ['QUADRUPLE', 'TRIPLE', 'DOUBLE', 'SINGLE'];
      var promises = [];

      while (i < 5 - this.state.numGuests) {
        promises.push(axios__WEBPACK_IMPORTED_MODULE_23___default().get('http://localhost:8000/api/rooms-available?startDate=' + '' + startDateString + '&endDate=' + endDateString + '&roomType=' + roomTypes[i]).then(function (rooms) {
          _this2.state.rooms.push(rooms.data.rooms_available);

          _this2.setState({
            rooms: _this2.state.rooms
          });
        }));
        i = i + 1;
      }

      Promise.all(promises).then(function (room) {
        i = 0;

        while (i < 5 - _this2.state.numGuests) {
          document.getElementById(roomTypes[i].toLowerCase()).style.visibility = "visible";
          document.getElementById(roomTypes[i].toLowerCase() + "L").style.visibility = "visible";
          document.getElementById(roomTypes[i].toLowerCase() + "L").innerHTML += _this2.state.rooms[i] + " habitaciones disponibles";
          i = i + 1;
        }
      });
      document.getElementById("roomsAvailableTitle").style.visibility = "visible";
    }
  }, {
    key: "selectedNumGuests",
    value: function selectedNumGuests() {
      this.hideAvailableRooms();
      this.hideContactData();
      this.setState({
        numGuests: document.getElementById('numGuests').selectedIndex + 1
      });
      var roomTypes = ['QUADRUPLE', 'TRIPLE', 'DOUBLE', 'SINGLE'];
      var i = 0;

      while (i < 5 - this.state.numGuests) {
        document.getElementById(roomTypes[i].toLowerCase()).style.visibility = "hidden";
        document.getElementById(roomTypes[i].toLowerCase() + "L").style.visibility = "hidden";
        i = i + 1;
      }

      document.getElementById("roomsAvailableTitle").style.visibility = "hidden";
    }
  }, {
    key: "getBookingPrice",
    value: function getBookingPrice() {
      var _this3 = this;

      var startDateString = this.state.startDate.toISOString().split('T')[0];
      var endDateString = this.state.endDate.toISOString().split('T')[0];
      var roomType = document.querySelector('input[name="roomTypes"]:checked').value.toUpperCase();
      this.setState({
        roomType: roomType
      });
      axios__WEBPACK_IMPORTED_MODULE_23___default().get('http://localhost:8000/api/bookings/price?startDate=' + '' + startDateString + '&endDate=' + endDateString + '&roomType=' + roomType).then(function (prices) {
        _this3.setState({
          bookingPrice: prices.data.bookingTotals
        });

        document.getElementById("bookingPrice").innerHTML = "Precio total: " + _this3.state.bookingPrice + "€";
        document.getElementById("bookingPrice").style.visibility = "visible";
      });
      this.displayContactDataForm();
    }
  }, {
    key: "createBooking",
    value: function createBooking() {
      document.getElementById("nameCheck").innerText = "";
      document.getElementById("emailCheck").innerText = "";
      document.getElementById("phoneCheck").innerText = "";
      var nameOk = true;
      var emailOk = true;
      var phoneOk = true;

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

      axios__WEBPACK_IMPORTED_MODULE_23___default().post('http://localhost:8000/api/bookings', {
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        roomType: this.state.roomType,
        numGuests: this.state.numGuests,
        bookingTotals: this.state.bookingPrice,
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone
      }).then(function (response) {
        new (sweetalert2__WEBPACK_IMPORTED_MODULE_22___default())("Genial!", ", Se ha creado la reserva correctamente.", "success").then(function () {
          return document.location.href = '../';
        });
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }, {
    key: "displayContactDataForm",
    value: function displayContactDataForm() {
      var contactFields = ["name", "email", "phone"];
      var i = 0;
      document.getElementById("contactData").style.visibility = "visible";

      while (i < contactFields.length) {
        document.getElementById(contactFields[i]).style.visibility = "visible";
        document.getElementById(contactFields[i] + "L").style.visibility = "visible";
        i = i + 1;
      }

      document.getElementById("createBooking").style.visibility = "visible";
    }
  }, {
    key: "handleChange",
    value: function handleChange(field, event) {
      switch (field) {
        case "name":
          this.setState({
            name: event.target.value
          });
          break;

        case "email":
          this.setState({
            email: event.target.value
          });
          break;

        case "phone":
          this.setState({
            phone: event.target.value
          });
          break;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
        className: "new-booking-form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("h2", {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("span", null, "Nueva reserva")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
        className: "bookings-list-title mt-3"
      }), "Fecha de entrada", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement((react_datepicker__WEBPACK_IMPORTED_MODULE_24___default()), {
        dateFormat: "dd/MM/yyyy",
        selected: this.state.startDate,
        onChange: function onChange(date) {
          _this4.setStartDate(date);
        },
        minDate: new Date()
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
        className: "bookings-list-title mt-3"
      }), "Fecha de salida", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement((react_datepicker__WEBPACK_IMPORTED_MODULE_24___default()), {
        dateFormat: "dd/MM/yyyy",
        selected: this.state.endDate,
        onChange: function onChange(date) {
          _this4.setEndDate(date);
        },
        minDate: new Date()
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
        className: "bookings-list-title mt-5"
      }), "N\xBA de hu\xE9spedes", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("select", {
        onChange: this.selectedNumGuests.bind(this),
        name: "numGuests",
        id: "numGuests"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("option", {
        value: "1"
      }, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("option", {
        value: "2"
      }, "2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("option", {
        value: "3"
      }, "3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("option", {
        value: "4"
      }, "4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("button", {
        id: "show-available-rooms",
        className: "btn btn-primary",
        onClick: this.getAvailableRooms.bind(this)
      }, "Ver habitaciones disponibles"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
        className: "bookings-list-title mt-3"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("p", {
        id: "roomsAvailableTitle",
        style: {
          visibility: "hidden"
        }
      }, "Habitaciones disponibles: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
        className: "bookings-list-title mt-1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("input", {
        type: "radio",
        id: "single",
        name: "roomTypes",
        value: "Single",
        onClick: this.getBookingPrice.bind(this),
        style: {
          visibility: "hidden"
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("label", {
        htmlFor: "single",
        id: "singleL",
        style: {
          visibility: "hidden"
        }
      }, "Individual "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("input", {
        type: "radio",
        id: "double",
        name: "roomTypes",
        value: "Double",
        onClick: this.getBookingPrice.bind(this),
        style: {
          visibility: "hidden"
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("label", {
        htmlFor: "double",
        id: "doubleL",
        style: {
          visibility: "hidden"
        }
      }, "Doble "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("input", {
        type: "radio",
        id: "triple",
        name: "roomTypes",
        value: "Triple",
        onClick: this.getBookingPrice.bind(this),
        style: {
          visibility: "hidden"
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("label", {
        htmlFor: "triple",
        id: "tripleL",
        style: {
          visibility: "hidden"
        }
      }, "Triple "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("input", {
        type: "radio",
        id: "quadruple",
        name: "roomTypes",
        value: "Quadruple",
        onClick: this.getBookingPrice.bind(this),
        style: {
          visibility: "hidden"
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("label", {
        htmlFor: "quadruple",
        id: "quadrupleL",
        style: {
          visibility: "hidden"
        }
      }, "Cuadruple "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
        className: "bookings-list-title mt-2"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("p", {
        id: "bookingPrice",
        style: {
          visibility: "hidden"
        }
      }, "Precio total: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
        className: "bookings-list-title mt-3"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("p", {
        id: "contactData",
        style: {
          visibility: "hidden"
        }
      }, "Datos de contacto para la reserva: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("label", {
        htmlFor: "name",
        id: "nameL",
        style: {
          visibility: "hidden"
        }
      }, "Nombre y Apellidos:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("input", {
        type: "text",
        id: "name",
        name: "name",
        onChange: function onChange(evt) {
          return _this4.handleChange('name', evt);
        },
        style: {
          visibility: "hidden"
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("p", {
        id: "nameCheck"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("label", {
        htmlFor: "email",
        id: "emailL",
        style: {
          visibility: "hidden"
        }
      }, "Correo electr\xF3nico:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("input", {
        type: "text",
        id: "email",
        name: "email",
        onChange: function onChange(evt) {
          return _this4.handleChange('email', evt);
        },
        style: {
          visibility: "hidden"
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("p", {
        id: "emailCheck"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("label", {
        htmlFor: "phone",
        id: "phoneL",
        style: {
          visibility: "hidden"
        }
      }, "N\xBA de tel\xE9fono/m\xF3vil:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("input", {
        type: "text",
        id: "phone",
        name: "phone",
        onChange: function onChange(evt) {
          return _this4.handleChange('phone', evt);
        },
        style: {
          visibility: "hidden"
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("p", {
        id: "phoneCheck"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("button", {
        className: "btn btn-primary",
        id: "createBooking",
        style: {
          position: "relative",
          "float": "right",
          right: "15px",
          top: "-40px",
          visibility: "hidden"
        },
        onClick: this.createBooking.bind(this)
      }, "Crear reserva"));
    }
  }]);

  return BookingCreator;
}(react__WEBPACK_IMPORTED_MODULE_20__.Component);



/***/ }),

/***/ "./assets/components/bookingsList.js":
/*!*******************************************!*\
  !*** ./assets/components/bookingsList.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Bookings)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _bookingCreator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bookingCreator */ "./assets/components/bookingCreator.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var Bookings = /*#__PURE__*/function (_Component) {
  _inherits(Bookings, _Component);

  var _super = _createSuper(Bookings);

  function Bookings() {
    var _this;

    _classCallCheck(this, Bookings);

    _this = _super.call(this);
    _this.state = {
      bookings: []
    };
    return _this;
  }

  _createClass(Bookings, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getBookings();
    }
  }, {
    key: "getBookings",
    value: function getBookings() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_16___default().get("http://localhost:8000/api/bookings").then(function (bookings) {
        _this2.setState({
          bookings: bookings.data
        });

        console.log(_this2.state.bookings.endDate);
      });
    }
  }, {
    key: "getRoomTypeToDisplay",
    value: function getRoomTypeToDisplay(roomType) {
      switch (roomType) {
        case 'SINGLE':
          return 'Individual';

        case 'DOUBLE':
          return 'Doble';

        case 'TRIPLE':
          return 'Triple';

        case 'QUADRUPLE':
          return 'Cuádruple';
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Link, {
        className: "btn btn-primary",
        to: "/bookings/create",
        style: {
          position: "relative",
          "float": "right",
          right: "200px"
        }
      }, "Crear reserva"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("section", {
        className: "row-section"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
        className: "bookings-list-title mt-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("h2", {
        className: "text-center"
      }, "Lista de reservas")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
        className: "bookings-list-title mt-5"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
        className: 'row'
      }, this.state.bookings.map(function (booking) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
          className: "mt-3",
          key: booking.locator,
          style: {
            background: "black;",
            color: "white;",
            padding: "20px;"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
          className: "booking"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
          className: "booking-body"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
          className: "booking-locator"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("b", null, "Localizador de la reserva: "), " ", booking.locator, " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("span", {
          className: "booking-room-type"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("b", null, "Tipo de habitaci\xF3n: "), " ", _this3.getRoomTypeToDisplay(booking.roomType)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("span", {
          className: "booking-num-guests"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("b", null, "N\xBA de hu\xE9spedes: "), " ", booking.numGuests), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("span", {
          className: "booking-start-date"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("b", null, "Fecha de entrada: "), " ", booking.startDate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("span", {
          className: "booking-end-date"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("b", null, "Fecha de salida: "), " ", booking.endDate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("span", {
          className: "booking-totals"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("b", null, "Precio de la reserva: "), " ", booking.bookingTotals, "\u20AC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("span", {
          className: "booking-contact-data"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("b", null, "Datos de contacto: ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("span", {
          id: "name",
          className: "booking-name"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("b", null, "Nombre: "), booking.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("span", {
          id: "email",
          className: "booking-email"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("b", null, "Correo electr\xF3nico: "), booking.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("span", {
          id: "phone",
          className: "booking-phone"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("b", null, "N\xBA de tel\xE9fono: "), booking.phone)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
          className: "bookings-list-title mt-5"
        })));
      })))));
    }
  }]);

  return Bookings;
}(react__WEBPACK_IMPORTED_MODULE_15__.Component);



/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_map_js-node_modules-9f7aca"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsRUFBQyxNQUFUO1VBQWdCLFNBQVMsRUFBQztRQUExQixnQkFBeUMsa0ZBQXpDLEVBQXlEaUMsT0FBTyxDQUFDMUUsSUFBakUsQ0FiSixlQWNJO1VBQU0sRUFBRSxFQUFDLE9BQVQ7VUFBaUIsU0FBUyxFQUFDO1FBQTNCLGdCQUEyQyxpR0FBM0MsRUFBdUUwRSxPQUFPLENBQUN6RSxLQUEvRSxDQWRKLGVBZUk7VUFBTSxFQUFFLEVBQUMsT0FBVDtVQUFpQixTQUFTLEVBQUM7UUFBM0IsZ0JBQTJDLGdHQUEzQyxFQUFtRXlFLE9BQU8sQ0FBQ3hFLEtBQTNFLENBZkosQ0FESixlQWtCSTtVQUFLLFNBQVMsRUFBQztRQUFmLEVBbEJKLENBRkosQ0FENEI7TUFBQSxDQUEvQixDQURMLENBTEosQ0FESixDQUhKLENBREo7SUF5Q0g7Ozs7RUFyRWlDaEI7Ozs7Ozs7Ozs7Ozs7QUNkdEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2Jvb2tpbmdDcmVhdG9yLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2Jvb2tpbmdzTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3M/M2ZiYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuL3NyYy9qcy9hcHAuanNcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCBCb29raW5nc0xpc3QgZnJvbSAnLi9jb21wb25lbnRzL2Jvb2tpbmdzTGlzdCc7XG5pbXBvcnQge0Jyb3dzZXJSb3V0ZXIsIFJvdXRlcywgUm91dGUsIFJlZGlyZWN0LCBOYXZpZ2F0ZX0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBCb29raW5nQ3JlYXRvciBmcm9tIFwiLi9jb21wb25lbnRzL2Jvb2tpbmdDcmVhdG9yXCI7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2Jvb2tpbmdzXCIgZWxlbWVudD17PEJvb2tpbmdzTGlzdC8+fSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYm9va2luZ3MvY3JlYXRlXCIgZWxlbWVudD17PEJvb2tpbmdDcmVhdG9yLz59Lz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiZWxlbWVudD17PE5hdmlnYXRlIHRvPVwiL2Jvb2tpbmdzXCIgcmVwbGFjZSAvPn0vPlxuICAgICAgICA8L1JvdXRlcz5cbiAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4gICAgLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwicmVhY3QtZGF0ZXBpY2tlclwiO1xyXG5pbXBvcnQgXCJyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5jc3NcIjtcclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7Rm9ybUNvbnRyb2xMYWJlbCwgUmFkaW9Hcm91cH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb29raW5nQ3JlYXRvciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgbnVtR3Vlc3RzOiAxLFxyXG4gICAgICAgICAgICByb29tVHlwZTogXCJcIixcclxuICAgICAgICAgICAgcm9vbXM6IFtdLFxyXG4gICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgICAgcGhvbmU6IFwiXCIsXHJcbiAgICAgICAgICAgIGJvb2tpbmdQcmljZTogMCxcclxuICAgICAgICAgICAgcm9vbXNBdmFpbGFibGVDaGVjazogZmFsc2UsXHJcbiAgICAgICAgICAgIGNhbGN1bGF0ZWRDaGVjazogZmFsc2UsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXJ0RGF0ZShkYXRlKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlQXZhaWxhYmxlUm9vbXMoKTtcclxuICAgICAgICB0aGlzLmhpZGVDb250YWN0RGF0YSgpO1xyXG5cclxuICAgICAgICBpZiAoZGF0ZSA+IHRoaXMuc3RhdGUuZW5kRGF0ZSkge1xyXG4gICAgICAgICAgICBkYXRlID0gdGhpcy5zdGF0ZS5lbmREYXRlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGF0ZSA8IERhdGUubm93KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicG9sbGFhYWFcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc3RhcnREYXRlOiBkYXRlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHNldEVuZERhdGUoZGF0ZSkge1xyXG4gICAgICAgIHRoaXMuaGlkZUF2YWlsYWJsZVJvb21zKCk7XHJcbiAgICAgICAgdGhpcy5oaWRlQ29udGFjdERhdGEoKTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGUgPCB0aGlzLnN0YXRlLnN0YXJ0RGF0ZSkge1xyXG4gICAgICAgICAgICBkYXRlID0gdGhpcy5zdGF0ZS5zdGFydERhdGVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkYXRlIDwgRGF0ZS5ub3cpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwb2xsYWFhYVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBlbmREYXRlOiBkYXRlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGdldFJvb21UeXBlVG9EaXNwbGF5IChyb29tVHlwZSkge1xyXG4gICAgICAgIHN3aXRjaCAocm9vbVR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnU2luZ2xlJzogcmV0dXJuICdJbmRpdmlkdWFsJztcclxuICAgICAgICAgICAgY2FzZSAnRG91YmxlJzogcmV0dXJuICdEb2JsZSc7XHJcbiAgICAgICAgICAgIGNhc2UgJ1RyaXBsZSc6IHJldHVybiAnVHJpcGxlJztcclxuICAgICAgICAgICAgY2FzZSAnUXVhZHJ1cGxlJzogcmV0dXJuICdDdcOhZHJ1cGxlJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUNvbnRhY3REYXRhKCkge1xyXG4gICAgICAgIGxldCBjb250YWN0RmllbGRzID0gW1wibmFtZVwiLCBcImVtYWlsXCIsIFwicGhvbmVcIl07XHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3REYXRhXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG5cclxuICAgICAgICB3aGlsZSAoaSA8IGNvbnRhY3RGaWVsZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhY3RGaWVsZHNbaV0pLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWN0RmllbGRzW2ldICsgXCJMXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICBpID0gaSArIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZUJvb2tpbmdcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUF2YWlsYWJsZVJvb21zKCkge1xyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICBsZXQgcm9vbVR5cGVzID0gWydRdWFkcnVwbGUnLCAnVHJpcGxlJywgJ0RvdWJsZScsICdTaW5nbGUnXTtcclxuXHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vbXNBdmFpbGFibGVUaXRsZVwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuXHJcbiAgICAgICAgd2hpbGUgKGkgPCA0KSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJvb21UeXBlc1tpXS50b0xvd2VyQ2FzZSgpKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocm9vbVR5cGVzW2ldLnRvTG93ZXJDYXNlKCkgKyBcIkxcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJvb21UeXBlc1tpXS50b0xvd2VyQ2FzZSgpICsgXCJMXCIpLmlubmVyVGV4dCA9IHRoaXMuZ2V0Um9vbVR5cGVUb0Rpc3BsYXkocm9vbVR5cGVzW2ldKSArIFwiOiBcIjtcclxuICAgICAgICAgICAgaSA9IGkgKyAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib29raW5nUHJpY2VcIikuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9va2luZ1ByaWNlXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEF2YWlsYWJsZVJvb21zKCkge1xyXG4gICAgICAgIGxldCBzdGFydERhdGVTdHJpbmcgPSB0aGlzLnN0YXRlLnN0YXJ0RGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICAgICAgbGV0IGVuZERhdGVTdHJpbmcgPSB0aGlzLnN0YXRlLmVuZERhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG5cclxuICAgICAgICB0aGlzLmhpZGVBdmFpbGFibGVSb29tcygpXHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICByb29tczogW11cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICBsZXQgcm9vbVR5cGVzID0gWydRVUFEUlVQTEUnLCAnVFJJUExFJywgJ0RPVUJMRScsICdTSU5HTEUnXTtcclxuICAgICAgICBsZXQgcHJvbWlzZXMgPSBbXVxyXG4gICAgICAgIHdoaWxlIChpIDwgNSAtIHRoaXMuc3RhdGUubnVtR3Vlc3RzKSB7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Jvb21zLWF2YWlsYWJsZT9zdGFydERhdGU9JyArXHJcbiAgICAgICAgICAgICAgICAnJyArIHN0YXJ0RGF0ZVN0cmluZyArXHJcbiAgICAgICAgICAgICAgICAnJmVuZERhdGU9JyArIGVuZERhdGVTdHJpbmcgK1xyXG4gICAgICAgICAgICAgICAgJyZyb29tVHlwZT0nICsgcm9vbVR5cGVzW2ldKS50aGVuKHJvb21zID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucm9vbXMucHVzaChyb29tcy5kYXRhLnJvb21zX2F2YWlsYWJsZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyb29tczogdGhpcy5zdGF0ZS5yb29tc30pO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIGkgPSBpICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKHJvb20pID0+IHtcclxuICAgICAgICAgICAgaSA9IDBcclxuICAgICAgICAgICAgd2hpbGUgKGkgPCA1IC0gdGhpcy5zdGF0ZS5udW1HdWVzdHMpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJvb21UeXBlc1tpXS50b0xvd2VyQ2FzZSgpKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyb29tVHlwZXNbaV0udG9Mb3dlckNhc2UoKSArIFwiTFwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyb29tVHlwZXNbaV0udG9Mb3dlckNhc2UoKSArIFwiTFwiKS5pbm5lckhUTUwgKz0gdGhpcy5zdGF0ZS5yb29tc1tpXSArIFwiIGhhYml0YWNpb25lcyBkaXNwb25pYmxlc1wiO1xyXG4gICAgICAgICAgICAgICAgaSA9IGkgKyAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb29tc0F2YWlsYWJsZVRpdGxlXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RlZE51bUd1ZXN0cygpIHtcclxuICAgICAgICB0aGlzLmhpZGVBdmFpbGFibGVSb29tcygpO1xyXG4gICAgICAgIHRoaXMuaGlkZUNvbnRhY3REYXRhKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBudW1HdWVzdHM6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdudW1HdWVzdHMnKS5zZWxlY3RlZEluZGV4ICsgMVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCByb29tVHlwZXMgPSBbJ1FVQURSVVBMRScsICdUUklQTEUnLCAnRE9VQkxFJywgJ1NJTkdMRSddO1xyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICB3aGlsZSAoaSA8IDUgLSB0aGlzLnN0YXRlLm51bUd1ZXN0cykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyb29tVHlwZXNbaV0udG9Mb3dlckNhc2UoKSkuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJvb21UeXBlc1tpXS50b0xvd2VyQ2FzZSgpICsgXCJMXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICBpID0gaSArIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb21zQXZhaWxhYmxlVGl0bGVcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Qm9va2luZ1ByaWNlKCkge1xyXG4gICAgICAgIGxldCBzdGFydERhdGVTdHJpbmcgPSB0aGlzLnN0YXRlLnN0YXJ0RGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICAgICAgbGV0IGVuZERhdGVTdHJpbmcgPSB0aGlzLnN0YXRlLmVuZERhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG5cclxuICAgICAgICBsZXQgcm9vbVR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicm9vbVR5cGVzXCJdOmNoZWNrZWQnKS52YWx1ZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICByb29tVHlwZTogcm9vbVR5cGVcclxuICAgICAgICB9KVxyXG4gICAgICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9ib29raW5ncy9wcmljZT9zdGFydERhdGU9JyArXHJcbiAgICAgICAgICAgICcnICsgc3RhcnREYXRlU3RyaW5nICtcclxuICAgICAgICAgICAgJyZlbmREYXRlPScgKyBlbmREYXRlU3RyaW5nICtcclxuICAgICAgICAgICAgJyZyb29tVHlwZT0nICsgcm9vbVR5cGUpLnRoZW4ocHJpY2VzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Ym9va2luZ1ByaWNlOiBwcmljZXMuZGF0YS5ib29raW5nVG90YWxzfSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9va2luZ1ByaWNlXCIpLmlubmVySFRNTCA9IFwiUHJlY2lvIHRvdGFsOiBcIiArIHRoaXMuc3RhdGUuYm9va2luZ1ByaWNlICsgXCLigqxcIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib29raW5nUHJpY2VcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuZGlzcGxheUNvbnRhY3REYXRhRm9ybSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUJvb2tpbmcoKSB7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZUNoZWNrXCIpLmlubmVyVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbENoZWNrXCIpLmlubmVyVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaG9uZUNoZWNrXCIpLmlubmVyVGV4dCA9IFwiXCI7XHJcblxyXG4gICAgICAgIGxldCBuYW1lT2sgPSB0cnVlO1xyXG4gICAgICAgIGxldCBlbWFpbE9rID0gdHJ1ZTtcclxuICAgICAgICBsZXQgcGhvbmVPayA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm5hbWUgPT0gXCJcIikge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVDaGVja1wiKS5pbm5lclRleHQgPSBcIkVzdGUgY2FtcG8gZXN0YSB2YWPDrW8uIFBvciBmYXZvciwgcmVsbMOpbmFsb1wiO1xyXG4gICAgICAgICAgICBuYW1lT2sgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm5hbWUubGVuZ3RoID4gNTApIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lQ2hlY2tcIikuaW5uZXJUZXh0ID0gXCJFc3RlIGNhbXBvIHRpZW5lIHVuIG3DoXhpbW8gZGUgNTAgY2FyYWN0ZXJlcy5cIjtcclxuICAgICAgICAgICAgbmFtZU9rID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5lbWFpbCA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxDaGVja1wiKS5pbm5lclRleHQgPSBcIkVzdGUgY2FtcG8gZXN0YSB2YWPDrW8uIFBvciBmYXZvciwgcmVsbMOpbmFsb1wiO1xyXG4gICAgICAgICAgICBlbWFpbE9rID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5lbWFpbC5sZW5ndGggPiA1MCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsQ2hlY2tcIikuaW5uZXJUZXh0ID0gXCJFc3RlIGNhbXBvIHRpZW5lIHVuIG3DoXhpbW8gZGUgNTAgY2FyYWN0ZXJlcy5cIjtcclxuICAgICAgICAgICAgZW1haWxPayA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucGhvbmUgPT0gXCJcIikge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBob25lQ2hlY2tcIikuaW5uZXJUZXh0ID0gXCJFc3RlIGNhbXBvIGVzdGEgdmFjw61vLiBQb3IgZmF2b3IsIHJlbGzDqW5hbG9cIjtcclxuICAgICAgICAgICAgcGhvbmVPayA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucGhvbmUubGVuZ3RoID4gMTApIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lQ2hlY2tcIikuaW5uZXJUZXh0ID0gXCJFc3RlIGNhbXBvIHRpZW5lIHVuIG3DoXhpbW8gZGUgMTAgY2FyYWN0ZXJlcy5cIjtcclxuICAgICAgICAgICAgcGhvbmVPayA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFuYW1lT2sgfHwgIWVtYWlsT2sgfHwgIXBob25lT2spIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobmFtZU9rLCBlbWFpbE9rLCBwaG9uZU9rKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9ib29raW5ncycsIHtcclxuICAgICAgICAgICAgc3RhcnREYXRlOiB0aGlzLnN0YXRlLnN0YXJ0RGF0ZSxcclxuICAgICAgICAgICAgZW5kRGF0ZTogdGhpcy5zdGF0ZS5lbmREYXRlLFxyXG4gICAgICAgICAgICByb29tVHlwZTogdGhpcy5zdGF0ZS5yb29tVHlwZSxcclxuICAgICAgICAgICAgbnVtR3Vlc3RzOiB0aGlzLnN0YXRlLm51bUd1ZXN0cyxcclxuICAgICAgICAgICAgYm9va2luZ1RvdGFsczogdGhpcy5zdGF0ZS5ib29raW5nUHJpY2UsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmFtZSxcclxuICAgICAgICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXHJcbiAgICAgICAgICAgIHBob25lOiB0aGlzLnN0YXRlLnBob25lXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBuZXcgU3dhbChcIkdlbmlhbCFcIiwgXCIsIFNlIGhhIGNyZWFkbyBsYSByZXNlcnZhIGNvcnJlY3RhbWVudGUuXCIsIFwic3VjY2Vzc1wiKS50aGVuKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9ICcuLi8nXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheUNvbnRhY3REYXRhRm9ybSgpIHtcclxuICAgICAgICBsZXQgY29udGFjdEZpZWxkcyA9IFtcIm5hbWVcIiwgXCJlbWFpbFwiLCBcInBob25lXCJdO1xyXG4gICAgICAgIGxldCBpID0gMDtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0RGF0YVwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcblxyXG4gICAgICAgIHdoaWxlIChpIDwgY29udGFjdEZpZWxkcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFjdEZpZWxkc1tpXSkuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWN0RmllbGRzW2ldICsgXCJMXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgICAgICAgICAgaSA9IGkgKyAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVCb29raW5nXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlKGZpZWxkLCBldmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZmllbGQpIHtcclxuICAgICAgICAgICAgY2FzZSBcIm5hbWVcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe25hbWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJlbWFpbFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW1haWw6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwaG9uZVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGhvbmU6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1ib29raW5nLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPjxzcGFuPk51ZXZhIHJlc2VydmE8L3NwYW4+PC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZ3MtbGlzdC10aXRsZSBtdC0zXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICBGZWNoYSBkZSBlbnRyYWRhXHJcbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5zdGF0ZS5zdGFydERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhcnREYXRlKGRhdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBtaW5EYXRlPXtuZXcgRGF0ZSgpfS8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmdzLWxpc3QtdGl0bGUgbXQtM1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgRmVjaGEgZGUgc2FsaWRhXHJcbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5zdGF0ZS5lbmREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVuZERhdGUoZGF0ZSlcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG1pbkRhdGU9e25ldyBEYXRlKCl9Lz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZ3MtbGlzdC10aXRsZSBtdC01XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICBOwrogZGUgaHXDqXNwZWRlc1xyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17dGhpcy5zZWxlY3RlZE51bUd1ZXN0cy5iaW5kKHRoaXMpfSBuYW1lPVwibnVtR3Vlc3RzXCIgaWQ9XCJudW1HdWVzdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPjE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPjI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPjM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPjQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNob3ctYXZhaWxhYmxlLXJvb21zXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5nZXRBdmFpbGFibGVSb29tcy5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgPlZlciBoYWJpdGFjaW9uZXMgZGlzcG9uaWJsZXNcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29raW5ncy1saXN0LXRpdGxlIG10LTNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGlkPVwicm9vbXNBdmFpbGFibGVUaXRsZVwiIHN0eWxlPXt7dmlzaWJpbGl0eTogXCJoaWRkZW5cIn19PkhhYml0YWNpb25lcyBkaXNwb25pYmxlczogPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29raW5ncy1saXN0LXRpdGxlIG10LTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInNpbmdsZVwiIG5hbWU9XCJyb29tVHlwZXNcIiB2YWx1ZT1cIlNpbmdsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5nZXRCb29raW5nUHJpY2UuYmluZCh0aGlzKX0gc3R5bGU9e3t2aXNpYmlsaXR5OiBcImhpZGRlblwifX0vPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzaW5nbGVcIiBpZD1cInNpbmdsZUxcIiBzdHlsZT17e3Zpc2liaWxpdHk6IFwiaGlkZGVuXCJ9fT5JbmRpdmlkdWFsIDwvbGFiZWw+PGJyLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImRvdWJsZVwiIG5hbWU9XCJyb29tVHlwZXNcIiB2YWx1ZT1cIkRvdWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5nZXRCb29raW5nUHJpY2UuYmluZCh0aGlzKX0gc3R5bGU9e3t2aXNpYmlsaXR5OiBcImhpZGRlblwifX0vPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkb3VibGVcIiBpZD1cImRvdWJsZUxcIiBzdHlsZT17e3Zpc2liaWxpdHk6IFwiaGlkZGVuXCJ9fT5Eb2JsZSA8L2xhYmVsPjxici8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJ0cmlwbGVcIiBuYW1lPVwicm9vbVR5cGVzXCIgdmFsdWU9XCJUcmlwbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZ2V0Qm9va2luZ1ByaWNlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t2aXNpYmlsaXR5OiBcImhpZGRlblwifX0vPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0cmlwbGVcIiBpZD1cInRyaXBsZUxcIiBzdHlsZT17e3Zpc2liaWxpdHk6IFwiaGlkZGVuXCJ9fT5UcmlwbGUgPC9sYWJlbD48YnIvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwicXVhZHJ1cGxlXCIgbmFtZT1cInJvb21UeXBlc1wiIHZhbHVlPVwiUXVhZHJ1cGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmdldEJvb2tpbmdQcmljZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dmlzaWJpbGl0eTogXCJoaWRkZW5cIn19Lz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicXVhZHJ1cGxlXCIgaWQ9XCJxdWFkcnVwbGVMXCIgc3R5bGU9e3t2aXNpYmlsaXR5OiBcImhpZGRlblwifX0+Q3VhZHJ1cGxlIDwvbGFiZWw+PGJyLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZ3MtbGlzdC10aXRsZSBtdC0yXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBpZD1cImJvb2tpbmdQcmljZVwiIHN0eWxlPXt7dmlzaWJpbGl0eTogXCJoaWRkZW5cIn19PlByZWNpbyB0b3RhbDogPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29raW5ncy1saXN0LXRpdGxlIG10LTNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGlkPVwiY29udGFjdERhdGFcIiBzdHlsZT17e3Zpc2liaWxpdHk6IFwiaGlkZGVuXCJ9fT5EYXRvcyBkZSBjb250YWN0byBwYXJhIGxhIHJlc2VydmE6IDwvcD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiIGlkPVwibmFtZUxcIiBzdHlsZT17e3Zpc2liaWxpdHk6IFwiaGlkZGVuXCJ9fT5Ob21icmUgeSBBcGVsbGlkb3M6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIG5hbWU9XCJuYW1lXCIgb25DaGFuZ2U9eyhldnQpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKCduYW1lJywgZXZ0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Zpc2liaWxpdHk6IFwiaGlkZGVuXCJ9fS8+PGJyLz5cclxuICAgICAgICAgICAgICAgIDxwIGlkPVwibmFtZUNoZWNrXCI+PC9wPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGlkPVwiZW1haWxMXCIgc3R5bGU9e3t2aXNpYmlsaXR5OiBcImhpZGRlblwifX0+Q29ycmVvIGVsZWN0csOzbmljbzo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIG9uQ2hhbmdlPXsoZXZ0KSA9PiB0aGlzLmhhbmRsZUNoYW5nZSgnZW1haWwnLCBldnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dmlzaWJpbGl0eTogXCJoaWRkZW5cIn19Lz48YnIvPlxyXG4gICAgICAgICAgICAgICAgPHAgaWQ9XCJlbWFpbENoZWNrXCI+PC9wPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiIGlkPVwicGhvbmVMXCIgc3R5bGU9e3t2aXNpYmlsaXR5OiBcImhpZGRlblwifX0+TsK6IGRlIHRlbMOpZm9uby9tw7N2aWw6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicGhvbmVcIiBuYW1lPVwicGhvbmVcIiBvbkNoYW5nZT17KGV2dCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoJ3Bob25lJywgZXZ0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Zpc2liaWxpdHk6IFwiaGlkZGVuXCJ9fS8+PGJyLz5cclxuICAgICAgICAgICAgICAgIDxwIGlkPVwicGhvbmVDaGVja1wiPjwvcD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjcmVhdGVCb29raW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBmbG9hdDogXCJyaWdodFwiLCByaWdodDogXCIxNXB4XCIsIHRvcDogXCItNDBweFwiLCB2aXNpYmlsaXR5OiBcImhpZGRlblwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jcmVhdGVCb29raW5nLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICA+Q3JlYXIgcmVzZXJ2YVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBCcm93c2VyUm91dGVyIGFzIFJvdXRlcixcclxuICAgIFJlZGlyZWN0LFxyXG4gICAgU3dpdGNoLFxyXG4gICAgUm91dGUsXHJcbiAgICBMaW5rLCBSb3V0ZXNcclxufSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQm9va2luZ0NyZWF0b3IgZnJvbSBcIi4vYm9va2luZ0NyZWF0b3JcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb29raW5ncyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge2Jvb2tpbmdzOiBbXX1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmdldEJvb2tpbmdzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Qm9va2luZ3MoKSB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2Jvb2tpbmdzYCkudGhlbihib29raW5ncyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Jvb2tpbmdzOiBib29raW5ncy5kYXRhfSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5ib29raW5ncy5lbmREYXRlKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldFJvb21UeXBlVG9EaXNwbGF5IChyb29tVHlwZSkge1xyXG4gICAgICAgIHN3aXRjaCAocm9vbVR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnU0lOR0xFJzogcmV0dXJuICdJbmRpdmlkdWFsJztcclxuICAgICAgICAgICAgY2FzZSAnRE9VQkxFJzogcmV0dXJuICdEb2JsZSc7XHJcbiAgICAgICAgICAgIGNhc2UgJ1RSSVBMRSc6IHJldHVybiAnVHJpcGxlJztcclxuICAgICAgICAgICAgY2FzZSAnUVVBRFJVUExFJzogcmV0dXJuICdDdcOhZHJ1cGxlJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0bz1cIi9ib29raW5ncy9jcmVhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBmbG9hdDogXCJyaWdodFwiLCByaWdodDogXCIyMDBweFwifX0+Q3JlYXIgcmVzZXJ2YTwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJvdy1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29raW5ncy1saXN0LXRpdGxlIG10LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkxpc3RhIGRlIHJlc2VydmFzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZ3MtbGlzdC10aXRsZSBtdC01XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncm93J30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5ib29raW5ncy5tYXAoYm9va2luZyA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtM1wiIGtleT17Ym9va2luZy5sb2NhdG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcImJsYWNrO1wiLCBjb2xvcjogXCJ3aGl0ZTtcIiwgcGFkZGluZzogXCIyMHB4O1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29raW5nLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmctbG9jYXRvclwiPjxwPjxiPkxvY2FsaXphZG9yIGRlIGxhIHJlc2VydmE6IDwvYj4ge2Jvb2tpbmcubG9jYXRvcn0gPC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvb2tpbmctcm9vbS10eXBlXCI+PGI+VGlwbyBkZSBoYWJpdGFjacOzbjogPC9iPiB7dGhpcy5nZXRSb29tVHlwZVRvRGlzcGxheShib29raW5nLnJvb21UeXBlKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9va2luZy1udW0tZ3Vlc3RzXCI+PGI+TsK6IGRlIGh1w6lzcGVkZXM6IDwvYj4ge2Jvb2tpbmcubnVtR3Vlc3RzfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib29raW5nLXN0YXJ0LWRhdGVcIj48Yj5GZWNoYSBkZSBlbnRyYWRhOiA8L2I+IHtib29raW5nLnN0YXJ0RGF0ZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9va2luZy1lbmQtZGF0ZVwiPjxiPkZlY2hhIGRlIHNhbGlkYTogPC9iPiB7Ym9va2luZy5lbmREYXRlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib29raW5nLXRvdGFsc1wiPjxiPlByZWNpbyBkZSBsYSByZXNlcnZhOiA8L2I+IHtib29raW5nLmJvb2tpbmdUb3RhbHN94oKsPC9zcGFuPjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYm9va2luZy1jb250YWN0LWRhdGFcIj48Yj5EYXRvcyBkZSBjb250YWN0bzogPC9iPjwvc3Bhbj48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwibmFtZVwiIGNsYXNzTmFtZT1cImJvb2tpbmctbmFtZVwiPjxiPk5vbWJyZTogPC9iPntib29raW5nLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiZW1haWxcIiBjbGFzc05hbWU9XCJib29raW5nLWVtYWlsXCI+PGI+Q29ycmVvIGVsZWN0csOzbmljbzogPC9iPntib29raW5nLmVtYWlsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cInBob25lXCIgY2xhc3NOYW1lPVwiYm9va2luZy1waG9uZVwiPjxiPk7CuiBkZSB0ZWzDqWZvbm86IDwvYj57Ym9va2luZy5waG9uZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZ3MtbGlzdC10aXRsZSBtdC01XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsIkJvb2tpbmdzTGlzdCIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXMiLCJSb3V0ZSIsIlJlZGlyZWN0IiwiTmF2aWdhdGUiLCJCb29raW5nQ3JlYXRvciIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJDb21wb25lbnQiLCJEYXRlUGlja2VyIiwiU3dhbCIsImF4aW9zIiwiRm9ybUNvbnRyb2xMYWJlbCIsIlJhZGlvR3JvdXAiLCJwcm9wcyIsInN0YXRlIiwic3RhcnREYXRlIiwiRGF0ZSIsImVuZERhdGUiLCJudW1HdWVzdHMiLCJyb29tVHlwZSIsInJvb21zIiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJib29raW5nUHJpY2UiLCJyb29tc0F2YWlsYWJsZUNoZWNrIiwiY2FsY3VsYXRlZENoZWNrIiwiZGF0ZSIsImhpZGVBdmFpbGFibGVSb29tcyIsImhpZGVDb250YWN0RGF0YSIsIm5vdyIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsImNvbnRhY3RGaWVsZHMiLCJpIiwic3R5bGUiLCJ2aXNpYmlsaXR5IiwibGVuZ3RoIiwicm9vbVR5cGVzIiwidG9Mb3dlckNhc2UiLCJpbm5lclRleHQiLCJnZXRSb29tVHlwZVRvRGlzcGxheSIsImlubmVySFRNTCIsInN0YXJ0RGF0ZVN0cmluZyIsInRvSVNPU3RyaW5nIiwic3BsaXQiLCJlbmREYXRlU3RyaW5nIiwicHJvbWlzZXMiLCJwdXNoIiwiZ2V0IiwidGhlbiIsImRhdGEiLCJyb29tc19hdmFpbGFibGUiLCJQcm9taXNlIiwiYWxsIiwicm9vbSIsInNlbGVjdGVkSW5kZXgiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJ0b1VwcGVyQ2FzZSIsInByaWNlcyIsImJvb2tpbmdUb3RhbHMiLCJkaXNwbGF5Q29udGFjdERhdGFGb3JtIiwibmFtZU9rIiwiZW1haWxPayIsInBob25lT2siLCJwb3N0IiwicmVzcG9uc2UiLCJsb2NhdGlvbiIsImhyZWYiLCJlcnJvciIsImZpZWxkIiwiZXZlbnQiLCJ0YXJnZXQiLCJzZXRTdGFydERhdGUiLCJzZXRFbmREYXRlIiwic2VsZWN0ZWROdW1HdWVzdHMiLCJiaW5kIiwiZ2V0QXZhaWxhYmxlUm9vbXMiLCJnZXRCb29raW5nUHJpY2UiLCJldnQiLCJoYW5kbGVDaGFuZ2UiLCJwb3NpdGlvbiIsInJpZ2h0IiwidG9wIiwiY3JlYXRlQm9va2luZyIsIlByb3BUeXBlcyIsIlJvdXRlciIsIlN3aXRjaCIsIkxpbmsiLCJCb29raW5ncyIsImJvb2tpbmdzIiwiZ2V0Qm9va2luZ3MiLCJtYXAiLCJib29raW5nIiwibG9jYXRvciIsImJhY2tncm91bmQiLCJjb2xvciIsInBhZGRpbmciXSwic291cmNlUm9vdCI6IiJ9