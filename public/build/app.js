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







var json = __webpack_require__(/*! ../config/conf.json */ "./assets/config/conf.json");

var BASE_URL = json.BASE_URL.prod; // change to local if needed

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
        promises.push(axios__WEBPACK_IMPORTED_MODULE_23___default().get(BASE_URL + '/api/rooms-available?startDate=' + '' + startDateString + '&endDate=' + endDateString + '&roomType=' + roomTypes[i]).then(function (rooms) {
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
      axios__WEBPACK_IMPORTED_MODULE_23___default().get(BASE_URL + '/api/bookings/price?startDate=' + '' + startDateString + '&endDate=' + endDateString + '&roomType=' + roomType).then(function (prices) {
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

      axios__WEBPACK_IMPORTED_MODULE_23___default().post(BASE_URL + '/api/bookings', {
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







var json = __webpack_require__(/*! ../config/conf.json */ "./assets/config/conf.json");

var BASE_URL = json.BASE_URL.prod; // change to local if needed

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

      axios__WEBPACK_IMPORTED_MODULE_16___default().get(BASE_URL + '/api/bookings').then(function (bookings) {
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


/***/ }),

/***/ "./assets/config/conf.json":
/*!*********************************!*\
  !*** ./assets/config/conf.json ***!
  \*********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"BASE_URL":{"local":"localhost:8000","prod":"https://super-bookings-app.herokuapp.com/"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_map_js-node_modules-9f7aca"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFDLDZDQUFBLGVBQ0ksMkRBQUMsMkRBQUQscUJBQ0ksMkRBQUMsb0RBQUQscUJBQ0ksMkRBQUMsbURBQUQ7RUFBTyxJQUFJLEVBQUMsV0FBWjtFQUF3QixPQUFPLGVBQUUsMkRBQUMsZ0VBQUQ7QUFBakMsRUFESixlQUVJLDJEQUFDLG1EQUFEO0VBQU8sSUFBSSxFQUFDLGtCQUFaO0VBQStCLE9BQU8sZUFBRSwyREFBQyxrRUFBRDtBQUF4QyxFQUZKLGVBR0ksMkRBQUMsbURBQUQ7RUFBTyxJQUFJLEVBQUMsR0FBWjtFQUFlLE9BQU8sZUFBRSwyREFBQyxzREFBRDtJQUFVLEVBQUUsRUFBQyxXQUFiO0lBQXlCLE9BQU87RUFBaEM7QUFBeEIsRUFISixDQURKLENBREosRUFRTVMsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBUk47Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1LLElBQUksR0FBR0MsbUJBQU8sQ0FBQyxzREFBRCxDQUFwQjs7QUFFQSxJQUFNQyxRQUFRLEdBQUdGLElBQUksQ0FBQ0UsUUFBTCxDQUFjQyxJQUEvQixFQUFvQzs7SUFFZlg7Ozs7O0VBQ2pCLHdCQUFZWSxLQUFaLEVBQW1CO0lBQUE7O0lBQUE7O0lBQ2YsMEJBQU1BLEtBQU47SUFDQSxNQUFLQyxLQUFMLEdBQWE7TUFDVEMsU0FBUyxFQUFFLElBQUlDLElBQUosRUFERjtNQUVUQyxPQUFPLEVBQUUsSUFBSUQsSUFBSixFQUZBO01BR1RFLFNBQVMsRUFBRSxDQUhGO01BSVRDLFFBQVEsRUFBRSxFQUpEO01BS1RDLEtBQUssRUFBRSxFQUxFO01BTVRDLElBQUksRUFBRSxFQU5HO01BT1RDLEtBQUssRUFBRSxFQVBFO01BUVRDLEtBQUssRUFBRSxFQVJFO01BU1RDLFlBQVksRUFBRSxDQVRMO01BVVRDLG1CQUFtQixFQUFFLEtBVlo7TUFXVEMsZUFBZSxFQUFFO0lBWFIsQ0FBYjtJQUZlO0VBZWxCOzs7O1dBRUQsc0JBQWFDLElBQWIsRUFBbUI7TUFDZixLQUFLQyxrQkFBTDtNQUNBLEtBQUtDLGVBQUw7O01BRUEsSUFBSUYsSUFBSSxHQUFHLEtBQUtiLEtBQUwsQ0FBV0csT0FBdEIsRUFBK0I7UUFDM0JVLElBQUksR0FBRyxLQUFLYixLQUFMLENBQVdHLE9BQWxCO01BQ0g7O01BRUQsSUFBSVUsSUFBSSxHQUFHWCxJQUFJLENBQUNjLEdBQWhCLEVBQXFCO1FBQ2pCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO01BQ0g7O01BRUQsS0FBS0MsUUFBTCxDQUFjO1FBQ1ZsQixTQUFTLEVBQUVZO01BREQsQ0FBZDtJQUdIOzs7V0FFRCxvQkFBV0EsSUFBWCxFQUFpQjtNQUNiLEtBQUtDLGtCQUFMO01BQ0EsS0FBS0MsZUFBTDs7TUFFQSxJQUFJRixJQUFJLEdBQUcsS0FBS2IsS0FBTCxDQUFXQyxTQUF0QixFQUFpQztRQUM3QlksSUFBSSxHQUFHLEtBQUtiLEtBQUwsQ0FBV0MsU0FBbEI7TUFDSDs7TUFFRCxJQUFJWSxJQUFJLEdBQUdYLElBQUksQ0FBQ2MsR0FBaEIsRUFBcUI7UUFDakJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7TUFDSDs7TUFFRCxLQUFLQyxRQUFMLENBQWM7UUFDVmhCLE9BQU8sRUFBRVU7TUFEQyxDQUFkO0lBR0g7OztXQUVELDhCQUFxQlIsUUFBckIsRUFBK0I7TUFDM0IsUUFBUUEsUUFBUjtRQUNJLEtBQUssUUFBTDtVQUNJLE9BQU8sWUFBUDs7UUFDSixLQUFLLFFBQUw7VUFDSSxPQUFPLE9BQVA7O1FBQ0osS0FBSyxRQUFMO1VBQ0ksT0FBTyxRQUFQOztRQUNKLEtBQUssV0FBTDtVQUNJLE9BQU8sV0FBUDtNQVJSO0lBVUg7OztXQUVELDJCQUFrQjtNQUNkLElBQUllLGFBQWEsR0FBRyxDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLE9BQWxCLENBQXBCO01BQ0EsSUFBSUMsQ0FBQyxHQUFHLENBQVI7TUFFQWhDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixFQUF1Q2dDLEtBQXZDLENBQTZDQyxVQUE3QyxHQUEwRCxRQUExRDs7TUFFQSxPQUFPRixDQUFDLEdBQUdELGFBQWEsQ0FBQ0ksTUFBekIsRUFBaUM7UUFDN0JuQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0I4QixhQUFhLENBQUNDLENBQUQsQ0FBckMsRUFBMENDLEtBQTFDLENBQWdEQyxVQUFoRCxHQUE2RCxRQUE3RDtRQUNBbEMsUUFBUSxDQUFDQyxjQUFULENBQXdCOEIsYUFBYSxDQUFDQyxDQUFELENBQWIsR0FBbUIsR0FBM0MsRUFBZ0RDLEtBQWhELENBQXNEQyxVQUF0RCxHQUFtRSxRQUFuRTtRQUNBRixDQUFDLEdBQUdBLENBQUMsR0FBRyxDQUFSO01BQ0g7O01BRURoQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUNnQyxLQUF6QyxDQUErQ0MsVUFBL0MsR0FBNEQsUUFBNUQ7SUFDSDs7O1dBRUQsOEJBQXFCO01BQ2pCLElBQUlGLENBQUMsR0FBRyxDQUFSO01BQ0EsSUFBSUksU0FBUyxHQUFHLENBQUMsV0FBRCxFQUFjLFFBQWQsRUFBd0IsUUFBeEIsRUFBa0MsUUFBbEMsQ0FBaEI7TUFHQXBDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixxQkFBeEIsRUFBK0NnQyxLQUEvQyxDQUFxREMsVUFBckQsR0FBa0UsUUFBbEU7O01BRUEsT0FBT0YsQ0FBQyxHQUFHLENBQVgsRUFBYztRQUNWaEMsUUFBUSxDQUFDQyxjQUFULENBQXdCbUMsU0FBUyxDQUFDSixDQUFELENBQVQsQ0FBYUssV0FBYixFQUF4QixFQUFvREosS0FBcEQsQ0FBMERDLFVBQTFELEdBQXVFLFFBQXZFO1FBQ0FsQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JtQyxTQUFTLENBQUNKLENBQUQsQ0FBVCxDQUFhSyxXQUFiLEtBQTZCLEdBQXJELEVBQTBESixLQUExRCxDQUFnRUMsVUFBaEUsR0FBNkUsUUFBN0U7UUFDQWxDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3Qm1DLFNBQVMsQ0FBQ0osQ0FBRCxDQUFULENBQWFLLFdBQWIsS0FBNkIsR0FBckQsRUFBMERDLFNBQTFELEdBQXNFLEtBQUtDLG9CQUFMLENBQTBCSCxTQUFTLENBQUNKLENBQUQsQ0FBbkMsSUFBMEMsSUFBaEg7UUFDQUEsQ0FBQyxHQUFHQSxDQUFDLEdBQUcsQ0FBUjtNQUNIOztNQUVEaEMsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLEVBQXdDdUMsU0FBeEMsR0FBb0QsRUFBcEQ7TUFDQXhDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixFQUF3Q2dDLEtBQXhDLENBQThDQyxVQUE5QyxHQUEyRCxRQUEzRDtJQUNIOzs7V0FFRCw2QkFBb0I7TUFBQTs7TUFDaEIsSUFBSU8sZUFBZSxHQUFHLEtBQUs5QixLQUFMLENBQVdDLFNBQVgsQ0FBcUI4QixXQUFyQixHQUFtQ0MsS0FBbkMsQ0FBeUMsR0FBekMsRUFBOEMsQ0FBOUMsQ0FBdEI7TUFDQSxJQUFJQyxhQUFhLEdBQUcsS0FBS2pDLEtBQUwsQ0FBV0csT0FBWCxDQUFtQjRCLFdBQW5CLEdBQWlDQyxLQUFqQyxDQUF1QyxHQUF2QyxFQUE0QyxDQUE1QyxDQUFwQjtNQUVBLEtBQUtsQixrQkFBTDtNQUVBLEtBQUtLLFFBQUwsQ0FBYztRQUNWYixLQUFLLEVBQUU7TUFERyxDQUFkO01BS0EsSUFBSWUsQ0FBQyxHQUFHLENBQVI7TUFDQSxJQUFJSSxTQUFTLEdBQUcsQ0FBQyxXQUFELEVBQWMsUUFBZCxFQUF3QixRQUF4QixFQUFrQyxRQUFsQyxDQUFoQjtNQUNBLElBQUlTLFFBQVEsR0FBRyxFQUFmOztNQUNBLE9BQU9iLENBQUMsR0FBRyxJQUFJLEtBQUtyQixLQUFMLENBQVdJLFNBQTFCLEVBQXFDO1FBQ2pDOEIsUUFBUSxDQUFDQyxJQUFULENBQWN6QyxpREFBQSxDQUFVRyxRQUFRLEdBQUcsaUNBQVgsR0FDcEIsRUFEb0IsR0FDZmlDLGVBRGUsR0FFcEIsV0FGb0IsR0FFTkcsYUFGTSxHQUdwQixZQUhvQixHQUdMUixTQUFTLENBQUNKLENBQUQsQ0FIZCxFQUdtQmdCLElBSG5CLENBR3dCLFVBQUEvQixLQUFLLEVBQUk7VUFDM0MsTUFBSSxDQUFDTixLQUFMLENBQVdNLEtBQVgsQ0FBaUI2QixJQUFqQixDQUFzQjdCLEtBQUssQ0FBQ2dDLElBQU4sQ0FBV0MsZUFBakM7O1VBQ0EsTUFBSSxDQUFDcEIsUUFBTCxDQUFjO1lBQUNiLEtBQUssRUFBRSxNQUFJLENBQUNOLEtBQUwsQ0FBV007VUFBbkIsQ0FBZDtRQUNILENBTmEsQ0FBZDtRQU9BZSxDQUFDLEdBQUdBLENBQUMsR0FBRyxDQUFSO01BQ0g7O01BQ0RtQixPQUFPLENBQUNDLEdBQVIsQ0FBWVAsUUFBWixFQUFzQkcsSUFBdEIsQ0FBMkIsVUFBQ0ssSUFBRCxFQUFVO1FBQ2pDckIsQ0FBQyxHQUFHLENBQUo7O1FBQ0EsT0FBT0EsQ0FBQyxHQUFHLElBQUksTUFBSSxDQUFDckIsS0FBTCxDQUFXSSxTQUExQixFQUFxQztVQUNqQ2YsUUFBUSxDQUFDQyxjQUFULENBQXdCbUMsU0FBUyxDQUFDSixDQUFELENBQVQsQ0FBYUssV0FBYixFQUF4QixFQUFvREosS0FBcEQsQ0FBMERDLFVBQTFELEdBQXVFLFNBQXZFO1VBQ0FsQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JtQyxTQUFTLENBQUNKLENBQUQsQ0FBVCxDQUFhSyxXQUFiLEtBQTZCLEdBQXJELEVBQTBESixLQUExRCxDQUFnRUMsVUFBaEUsR0FBNkUsU0FBN0U7VUFDQWxDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3Qm1DLFNBQVMsQ0FBQ0osQ0FBRCxDQUFULENBQWFLLFdBQWIsS0FBNkIsR0FBckQsRUFBMERHLFNBQTFELElBQXVFLE1BQUksQ0FBQzdCLEtBQUwsQ0FBV00sS0FBWCxDQUFpQmUsQ0FBakIsSUFBc0IsMkJBQTdGO1VBQ0FBLENBQUMsR0FBR0EsQ0FBQyxHQUFHLENBQVI7UUFDSDtNQUVKLENBVEQ7TUFVQWhDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixxQkFBeEIsRUFBK0NnQyxLQUEvQyxDQUFxREMsVUFBckQsR0FBa0UsU0FBbEU7SUFDSDs7O1dBRUQsNkJBQW9CO01BQ2hCLEtBQUtULGtCQUFMO01BQ0EsS0FBS0MsZUFBTDtNQUVBLEtBQUtJLFFBQUwsQ0FBYztRQUNWZixTQUFTLEVBQUVmLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixFQUFxQ3FELGFBQXJDLEdBQXFEO01BRHRELENBQWQ7TUFHQSxJQUFJbEIsU0FBUyxHQUFHLENBQUMsV0FBRCxFQUFjLFFBQWQsRUFBd0IsUUFBeEIsRUFBa0MsUUFBbEMsQ0FBaEI7TUFDQSxJQUFJSixDQUFDLEdBQUcsQ0FBUjs7TUFDQSxPQUFPQSxDQUFDLEdBQUcsSUFBSSxLQUFLckIsS0FBTCxDQUFXSSxTQUExQixFQUFxQztRQUNqQ2YsUUFBUSxDQUFDQyxjQUFULENBQXdCbUMsU0FBUyxDQUFDSixDQUFELENBQVQsQ0FBYUssV0FBYixFQUF4QixFQUFvREosS0FBcEQsQ0FBMERDLFVBQTFELEdBQXVFLFFBQXZFO1FBQ0FsQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JtQyxTQUFTLENBQUNKLENBQUQsQ0FBVCxDQUFhSyxXQUFiLEtBQTZCLEdBQXJELEVBQTBESixLQUExRCxDQUFnRUMsVUFBaEUsR0FBNkUsUUFBN0U7UUFDQUYsQ0FBQyxHQUFHQSxDQUFDLEdBQUcsQ0FBUjtNQUNIOztNQUVEaEMsUUFBUSxDQUFDQyxjQUFULENBQXdCLHFCQUF4QixFQUErQ2dDLEtBQS9DLENBQXFEQyxVQUFyRCxHQUFrRSxRQUFsRTtJQUNIOzs7V0FFRCwyQkFBa0I7TUFBQTs7TUFDZCxJQUFJTyxlQUFlLEdBQUcsS0FBSzlCLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQjhCLFdBQXJCLEdBQW1DQyxLQUFuQyxDQUF5QyxHQUF6QyxFQUE4QyxDQUE5QyxDQUF0QjtNQUNBLElBQUlDLGFBQWEsR0FBRyxLQUFLakMsS0FBTCxDQUFXRyxPQUFYLENBQW1CNEIsV0FBbkIsR0FBaUNDLEtBQWpDLENBQXVDLEdBQXZDLEVBQTRDLENBQTVDLENBQXBCO01BRUEsSUFBSTNCLFFBQVEsR0FBR2hCLFFBQVEsQ0FBQ3VELGFBQVQsQ0FBdUIsaUNBQXZCLEVBQTBEQyxLQUExRCxDQUFnRUMsV0FBaEUsRUFBZjtNQUNBLEtBQUszQixRQUFMLENBQWM7UUFDVmQsUUFBUSxFQUFFQTtNQURBLENBQWQ7TUFHQVgsaURBQUEsQ0FBVUcsUUFBUSxHQUFHLGdDQUFYLEdBQ04sRUFETSxHQUNEaUMsZUFEQyxHQUVOLFdBRk0sR0FFUUcsYUFGUixHQUdOLFlBSE0sR0FHUzVCLFFBSG5CLEVBRzZCZ0MsSUFIN0IsQ0FHa0MsVUFBQVUsTUFBTSxFQUFJO1FBQ3hDLE1BQUksQ0FBQzVCLFFBQUwsQ0FBYztVQUFDVCxZQUFZLEVBQUVxQyxNQUFNLENBQUNULElBQVAsQ0FBWVU7UUFBM0IsQ0FBZDs7UUFDQTNELFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixFQUF3Q3VDLFNBQXhDLEdBQW9ELG1CQUFtQixNQUFJLENBQUM3QixLQUFMLENBQVdVLFlBQTlCLEdBQTZDLEdBQWpHO1FBQ0FyQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsRUFBd0NnQyxLQUF4QyxDQUE4Q0MsVUFBOUMsR0FBMkQsU0FBM0Q7TUFDSCxDQVBEO01BU0EsS0FBSzBCLHNCQUFMO0lBQ0g7OztXQUVELHlCQUFnQjtNQUVaNUQsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLEVBQXFDcUMsU0FBckMsR0FBaUQsRUFBakQ7TUFDQXRDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQ3FDLFNBQXRDLEdBQWtELEVBQWxEO01BQ0F0QyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NxQyxTQUF0QyxHQUFrRCxFQUFsRDtNQUVBLElBQUl1QixNQUFNLEdBQUcsSUFBYjtNQUNBLElBQUlDLE9BQU8sR0FBRyxJQUFkO01BQ0EsSUFBSUMsT0FBTyxHQUFHLElBQWQ7O01BRUEsSUFBSSxLQUFLcEQsS0FBTCxDQUFXTyxJQUFYLElBQW1CLEVBQXZCLEVBQTJCO1FBQ3ZCbEIsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLEVBQXFDcUMsU0FBckMsR0FBaUQsNkNBQWpEO1FBQ0F1QixNQUFNLEdBQUcsS0FBVDtNQUNIOztNQUVELElBQUksS0FBS2xELEtBQUwsQ0FBV08sSUFBWCxDQUFnQmlCLE1BQWhCLEdBQXlCLEVBQTdCLEVBQWlDO1FBQzdCbkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLEVBQXFDcUMsU0FBckMsR0FBaUQsOENBQWpEO1FBQ0F1QixNQUFNLEdBQUcsS0FBVDtNQUNIOztNQUVELElBQUksS0FBS2xELEtBQUwsQ0FBV1EsS0FBWCxJQUFvQixFQUF4QixFQUE0QjtRQUN4Qm5CLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQ3FDLFNBQXRDLEdBQWtELDZDQUFsRDtRQUNBd0IsT0FBTyxHQUFHLEtBQVY7TUFDSDs7TUFFRCxJQUFJLEtBQUtuRCxLQUFMLENBQVdRLEtBQVgsQ0FBaUJnQixNQUFqQixHQUEwQixFQUE5QixFQUFrQztRQUM5Qm5DLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQ3FDLFNBQXRDLEdBQWtELDhDQUFsRDtRQUNBd0IsT0FBTyxHQUFHLEtBQVY7TUFDSDs7TUFFRCxJQUFJLEtBQUtuRCxLQUFMLENBQVdTLEtBQVgsSUFBb0IsRUFBeEIsRUFBNEI7UUFDeEJwQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NxQyxTQUF0QyxHQUFrRCw2Q0FBbEQ7UUFDQXlCLE9BQU8sR0FBRyxLQUFWO01BQ0g7O01BRUQsSUFBSSxLQUFLcEQsS0FBTCxDQUFXUyxLQUFYLENBQWlCZSxNQUFqQixHQUEwQixFQUE5QixFQUFrQztRQUM5Qm5DLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixFQUFxQ3FDLFNBQXJDLEdBQWlELDhDQUFqRDtRQUNBeUIsT0FBTyxHQUFHLEtBQVY7TUFDSDs7TUFFRCxJQUFJLENBQUNGLE1BQUQsSUFBVyxDQUFDQyxPQUFaLElBQXVCLENBQUNDLE9BQTVCLEVBQXFDO1FBQ2pDbkMsT0FBTyxDQUFDQyxHQUFSLENBQVlnQyxNQUFaLEVBQW9CQyxPQUFwQixFQUE2QkMsT0FBN0I7UUFDQTtNQUNIOztNQUVEMUQsa0RBQUEsQ0FBV0csUUFBUSxHQUFHLGVBQXRCLEVBQXVDO1FBQ25DSSxTQUFTLEVBQUUsS0FBS0QsS0FBTCxDQUFXQyxTQURhO1FBRW5DRSxPQUFPLEVBQUUsS0FBS0gsS0FBTCxDQUFXRyxPQUZlO1FBR25DRSxRQUFRLEVBQUUsS0FBS0wsS0FBTCxDQUFXSyxRQUhjO1FBSW5DRCxTQUFTLEVBQUUsS0FBS0osS0FBTCxDQUFXSSxTQUphO1FBS25DNEMsYUFBYSxFQUFFLEtBQUtoRCxLQUFMLENBQVdVLFlBTFM7UUFNbkNILElBQUksRUFBRSxLQUFLUCxLQUFMLENBQVdPLElBTmtCO1FBT25DQyxLQUFLLEVBQUUsS0FBS1IsS0FBTCxDQUFXUSxLQVBpQjtRQVFuQ0MsS0FBSyxFQUFFLEtBQUtULEtBQUwsQ0FBV1M7TUFSaUIsQ0FBdkMsRUFVSzRCLElBVkwsQ0FVVSxVQUFVaUIsUUFBVixFQUFvQjtRQUN0QixJQUFJN0QscURBQUosQ0FBUyxTQUFULEVBQW9CLDBDQUFwQixFQUFnRSxTQUFoRSxFQUEyRTRDLElBQTNFLENBQWdGO1VBQUEsT0FDNUVoRCxRQUFRLENBQUNrRSxRQUFULENBQWtCQyxJQUFsQixHQUF5QixLQURtRDtRQUFBLENBQWhGO01BR0gsQ0FkTCxXQWVXLFVBQVVDLEtBQVYsRUFBaUI7UUFDcEJ4QyxPQUFPLENBQUNDLEdBQVIsQ0FBWXVDLEtBQVo7TUFDSCxDQWpCTDtJQWtCSDs7O1dBRUQsa0NBQXlCO01BQ3JCLElBQUlyQyxhQUFhLEdBQUcsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixPQUFsQixDQUFwQjtNQUNBLElBQUlDLENBQUMsR0FBRyxDQUFSO01BRUFoQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUNnQyxLQUF2QyxDQUE2Q0MsVUFBN0MsR0FBMEQsU0FBMUQ7O01BRUEsT0FBT0YsQ0FBQyxHQUFHRCxhQUFhLENBQUNJLE1BQXpCLEVBQWlDO1FBQzdCbkMsUUFBUSxDQUFDQyxjQUFULENBQXdCOEIsYUFBYSxDQUFDQyxDQUFELENBQXJDLEVBQTBDQyxLQUExQyxDQUFnREMsVUFBaEQsR0FBNkQsU0FBN0Q7UUFDQWxDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QjhCLGFBQWEsQ0FBQ0MsQ0FBRCxDQUFiLEdBQW1CLEdBQTNDLEVBQWdEQyxLQUFoRCxDQUFzREMsVUFBdEQsR0FBbUUsU0FBbkU7UUFDQUYsQ0FBQyxHQUFHQSxDQUFDLEdBQUcsQ0FBUjtNQUNIOztNQUVEaEMsUUFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLEVBQXlDZ0MsS0FBekMsQ0FBK0NDLFVBQS9DLEdBQTRELFNBQTVEO0lBRUg7OztXQUVELHNCQUFhbUMsS0FBYixFQUFvQkMsS0FBcEIsRUFBMkI7TUFDdkIsUUFBUUQsS0FBUjtRQUNJLEtBQUssTUFBTDtVQUNJLEtBQUt2QyxRQUFMLENBQWM7WUFBQ1osSUFBSSxFQUFFb0QsS0FBSyxDQUFDQyxNQUFOLENBQWFmO1VBQXBCLENBQWQ7VUFDQTs7UUFDSixLQUFLLE9BQUw7VUFDSSxLQUFLMUIsUUFBTCxDQUFjO1lBQUNYLEtBQUssRUFBRW1ELEtBQUssQ0FBQ0MsTUFBTixDQUFhZjtVQUFyQixDQUFkO1VBQ0E7O1FBQ0osS0FBSyxPQUFMO1VBQ0ksS0FBSzFCLFFBQUwsQ0FBYztZQUFDVixLQUFLLEVBQUVrRCxLQUFLLENBQUNDLE1BQU4sQ0FBYWY7VUFBckIsQ0FBZDtVQUNBO01BVFI7SUFXSDs7O1dBRUQsa0JBQVM7TUFBQTs7TUFDTCxvQkFDSTtRQUFLLFNBQVMsRUFBQztNQUFmLGdCQUNJO1FBQUksU0FBUyxFQUFDO01BQWQsZ0JBQTRCLDBGQUE1QixDQURKLGVBRUk7UUFBSyxTQUFTLEVBQUM7TUFBZixFQUZKLG1DQUlJLDREQUFDLDBEQUFEO1FBQ0ksVUFBVSxFQUFDLFlBRGY7UUFFSSxRQUFRLEVBQUUsS0FBSzdDLEtBQUwsQ0FBV0MsU0FGekI7UUFHSSxRQUFRLEVBQUUsa0JBQUNZLElBQUQsRUFBVTtVQUNoQixNQUFJLENBQUNnRCxZQUFMLENBQWtCaEQsSUFBbEI7UUFDSCxDQUxMO1FBTUksT0FBTyxFQUFFLElBQUlYLElBQUo7TUFOYixFQUpKLGVBV0k7UUFBSyxTQUFTLEVBQUM7TUFBZixFQVhKLGtDQWFJLDREQUFDLDBEQUFEO1FBQ0ksVUFBVSxFQUFDLFlBRGY7UUFFSSxRQUFRLEVBQUUsS0FBS0YsS0FBTCxDQUFXRyxPQUZ6QjtRQUdJLFFBQVEsRUFBRSxrQkFBQ1UsSUFBRCxFQUFVO1VBQ2hCLE1BQUksQ0FBQ2lELFVBQUwsQ0FBZ0JqRCxJQUFoQjtRQUNILENBTEw7UUFNSSxPQUFPLEVBQUUsSUFBSVgsSUFBSjtNQU5iLEVBYkosZUFvQkk7UUFBSyxTQUFTLEVBQUM7TUFBZixFQXBCSix3Q0FzQkk7UUFBUSxRQUFRLEVBQUUsS0FBSzZELGlCQUFMLENBQXVCQyxJQUF2QixDQUE0QixJQUE1QixDQUFsQjtRQUFxRCxJQUFJLEVBQUMsV0FBMUQ7UUFBc0UsRUFBRSxFQUFDO01BQXpFLGdCQUNJO1FBQVEsS0FBSyxFQUFDO01BQWQsT0FESixlQUVJO1FBQVEsS0FBSyxFQUFDO01BQWQsT0FGSixlQUdJO1FBQVEsS0FBSyxFQUFDO01BQWQsT0FISixlQUlJO1FBQVEsS0FBSyxFQUFDO01BQWQsT0FKSixDQXRCSixlQTRCSTtRQUFRLEVBQUUsRUFBQyxzQkFBWDtRQUFrQyxTQUFTLEVBQUMsaUJBQTVDO1FBQ1EsT0FBTyxFQUFFLEtBQUtDLGlCQUFMLENBQXVCRCxJQUF2QixDQUE0QixJQUE1QjtNQURqQixrQ0E1QkosZUFnQ0k7UUFBSyxTQUFTLEVBQUM7TUFBZixFQWhDSixlQWlDSTtRQUFHLEVBQUUsRUFBQyxxQkFBTjtRQUE0QixLQUFLLEVBQUU7VUFBQ3pDLFVBQVUsRUFBRTtRQUFiO01BQW5DLGdDQWpDSixlQWtDSTtRQUFLLFNBQVMsRUFBQztNQUFmLEVBbENKLGVBbUNJO1FBQU8sSUFBSSxFQUFDLE9BQVo7UUFBb0IsRUFBRSxFQUFDLFFBQXZCO1FBQWdDLElBQUksRUFBQyxXQUFyQztRQUFpRCxLQUFLLEVBQUMsUUFBdkQ7UUFDTyxPQUFPLEVBQUUsS0FBSzJDLGVBQUwsQ0FBcUJGLElBQXJCLENBQTBCLElBQTFCLENBRGhCO1FBQ2lELEtBQUssRUFBRTtVQUFDekMsVUFBVSxFQUFFO1FBQWI7TUFEeEQsRUFuQ0osZUFxQ0k7UUFBTyxPQUFPLEVBQUMsUUFBZjtRQUF3QixFQUFFLEVBQUMsU0FBM0I7UUFBcUMsS0FBSyxFQUFFO1VBQUNBLFVBQVUsRUFBRTtRQUFiO01BQTVDLGlCQXJDSixlQXFDMkYsdUVBckMzRixlQXNDSTtRQUFPLElBQUksRUFBQyxPQUFaO1FBQW9CLEVBQUUsRUFBQyxRQUF2QjtRQUFnQyxJQUFJLEVBQUMsV0FBckM7UUFBaUQsS0FBSyxFQUFDLFFBQXZEO1FBQ08sT0FBTyxFQUFFLEtBQUsyQyxlQUFMLENBQXFCRixJQUFyQixDQUEwQixJQUExQixDQURoQjtRQUNpRCxLQUFLLEVBQUU7VUFBQ3pDLFVBQVUsRUFBRTtRQUFiO01BRHhELEVBdENKLGVBd0NJO1FBQU8sT0FBTyxFQUFDLFFBQWY7UUFBd0IsRUFBRSxFQUFDLFNBQTNCO1FBQXFDLEtBQUssRUFBRTtVQUFDQSxVQUFVLEVBQUU7UUFBYjtNQUE1QyxZQXhDSixlQXdDc0YsdUVBeEN0RixlQXlDSTtRQUFPLElBQUksRUFBQyxPQUFaO1FBQW9CLEVBQUUsRUFBQyxRQUF2QjtRQUFnQyxJQUFJLEVBQUMsV0FBckM7UUFBaUQsS0FBSyxFQUFDLFFBQXZEO1FBQ08sT0FBTyxFQUFFLEtBQUsyQyxlQUFMLENBQXFCRixJQUFyQixDQUEwQixJQUExQixDQURoQjtRQUVPLEtBQUssRUFBRTtVQUFDekMsVUFBVSxFQUFFO1FBQWI7TUFGZCxFQXpDSixlQTRDSTtRQUFPLE9BQU8sRUFBQyxRQUFmO1FBQXdCLEVBQUUsRUFBQyxTQUEzQjtRQUFxQyxLQUFLLEVBQUU7VUFBQ0EsVUFBVSxFQUFFO1FBQWI7TUFBNUMsYUE1Q0osZUE0Q3VGLHVFQTVDdkYsZUE2Q0k7UUFBTyxJQUFJLEVBQUMsT0FBWjtRQUFvQixFQUFFLEVBQUMsV0FBdkI7UUFBbUMsSUFBSSxFQUFDLFdBQXhDO1FBQW9ELEtBQUssRUFBQyxXQUExRDtRQUNPLE9BQU8sRUFBRSxLQUFLMkMsZUFBTCxDQUFxQkYsSUFBckIsQ0FBMEIsSUFBMUIsQ0FEaEI7UUFFTyxLQUFLLEVBQUU7VUFBQ3pDLFVBQVUsRUFBRTtRQUFiO01BRmQsRUE3Q0osZUFnREk7UUFBTyxPQUFPLEVBQUMsV0FBZjtRQUEyQixFQUFFLEVBQUMsWUFBOUI7UUFBMkMsS0FBSyxFQUFFO1VBQUNBLFVBQVUsRUFBRTtRQUFiO01BQWxELGdCQWhESixlQWdEZ0csdUVBaERoRyxlQWlESTtRQUFLLFNBQVMsRUFBQztNQUFmLEVBakRKLGVBa0RJO1FBQUcsRUFBRSxFQUFDLGNBQU47UUFBcUIsS0FBSyxFQUFFO1VBQUNBLFVBQVUsRUFBRTtRQUFiO01BQTVCLG9CQWxESixlQW1ESTtRQUFLLFNBQVMsRUFBQztNQUFmLEVBbkRKLGVBb0RJO1FBQUcsRUFBRSxFQUFDLGFBQU47UUFBb0IsS0FBSyxFQUFFO1VBQUNBLFVBQVUsRUFBRTtRQUFiO01BQTNCLHlDQXBESixlQXFESTtRQUFPLE9BQU8sRUFBQyxNQUFmO1FBQXNCLEVBQUUsRUFBQyxPQUF6QjtRQUFpQyxLQUFLLEVBQUU7VUFBQ0EsVUFBVSxFQUFFO1FBQWI7TUFBeEMseUJBckRKLGVBc0RJO1FBQU8sSUFBSSxFQUFDLE1BQVo7UUFBbUIsRUFBRSxFQUFDLE1BQXRCO1FBQTZCLElBQUksRUFBQyxNQUFsQztRQUF5QyxRQUFRLEVBQUUsa0JBQUM0QyxHQUFEO1VBQUEsT0FBUyxNQUFJLENBQUNDLFlBQUwsQ0FBa0IsTUFBbEIsRUFBMEJELEdBQTFCLENBQVQ7UUFBQSxDQUFuRDtRQUNPLEtBQUssRUFBRTtVQUFDNUMsVUFBVSxFQUFFO1FBQWI7TUFEZCxFQXRESixlQXVEMkMsdUVBdkQzQyxlQXdESTtRQUFHLEVBQUUsRUFBQztNQUFOLEVBeERKLGVBeURJO1FBQU8sT0FBTyxFQUFDLE9BQWY7UUFBdUIsRUFBRSxFQUFDLFFBQTFCO1FBQW1DLEtBQUssRUFBRTtVQUFDQSxVQUFVLEVBQUU7UUFBYjtNQUExQyw0QkF6REosZUEwREk7UUFBTyxJQUFJLEVBQUMsTUFBWjtRQUFtQixFQUFFLEVBQUMsT0FBdEI7UUFBOEIsSUFBSSxFQUFDLE9BQW5DO1FBQTJDLFFBQVEsRUFBRSxrQkFBQzRDLEdBQUQ7VUFBQSxPQUFTLE1BQUksQ0FBQ0MsWUFBTCxDQUFrQixPQUFsQixFQUEyQkQsR0FBM0IsQ0FBVDtRQUFBLENBQXJEO1FBQ08sS0FBSyxFQUFFO1VBQUM1QyxVQUFVLEVBQUU7UUFBYjtNQURkLEVBMURKLGVBMkQyQyx1RUEzRDNDLGVBNERJO1FBQUcsRUFBRSxFQUFDO01BQU4sRUE1REosZUE2REk7UUFBTyxPQUFPLEVBQUMsT0FBZjtRQUF1QixFQUFFLEVBQUMsUUFBMUI7UUFBbUMsS0FBSyxFQUFFO1VBQUNBLFVBQVUsRUFBRTtRQUFiO01BQTFDLG9DQTdESixlQThESTtRQUFPLElBQUksRUFBQyxNQUFaO1FBQW1CLEVBQUUsRUFBQyxPQUF0QjtRQUE4QixJQUFJLEVBQUMsT0FBbkM7UUFBMkMsUUFBUSxFQUFFLGtCQUFDNEMsR0FBRDtVQUFBLE9BQVMsTUFBSSxDQUFDQyxZQUFMLENBQWtCLE9BQWxCLEVBQTJCRCxHQUEzQixDQUFUO1FBQUEsQ0FBckQ7UUFDTyxLQUFLLEVBQUU7VUFBQzVDLFVBQVUsRUFBRTtRQUFiO01BRGQsRUE5REosZUErRDJDLHVFQS9EM0MsZUFnRUk7UUFBRyxFQUFFLEVBQUM7TUFBTixFQWhFSixlQWlFSTtRQUFRLFNBQVMsRUFBQyxpQkFBbEI7UUFDUSxFQUFFLEVBQUMsZUFEWDtRQUVRLEtBQUssRUFBRTtVQUNIOEMsUUFBUSxFQUFFLFVBRFA7VUFFSCxTQUFPLE9BRko7VUFHSEMsS0FBSyxFQUFFLE1BSEo7VUFJSEMsR0FBRyxFQUFFLE9BSkY7VUFLSGhELFVBQVUsRUFBRTtRQUxULENBRmY7UUFTUSxPQUFPLEVBQUUsS0FBS2lELGFBQUwsQ0FBbUJSLElBQW5CLENBQXdCLElBQXhCO01BVGpCLG1CQWpFSixDQURKO0lBZ0ZIOzs7O0VBN1Z1Q3pFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWNUM7QUFDQTtBQUNBO0FBRUE7QUFPQTs7QUFFQSxJQUFNSSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsc0RBQUQsQ0FBcEI7O0FBRUEsSUFBTUMsUUFBUSxHQUFHRixJQUFJLENBQUNFLFFBQUwsQ0FBY0MsSUFBL0IsRUFBb0M7O0lBRWYrRTs7Ozs7RUFDakIsb0JBQWM7SUFBQTs7SUFBQTs7SUFDVjtJQUVBLE1BQUs3RSxLQUFMLEdBQWE7TUFBQzhFLFFBQVEsRUFBRTtJQUFYLENBQWI7SUFIVTtFQUliOzs7O1dBRUQsNkJBQW9CO01BQ2hCLEtBQUtDLFdBQUw7SUFDSDs7O1dBRUQsdUJBQWM7TUFBQTs7TUFDVnJGLGlEQUFBLENBQVVHLFFBQVEsR0FBRyxlQUFyQixFQUFzQ3dDLElBQXRDLENBQTJDLFVBQUF5QyxRQUFRLEVBQUk7UUFDbkQsTUFBSSxDQUFDM0QsUUFBTCxDQUFjO1VBQUMyRCxRQUFRLEVBQUVBLFFBQVEsQ0FBQ3hDO1FBQXBCLENBQWQ7O1FBQ0FyQixPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFJLENBQUNsQixLQUFMLENBQVc4RSxRQUFYLENBQW9CM0UsT0FBaEM7TUFDSCxDQUhEO0lBSUg7OztXQUVELDhCQUFzQkUsUUFBdEIsRUFBZ0M7TUFDNUIsUUFBUUEsUUFBUjtRQUNJLEtBQUssUUFBTDtVQUFlLE9BQU8sWUFBUDs7UUFDZixLQUFLLFFBQUw7VUFBZSxPQUFPLE9BQVA7O1FBQ2YsS0FBSyxRQUFMO1VBQWUsT0FBTyxRQUFQOztRQUNmLEtBQUssV0FBTDtVQUFrQixPQUFPLFdBQVA7TUFKdEI7SUFNSDs7O1dBRUQsa0JBQVM7TUFBQTs7TUFDTCxvQkFDSSxzRkFDSSw0REFBQyxtREFBRDtRQUFNLFNBQVMsRUFBQyxpQkFBaEI7UUFBa0MsRUFBRSxFQUFDLGtCQUFyQztRQUNNLEtBQUssRUFBRTtVQUFDZ0UsUUFBUSxFQUFFLFVBQVg7VUFBdUIsU0FBTyxPQUE5QjtVQUF1Q0MsS0FBSyxFQUFFO1FBQTlDO01BRGIsbUJBREosZUFHSTtRQUFTLFNBQVMsRUFBQztNQUFuQixnQkFDSTtRQUFLLFNBQVMsRUFBQztNQUFmLGdCQUNJO1FBQUssU0FBUyxFQUFDO01BQWYsZ0JBQ0k7UUFBSSxTQUFTLEVBQUM7TUFBZCx1QkFESixDQURKLGVBSUk7UUFBSyxTQUFTLEVBQUM7TUFBZixFQUpKLGVBS0k7UUFBSyxTQUFTLEVBQUU7TUFBaEIsR0FDSyxLQUFLdEUsS0FBTCxDQUFXOEUsUUFBWCxDQUFvQkUsR0FBcEIsQ0FBd0IsVUFBQUMsT0FBTztRQUFBLG9CQUM1QjtVQUFLLFNBQVMsRUFBQyxNQUFmO1VBQXNCLEdBQUcsRUFBRUEsT0FBTyxDQUFDQyxPQUFuQztVQUNLLEtBQUssRUFBRTtZQUFDQyxVQUFVLEVBQUUsUUFBYjtZQUF1QkMsS0FBSyxFQUFFLFFBQTlCO1lBQXdDQyxPQUFPLEVBQUU7VUFBakQ7UUFEWixnQkFFSTtVQUFLLFNBQVMsRUFBQztRQUFmLGdCQUNJO1VBQUssU0FBUyxFQUFDO1FBQWYsZ0JBQ0k7VUFBSyxTQUFTLEVBQUM7UUFBZixnQkFBaUMsb0ZBQUcscUdBQUgsT0FBdUNKLE9BQU8sQ0FBQ0MsT0FBL0MsTUFBakMsQ0FESixlQUVJO1VBQ0ksU0FBUyxFQUFDO1FBRGQsZ0JBQ2tDLGlHQURsQyxPQUMrRCxNQUFJLENBQUN0RCxvQkFBTCxDQUEwQnFELE9BQU8sQ0FBQzVFLFFBQWxDLENBRC9ELENBRkosZUFJSTtVQUNJLFNBQVMsRUFBQztRQURkLGdCQUNtQyxpR0FEbkMsT0FDNkQ0RSxPQUFPLENBQUM3RSxTQURyRSxDQUpKLGVBTUk7VUFDSSxTQUFTLEVBQUM7UUFEZCxnQkFDbUMsNEZBRG5DLE9BQzhENkUsT0FBTyxDQUFDaEYsU0FEdEUsQ0FOSixlQVFJO1VBQ0ksU0FBUyxFQUFDO1FBRGQsZ0JBQ2lDLDJGQURqQyxPQUMyRGdGLE9BQU8sQ0FBQzlFLE9BRG5FLENBUkosZUFVSTtVQUNJLFNBQVMsRUFBQztRQURkLGdCQUMrQixnR0FEL0IsT0FDOEQ4RSxPQUFPLENBQUNqQyxhQUR0RSxXQVZKLGVBV2dHLHVFQVhoRyxlQVlJO1VBQU0sU0FBUyxFQUFDO1FBQWhCLGdCQUF1Qyw2RkFBdkMsQ0FaSixlQVk0RSx1RUFaNUUsZUFhSTtVQUFNLEVBQUUsRUFBQyxNQUFUO1VBQWdCLFNBQVMsRUFBQztRQUExQixnQkFBeUMsa0ZBQXpDLEVBQXlEaUMsT0FBTyxDQUFDMUUsSUFBakUsQ0FiSixlQWNJO1VBQU0sRUFBRSxFQUFDLE9BQVQ7VUFBaUIsU0FBUyxFQUFDO1FBQTNCLGdCQUEyQyxpR0FBM0MsRUFBdUUwRSxPQUFPLENBQUN6RSxLQUEvRSxDQWRKLGVBZUk7VUFBTSxFQUFFLEVBQUMsT0FBVDtVQUFpQixTQUFTLEVBQUM7UUFBM0IsZ0JBQTJDLGdHQUEzQyxFQUFtRXlFLE9BQU8sQ0FBQ3hFLEtBQTNFLENBZkosQ0FESixlQWtCSTtVQUFLLFNBQVMsRUFBQztRQUFmLEVBbEJKLENBRkosQ0FENEI7TUFBQSxDQUEvQixDQURMLENBTEosQ0FESixDQUhKLENBREo7SUF5Q0g7Ozs7RUFyRWlDbEI7Ozs7Ozs7Ozs7Ozs7QUNqQnRDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9ib29raW5nQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9ib29raW5nc0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC4vc3JjL2pzL2FwcC5qc1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0IEJvb2tpbmdzTGlzdCBmcm9tICcuL2NvbXBvbmVudHMvYm9va2luZ3NMaXN0JztcbmltcG9ydCB7QnJvd3NlclJvdXRlciwgUm91dGVzLCBSb3V0ZSwgUmVkaXJlY3QsIE5hdmlnYXRlfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEJvb2tpbmdDcmVhdG9yIGZyb20gXCIuL2NvbXBvbmVudHMvYm9va2luZ0NyZWF0b3JcIjtcblxuUmVhY3RET00ucmVuZGVyKFxuICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYm9va2luZ3NcIiBlbGVtZW50PXs8Qm9va2luZ3NMaXN0Lz59IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9ib29raW5ncy9jcmVhdGVcIiBlbGVtZW50PXs8Qm9va2luZ0NyZWF0b3IvPn0vPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCJlbGVtZW50PXs8TmF2aWdhdGUgdG89XCIvYm9va2luZ3NcIiByZXBsYWNlIC8+fS8+XG4gICAgICAgIDwvUm91dGVzPlxuICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgICAsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJyZWFjdC1kYXRlcGlja2VyXCI7XHJcbmltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzc1wiO1xyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IGpzb24gPSByZXF1aXJlKCcuLi9jb25maWcvY29uZi5qc29uJyk7XHJcblxyXG5jb25zdCBCQVNFX1VSTCA9IGpzb24uQkFTRV9VUkwucHJvZCAvLyBjaGFuZ2UgdG8gbG9jYWwgaWYgbmVlZGVkXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb29raW5nQ3JlYXRvciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgbnVtR3Vlc3RzOiAxLFxyXG4gICAgICAgICAgICByb29tVHlwZTogXCJcIixcclxuICAgICAgICAgICAgcm9vbXM6IFtdLFxyXG4gICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgICAgcGhvbmU6IFwiXCIsXHJcbiAgICAgICAgICAgIGJvb2tpbmdQcmljZTogMCxcclxuICAgICAgICAgICAgcm9vbXNBdmFpbGFibGVDaGVjazogZmFsc2UsXHJcbiAgICAgICAgICAgIGNhbGN1bGF0ZWRDaGVjazogZmFsc2UsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXJ0RGF0ZShkYXRlKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlQXZhaWxhYmxlUm9vbXMoKTtcclxuICAgICAgICB0aGlzLmhpZGVDb250YWN0RGF0YSgpO1xyXG5cclxuICAgICAgICBpZiAoZGF0ZSA+IHRoaXMuc3RhdGUuZW5kRGF0ZSkge1xyXG4gICAgICAgICAgICBkYXRlID0gdGhpcy5zdGF0ZS5lbmREYXRlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGF0ZSA8IERhdGUubm93KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicG9sbGFhYWFcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc3RhcnREYXRlOiBkYXRlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHNldEVuZERhdGUoZGF0ZSkge1xyXG4gICAgICAgIHRoaXMuaGlkZUF2YWlsYWJsZVJvb21zKCk7XHJcbiAgICAgICAgdGhpcy5oaWRlQ29udGFjdERhdGEoKTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGUgPCB0aGlzLnN0YXRlLnN0YXJ0RGF0ZSkge1xyXG4gICAgICAgICAgICBkYXRlID0gdGhpcy5zdGF0ZS5zdGFydERhdGVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkYXRlIDwgRGF0ZS5ub3cpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwb2xsYWFhYVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBlbmREYXRlOiBkYXRlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGdldFJvb21UeXBlVG9EaXNwbGF5KHJvb21UeXBlKSB7XHJcbiAgICAgICAgc3dpdGNoIChyb29tVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdTaW5nbGUnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdJbmRpdmlkdWFsJztcclxuICAgICAgICAgICAgY2FzZSAnRG91YmxlJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnRG9ibGUnO1xyXG4gICAgICAgICAgICBjYXNlICdUcmlwbGUnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdUcmlwbGUnO1xyXG4gICAgICAgICAgICBjYXNlICdRdWFkcnVwbGUnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdDdcOhZHJ1cGxlJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUNvbnRhY3REYXRhKCkge1xyXG4gICAgICAgIGxldCBjb250YWN0RmllbGRzID0gW1wibmFtZVwiLCBcImVtYWlsXCIsIFwicGhvbmVcIl07XHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3REYXRhXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG5cclxuICAgICAgICB3aGlsZSAoaSA8IGNvbnRhY3RGaWVsZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhY3RGaWVsZHNbaV0pLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWN0RmllbGRzW2ldICsgXCJMXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICBpID0gaSArIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZUJvb2tpbmdcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUF2YWlsYWJsZVJvb21zKCkge1xyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICBsZXQgcm9vbVR5cGVzID0gWydRdWFkcnVwbGUnLCAnVHJpcGxlJywgJ0RvdWJsZScsICdTaW5nbGUnXTtcclxuXHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vbXNBdmFpbGFibGVUaXRsZVwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuXHJcbiAgICAgICAgd2hpbGUgKGkgPCA0KSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJvb21UeXBlc1tpXS50b0xvd2VyQ2FzZSgpKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocm9vbVR5cGVzW2ldLnRvTG93ZXJDYXNlKCkgKyBcIkxcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJvb21UeXBlc1tpXS50b0xvd2VyQ2FzZSgpICsgXCJMXCIpLmlubmVyVGV4dCA9IHRoaXMuZ2V0Um9vbVR5cGVUb0Rpc3BsYXkocm9vbVR5cGVzW2ldKSArIFwiOiBcIjtcclxuICAgICAgICAgICAgaSA9IGkgKyAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib29raW5nUHJpY2VcIikuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9va2luZ1ByaWNlXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEF2YWlsYWJsZVJvb21zKCkge1xyXG4gICAgICAgIGxldCBzdGFydERhdGVTdHJpbmcgPSB0aGlzLnN0YXRlLnN0YXJ0RGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICAgICAgbGV0IGVuZERhdGVTdHJpbmcgPSB0aGlzLnN0YXRlLmVuZERhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG5cclxuICAgICAgICB0aGlzLmhpZGVBdmFpbGFibGVSb29tcygpXHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICByb29tczogW11cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICBsZXQgcm9vbVR5cGVzID0gWydRVUFEUlVQTEUnLCAnVFJJUExFJywgJ0RPVUJMRScsICdTSU5HTEUnXTtcclxuICAgICAgICBsZXQgcHJvbWlzZXMgPSBbXVxyXG4gICAgICAgIHdoaWxlIChpIDwgNSAtIHRoaXMuc3RhdGUubnVtR3Vlc3RzKSB7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goYXhpb3MuZ2V0KEJBU0VfVVJMICsgJy9hcGkvcm9vbXMtYXZhaWxhYmxlP3N0YXJ0RGF0ZT0nICtcclxuICAgICAgICAgICAgICAgICcnICsgc3RhcnREYXRlU3RyaW5nICtcclxuICAgICAgICAgICAgICAgICcmZW5kRGF0ZT0nICsgZW5kRGF0ZVN0cmluZyArXHJcbiAgICAgICAgICAgICAgICAnJnJvb21UeXBlPScgKyByb29tVHlwZXNbaV0pLnRoZW4ocm9vbXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yb29tcy5wdXNoKHJvb21zLmRhdGEucm9vbXNfYXZhaWxhYmxlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Jvb21zOiB0aGlzLnN0YXRlLnJvb21zfSk7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgaSA9IGkgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigocm9vbSkgPT4ge1xyXG4gICAgICAgICAgICBpID0gMFxyXG4gICAgICAgICAgICB3aGlsZSAoaSA8IDUgLSB0aGlzLnN0YXRlLm51bUd1ZXN0cykge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocm9vbVR5cGVzW2ldLnRvTG93ZXJDYXNlKCkpLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJvb21UeXBlc1tpXS50b0xvd2VyQ2FzZSgpICsgXCJMXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJvb21UeXBlc1tpXS50b0xvd2VyQ2FzZSgpICsgXCJMXCIpLmlubmVySFRNTCArPSB0aGlzLnN0YXRlLnJvb21zW2ldICsgXCIgaGFiaXRhY2lvbmVzIGRpc3BvbmlibGVzXCI7XHJcbiAgICAgICAgICAgICAgICBpID0gaSArIDE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb21zQXZhaWxhYmxlVGl0bGVcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdGVkTnVtR3Vlc3RzKCkge1xyXG4gICAgICAgIHRoaXMuaGlkZUF2YWlsYWJsZVJvb21zKCk7XHJcbiAgICAgICAgdGhpcy5oaWRlQ29udGFjdERhdGEoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG51bUd1ZXN0czogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ251bUd1ZXN0cycpLnNlbGVjdGVkSW5kZXggKyAxXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHJvb21UeXBlcyA9IFsnUVVBRFJVUExFJywgJ1RSSVBMRScsICdET1VCTEUnLCAnU0lOR0xFJ107XHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIHdoaWxlIChpIDwgNSAtIHRoaXMuc3RhdGUubnVtR3Vlc3RzKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJvb21UeXBlc1tpXS50b0xvd2VyQ2FzZSgpKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocm9vbVR5cGVzW2ldLnRvTG93ZXJDYXNlKCkgKyBcIkxcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgIGkgPSBpICsgMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vbXNBdmFpbGFibGVUaXRsZVwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCb29raW5nUHJpY2UoKSB7XHJcbiAgICAgICAgbGV0IHN0YXJ0RGF0ZVN0cmluZyA9IHRoaXMuc3RhdGUuc3RhcnREYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgICAgICBsZXQgZW5kRGF0ZVN0cmluZyA9IHRoaXMuc3RhdGUuZW5kRGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcblxyXG4gICAgICAgIGxldCByb29tVHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJyb29tVHlwZXNcIl06Y2hlY2tlZCcpLnZhbHVlLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHJvb21UeXBlOiByb29tVHlwZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXhpb3MuZ2V0KEJBU0VfVVJMICsgJy9hcGkvYm9va2luZ3MvcHJpY2U/c3RhcnREYXRlPScgK1xyXG4gICAgICAgICAgICAnJyArIHN0YXJ0RGF0ZVN0cmluZyArXHJcbiAgICAgICAgICAgICcmZW5kRGF0ZT0nICsgZW5kRGF0ZVN0cmluZyArXHJcbiAgICAgICAgICAgICcmcm9vbVR5cGU9JyArIHJvb21UeXBlKS50aGVuKHByaWNlcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Jvb2tpbmdQcmljZTogcHJpY2VzLmRhdGEuYm9va2luZ1RvdGFsc30pO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvb2tpbmdQcmljZVwiKS5pbm5lckhUTUwgPSBcIlByZWNpbyB0b3RhbDogXCIgKyB0aGlzLnN0YXRlLmJvb2tpbmdQcmljZSArIFwi4oKsXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9va2luZ1ByaWNlXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmRpc3BsYXlDb250YWN0RGF0YUZvcm0oKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVCb29raW5nKCkge1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVDaGVja1wiKS5pbm5lclRleHQgPSBcIlwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxDaGVja1wiKS5pbm5lclRleHQgPSBcIlwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGhvbmVDaGVja1wiKS5pbm5lclRleHQgPSBcIlwiO1xyXG5cclxuICAgICAgICBsZXQgbmFtZU9rID0gdHJ1ZTtcclxuICAgICAgICBsZXQgZW1haWxPayA9IHRydWU7XHJcbiAgICAgICAgbGV0IHBob25lT2sgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5uYW1lID09IFwiXCIpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lQ2hlY2tcIikuaW5uZXJUZXh0ID0gXCJFc3RlIGNhbXBvIGVzdGEgdmFjw61vLiBQb3IgZmF2b3IsIHJlbGzDqW5hbG9cIjtcclxuICAgICAgICAgICAgbmFtZU9rID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5uYW1lLmxlbmd0aCA+IDUwKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZUNoZWNrXCIpLmlubmVyVGV4dCA9IFwiRXN0ZSBjYW1wbyB0aWVuZSB1biBtw6F4aW1vIGRlIDUwIGNhcmFjdGVyZXMuXCI7XHJcbiAgICAgICAgICAgIG5hbWVPayA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZW1haWwgPT0gXCJcIikge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsQ2hlY2tcIikuaW5uZXJUZXh0ID0gXCJFc3RlIGNhbXBvIGVzdGEgdmFjw61vLiBQb3IgZmF2b3IsIHJlbGzDqW5hbG9cIjtcclxuICAgICAgICAgICAgZW1haWxPayA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZW1haWwubGVuZ3RoID4gNTApIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbENoZWNrXCIpLmlubmVyVGV4dCA9IFwiRXN0ZSBjYW1wbyB0aWVuZSB1biBtw6F4aW1vIGRlIDUwIGNhcmFjdGVyZXMuXCI7XHJcbiAgICAgICAgICAgIGVtYWlsT2sgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnBob25lID09IFwiXCIpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaG9uZUNoZWNrXCIpLmlubmVyVGV4dCA9IFwiRXN0ZSBjYW1wbyBlc3RhIHZhY8Otby4gUG9yIGZhdm9yLCByZWxsw6luYWxvXCI7XHJcbiAgICAgICAgICAgIHBob25lT2sgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnBob25lLmxlbmd0aCA+IDEwKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZUNoZWNrXCIpLmlubmVyVGV4dCA9IFwiRXN0ZSBjYW1wbyB0aWVuZSB1biBtw6F4aW1vIGRlIDEwIGNhcmFjdGVyZXMuXCI7XHJcbiAgICAgICAgICAgIHBob25lT2sgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbmFtZU9rIHx8ICFlbWFpbE9rIHx8ICFwaG9uZU9rKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5hbWVPaywgZW1haWxPaywgcGhvbmVPayk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF4aW9zLnBvc3QoQkFTRV9VUkwgKyAnL2FwaS9ib29raW5ncycsIHtcclxuICAgICAgICAgICAgc3RhcnREYXRlOiB0aGlzLnN0YXRlLnN0YXJ0RGF0ZSxcclxuICAgICAgICAgICAgZW5kRGF0ZTogdGhpcy5zdGF0ZS5lbmREYXRlLFxyXG4gICAgICAgICAgICByb29tVHlwZTogdGhpcy5zdGF0ZS5yb29tVHlwZSxcclxuICAgICAgICAgICAgbnVtR3Vlc3RzOiB0aGlzLnN0YXRlLm51bUd1ZXN0cyxcclxuICAgICAgICAgICAgYm9va2luZ1RvdGFsczogdGhpcy5zdGF0ZS5ib29raW5nUHJpY2UsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmFtZSxcclxuICAgICAgICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXHJcbiAgICAgICAgICAgIHBob25lOiB0aGlzLnN0YXRlLnBob25lXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBuZXcgU3dhbChcIkdlbmlhbCFcIiwgXCIsIFNlIGhhIGNyZWFkbyBsYSByZXNlcnZhIGNvcnJlY3RhbWVudGUuXCIsIFwic3VjY2Vzc1wiKS50aGVuKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9ICcuLi8nXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlDb250YWN0RGF0YUZvcm0oKSB7XHJcbiAgICAgICAgbGV0IGNvbnRhY3RGaWVsZHMgPSBbXCJuYW1lXCIsIFwiZW1haWxcIiwgXCJwaG9uZVwiXTtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdERhdGFcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG5cclxuICAgICAgICB3aGlsZSAoaSA8IGNvbnRhY3RGaWVsZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhY3RGaWVsZHNbaV0pLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFjdEZpZWxkc1tpXSArIFwiTFwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgICAgIGkgPSBpICsgMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlQm9va2luZ1wiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoYW5nZShmaWVsZCwgZXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGZpZWxkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJuYW1lXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtuYW1lOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZW1haWxcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2VtYWlsOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicGhvbmVcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Bob25lOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXctYm9va2luZy1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj48c3Bhbj5OdWV2YSByZXNlcnZhPC9zcGFuPjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmdzLWxpc3QtdGl0bGUgbXQtM1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgRmVjaGEgZGUgZW50cmFkYVxyXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwiZGQvTU0veXl5eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuc3RhcnREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXJ0RGF0ZShkYXRlKVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgbWluRGF0ZT17bmV3IERhdGUoKX0vPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29raW5ncy1saXN0LXRpdGxlIG10LTNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIEZlY2hhIGRlIHNhbGlkYVxyXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwiZGQvTU0veXl5eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuZW5kRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFbmREYXRlKGRhdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBtaW5EYXRlPXtuZXcgRGF0ZSgpfS8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmdzLWxpc3QtdGl0bGUgbXQtNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgTsK6IGRlIGh1w6lzcGVkZXNcclxuICAgICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e3RoaXMuc2VsZWN0ZWROdW1HdWVzdHMuYmluZCh0aGlzKX0gbmFtZT1cIm51bUd1ZXN0c1wiIGlkPVwibnVtR3Vlc3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj4xPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj4yPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj4zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj40PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzaG93LWF2YWlsYWJsZS1yb29tc1wiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZ2V0QXZhaWxhYmxlUm9vbXMuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgID5WZXIgaGFiaXRhY2lvbmVzIGRpc3BvbmlibGVzXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZ3MtbGlzdC10aXRsZSBtdC0zXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBpZD1cInJvb21zQXZhaWxhYmxlVGl0bGVcIiBzdHlsZT17e3Zpc2liaWxpdHk6IFwiaGlkZGVuXCJ9fT5IYWJpdGFjaW9uZXMgZGlzcG9uaWJsZXM6IDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZ3MtbGlzdC10aXRsZSBtdC0xXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJzaW5nbGVcIiBuYW1lPVwicm9vbVR5cGVzXCIgdmFsdWU9XCJTaW5nbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZ2V0Qm9va2luZ1ByaWNlLmJpbmQodGhpcyl9IHN0eWxlPXt7dmlzaWJpbGl0eTogXCJoaWRkZW5cIn19Lz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2luZ2xlXCIgaWQ9XCJzaW5nbGVMXCIgc3R5bGU9e3t2aXNpYmlsaXR5OiBcImhpZGRlblwifX0+SW5kaXZpZHVhbCA8L2xhYmVsPjxici8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJkb3VibGVcIiBuYW1lPVwicm9vbVR5cGVzXCIgdmFsdWU9XCJEb3VibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZ2V0Qm9va2luZ1ByaWNlLmJpbmQodGhpcyl9IHN0eWxlPXt7dmlzaWJpbGl0eTogXCJoaWRkZW5cIn19Lz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZG91YmxlXCIgaWQ9XCJkb3VibGVMXCIgc3R5bGU9e3t2aXNpYmlsaXR5OiBcImhpZGRlblwifX0+RG9ibGUgPC9sYWJlbD48YnIvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwidHJpcGxlXCIgbmFtZT1cInJvb21UeXBlc1wiIHZhbHVlPVwiVHJpcGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmdldEJvb2tpbmdQcmljZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dmlzaWJpbGl0eTogXCJoaWRkZW5cIn19Lz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidHJpcGxlXCIgaWQ9XCJ0cmlwbGVMXCIgc3R5bGU9e3t2aXNpYmlsaXR5OiBcImhpZGRlblwifX0+VHJpcGxlIDwvbGFiZWw+PGJyLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInF1YWRydXBsZVwiIG5hbWU9XCJyb29tVHlwZXNcIiB2YWx1ZT1cIlF1YWRydXBsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5nZXRCb29raW5nUHJpY2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Zpc2liaWxpdHk6IFwiaGlkZGVuXCJ9fS8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInF1YWRydXBsZVwiIGlkPVwicXVhZHJ1cGxlTFwiIHN0eWxlPXt7dmlzaWJpbGl0eTogXCJoaWRkZW5cIn19PkN1YWRydXBsZSA8L2xhYmVsPjxici8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmdzLWxpc3QtdGl0bGUgbXQtMlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgaWQ9XCJib29raW5nUHJpY2VcIiBzdHlsZT17e3Zpc2liaWxpdHk6IFwiaGlkZGVuXCJ9fT5QcmVjaW8gdG90YWw6IDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZ3MtbGlzdC10aXRsZSBtdC0zXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBpZD1cImNvbnRhY3REYXRhXCIgc3R5bGU9e3t2aXNpYmlsaXR5OiBcImhpZGRlblwifX0+RGF0b3MgZGUgY29udGFjdG8gcGFyYSBsYSByZXNlcnZhOiA8L3A+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBpZD1cIm5hbWVMXCIgc3R5bGU9e3t2aXNpYmlsaXR5OiBcImhpZGRlblwifX0+Tm9tYnJlIHkgQXBlbGxpZG9zOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBuYW1lPVwibmFtZVwiIG9uQ2hhbmdlPXsoZXZ0KSA9PiB0aGlzLmhhbmRsZUNoYW5nZSgnbmFtZScsIGV2dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t2aXNpYmlsaXR5OiBcImhpZGRlblwifX0vPjxici8+XHJcbiAgICAgICAgICAgICAgICA8cCBpZD1cIm5hbWVDaGVja1wiPjwvcD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBpZD1cImVtYWlsTFwiIHN0eWxlPXt7dmlzaWJpbGl0eTogXCJoaWRkZW5cIn19PkNvcnJlbyBlbGVjdHLDs25pY286PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBvbkNoYW5nZT17KGV2dCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoJ2VtYWlsJywgZXZ0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Zpc2liaWxpdHk6IFwiaGlkZGVuXCJ9fS8+PGJyLz5cclxuICAgICAgICAgICAgICAgIDxwIGlkPVwiZW1haWxDaGVja1wiPjwvcD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGhvbmVcIiBpZD1cInBob25lTFwiIHN0eWxlPXt7dmlzaWJpbGl0eTogXCJoaWRkZW5cIn19Pk7CuiBkZSB0ZWzDqWZvbm8vbcOzdmlsOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInBob25lXCIgbmFtZT1cInBob25lXCIgb25DaGFuZ2U9eyhldnQpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKCdwaG9uZScsIGV2dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t2aXNpYmlsaXR5OiBcImhpZGRlblwifX0vPjxici8+XHJcbiAgICAgICAgICAgICAgICA8cCBpZD1cInBob25lQ2hlY2tcIj48L3A+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY3JlYXRlQm9va2luZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IFwicmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBcIjE1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCItNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogXCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNyZWF0ZUJvb2tpbmcuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgID5DcmVhciByZXNlcnZhXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLFxyXG4gICAgUmVkaXJlY3QsXHJcbiAgICBTd2l0Y2gsXHJcbiAgICBSb3V0ZSxcclxuICAgIExpbmssIFJvdXRlc1xyXG59IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBCb29raW5nQ3JlYXRvciBmcm9tIFwiLi9ib29raW5nQ3JlYXRvclwiO1xyXG5cclxuY29uc3QganNvbiA9IHJlcXVpcmUoJy4uL2NvbmZpZy9jb25mLmpzb24nKTtcclxuXHJcbmNvbnN0IEJBU0VfVVJMID0ganNvbi5CQVNFX1VSTC5wcm9kIC8vIGNoYW5nZSB0byBsb2NhbCBpZiBuZWVkZWRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tpbmdzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7Ym9va2luZ3M6IFtdfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuZ2V0Qm9va2luZ3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCb29raW5ncygpIHtcclxuICAgICAgICBheGlvcy5nZXQoQkFTRV9VUkwgKyAnL2FwaS9ib29raW5ncycpLnRoZW4oYm9va2luZ3MgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtib29raW5nczogYm9va2luZ3MuZGF0YX0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuYm9va2luZ3MuZW5kRGF0ZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBnZXRSb29tVHlwZVRvRGlzcGxheSAocm9vbVR5cGUpIHtcclxuICAgICAgICBzd2l0Y2ggKHJvb21UeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ1NJTkdMRSc6IHJldHVybiAnSW5kaXZpZHVhbCc7XHJcbiAgICAgICAgICAgIGNhc2UgJ0RPVUJMRSc6IHJldHVybiAnRG9ibGUnO1xyXG4gICAgICAgICAgICBjYXNlICdUUklQTEUnOiByZXR1cm4gJ1RyaXBsZSc7XHJcbiAgICAgICAgICAgIGNhc2UgJ1FVQURSVVBMRSc6IHJldHVybiAnQ3XDoWRydXBsZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdG89XCIvYm9va2luZ3MvY3JlYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246IFwicmVsYXRpdmVcIiwgZmxvYXQ6IFwicmlnaHRcIiwgcmlnaHQ6IFwiMjAwcHhcIn19PkNyZWFyIHJlc2VydmE8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyb3ctc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZ3MtbGlzdC10aXRsZSBtdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5MaXN0YSBkZSByZXNlcnZhczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmdzLWxpc3QtdGl0bGUgbXQtNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3Jvdyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYm9va2luZ3MubWFwKGJvb2tpbmcgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTNcIiBrZXk9e2Jvb2tpbmcubG9jYXRvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZDogXCJibGFjaztcIiwgY29sb3I6IFwid2hpdGU7XCIsIHBhZGRpbmc6IFwiMjBweDtcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZy1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29raW5nLWxvY2F0b3JcIj48cD48Yj5Mb2NhbGl6YWRvciBkZSBsYSByZXNlcnZhOiA8L2I+IHtib29raW5nLmxvY2F0b3J9IDwvcD48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib29raW5nLXJvb20tdHlwZVwiPjxiPlRpcG8gZGUgaGFiaXRhY2nDs246IDwvYj4ge3RoaXMuZ2V0Um9vbVR5cGVUb0Rpc3BsYXkoYm9va2luZy5yb29tVHlwZSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvb2tpbmctbnVtLWd1ZXN0c1wiPjxiPk7CuiBkZSBodcOpc3BlZGVzOiA8L2I+IHtib29raW5nLm51bUd1ZXN0c308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9va2luZy1zdGFydC1kYXRlXCI+PGI+RmVjaGEgZGUgZW50cmFkYTogPC9iPiB7Ym9va2luZy5zdGFydERhdGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvb2tpbmctZW5kLWRhdGVcIj48Yj5GZWNoYSBkZSBzYWxpZGE6IDwvYj4ge2Jvb2tpbmcuZW5kRGF0ZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9va2luZy10b3RhbHNcIj48Yj5QcmVjaW8gZGUgbGEgcmVzZXJ2YTogPC9iPiB7Ym9va2luZy5ib29raW5nVG90YWxzfeKCrDwvc3Bhbj48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJvb2tpbmctY29udGFjdC1kYXRhXCI+PGI+RGF0b3MgZGUgY29udGFjdG86IDwvYj48L3NwYW4+PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cIm5hbWVcIiBjbGFzc05hbWU9XCJib29raW5nLW5hbWVcIj48Yj5Ob21icmU6IDwvYj57Ym9va2luZy5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYm9va2luZy1lbWFpbFwiPjxiPkNvcnJlbyBlbGVjdHLDs25pY286IDwvYj57Ym9va2luZy5lbWFpbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJwaG9uZVwiIGNsYXNzTmFtZT1cImJvb2tpbmctcGhvbmVcIj48Yj5OwrogZGUgdGVsw6lmb25vOiA8L2I+e2Jvb2tpbmcucGhvbmV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmdzLWxpc3QtdGl0bGUgbXQtNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJCb29raW5nc0xpc3QiLCJCcm93c2VyUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJSZWRpcmVjdCIsIk5hdmlnYXRlIiwiQm9va2luZ0NyZWF0b3IiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiQ29tcG9uZW50IiwiRGF0ZVBpY2tlciIsIlN3YWwiLCJheGlvcyIsImpzb24iLCJyZXF1aXJlIiwiQkFTRV9VUkwiLCJwcm9kIiwicHJvcHMiLCJzdGF0ZSIsInN0YXJ0RGF0ZSIsIkRhdGUiLCJlbmREYXRlIiwibnVtR3Vlc3RzIiwicm9vbVR5cGUiLCJyb29tcyIsIm5hbWUiLCJlbWFpbCIsInBob25lIiwiYm9va2luZ1ByaWNlIiwicm9vbXNBdmFpbGFibGVDaGVjayIsImNhbGN1bGF0ZWRDaGVjayIsImRhdGUiLCJoaWRlQXZhaWxhYmxlUm9vbXMiLCJoaWRlQ29udGFjdERhdGEiLCJub3ciLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJjb250YWN0RmllbGRzIiwiaSIsInN0eWxlIiwidmlzaWJpbGl0eSIsImxlbmd0aCIsInJvb21UeXBlcyIsInRvTG93ZXJDYXNlIiwiaW5uZXJUZXh0IiwiZ2V0Um9vbVR5cGVUb0Rpc3BsYXkiLCJpbm5lckhUTUwiLCJzdGFydERhdGVTdHJpbmciLCJ0b0lTT1N0cmluZyIsInNwbGl0IiwiZW5kRGF0ZVN0cmluZyIsInByb21pc2VzIiwicHVzaCIsImdldCIsInRoZW4iLCJkYXRhIiwicm9vbXNfYXZhaWxhYmxlIiwiUHJvbWlzZSIsImFsbCIsInJvb20iLCJzZWxlY3RlZEluZGV4IiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwidG9VcHBlckNhc2UiLCJwcmljZXMiLCJib29raW5nVG90YWxzIiwiZGlzcGxheUNvbnRhY3REYXRhRm9ybSIsIm5hbWVPayIsImVtYWlsT2siLCJwaG9uZU9rIiwicG9zdCIsInJlc3BvbnNlIiwibG9jYXRpb24iLCJocmVmIiwiZXJyb3IiLCJmaWVsZCIsImV2ZW50IiwidGFyZ2V0Iiwic2V0U3RhcnREYXRlIiwic2V0RW5kRGF0ZSIsInNlbGVjdGVkTnVtR3Vlc3RzIiwiYmluZCIsImdldEF2YWlsYWJsZVJvb21zIiwiZ2V0Qm9va2luZ1ByaWNlIiwiZXZ0IiwiaGFuZGxlQ2hhbmdlIiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsImNyZWF0ZUJvb2tpbmciLCJQcm9wVHlwZXMiLCJSb3V0ZXIiLCJTd2l0Y2giLCJMaW5rIiwiQm9va2luZ3MiLCJib29raW5ncyIsImdldEJvb2tpbmdzIiwibWFwIiwiYm9va2luZyIsImxvY2F0b3IiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJwYWRkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==