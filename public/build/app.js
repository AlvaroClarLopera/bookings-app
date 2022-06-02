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

var BASE_URL = json.BASE_URL.production; // change to local if needed

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

      if (date < Date.now) {}

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

      if (date < Date.now) {}

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
        document.getElementById(roomTypes[i].toLowerCase()).disabled = false;
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
          _this2.state.rooms.push([rooms.data.rooms_available, rooms.data.roomType]);

          _this2.setState({
            rooms: _this2.state.rooms
          });
        }));
        i = i + 1;
      }

      Promise.all(promises).then(function (room) {
        i = 0;
        var roomType = '';

        while (i < 5 - _this2.state.numGuests) {
          switch (_this2.state.rooms[i][1]) {
            case 'SINGLE':
              roomType = 'single';
              break;

            case 'DOUBLE':
              roomType = 'double';
              break;

            case 'TRIPLE':
              roomType = 'triple';
              break;

            case 'QUADRUPLE':
              roomType = 'quadruple';
              break;
          }

          if (_this2.state.rooms[i][0] === 0) {
            document.getElementById(roomType).disabled = true;
          }

          document.getElementById(roomType).style.visibility = "visible";
          document.getElementById(roomType + "L").style.visibility = "visible";
          document.getElementById(roomType + "L").innerHTML += _this2.state.rooms[i][0] + " habitaciones disponibles";
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

var BASE_URL = json.BASE_URL.production; // change to local if needed

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

module.exports = JSON.parse('{"BASE_URL":{"local":"http://localhost:8000","prod":"https://super-bookings-app.herokuapp.com"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_map_js-node_modules-9f7aca"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFDLDZDQUFBLGVBQ0ksMkRBQUMsMkRBQUQscUJBQ0ksMkRBQUMsb0RBQUQscUJBQ0ksMkRBQUMsbURBQUQ7RUFBTyxJQUFJLEVBQUMsV0FBWjtFQUF3QixPQUFPLGVBQUUsMkRBQUMsZ0VBQUQ7QUFBakMsRUFESixlQUVJLDJEQUFDLG1EQUFEO0VBQU8sSUFBSSxFQUFDLGtCQUFaO0VBQStCLE9BQU8sZUFBRSwyREFBQyxrRUFBRDtBQUF4QyxFQUZKLGVBR0ksMkRBQUMsbURBQUQ7RUFBTyxJQUFJLEVBQUMsR0FBWjtFQUFlLE9BQU8sZUFBRSwyREFBQyxzREFBRDtJQUFVLEVBQUUsRUFBQyxXQUFiO0lBQXlCLE9BQU87RUFBaEM7QUFBeEIsRUFISixDQURKLENBREosRUFRTVMsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBUk47Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1LLElBQUksR0FBR0MsbUJBQU8sQ0FBQyxzREFBRCxDQUFwQjs7QUFFQSxJQUFNQyxRQUFRLEdBQUdGLElBQUksQ0FBQ0UsUUFBTCxDQUFjQyxVQUEvQixFQUEwQzs7SUFFckJYOzs7OztFQUNqQix3QkFBWVksS0FBWixFQUFtQjtJQUFBOztJQUFBOztJQUNmLDBCQUFNQSxLQUFOO0lBQ0EsTUFBS0MsS0FBTCxHQUFhO01BQ1RDLFNBQVMsRUFBRSxJQUFJQyxJQUFKLEVBREY7TUFFVEMsT0FBTyxFQUFFLElBQUlELElBQUosRUFGQTtNQUdURSxTQUFTLEVBQUUsQ0FIRjtNQUlUQyxRQUFRLEVBQUUsRUFKRDtNQUtUQyxLQUFLLEVBQUUsRUFMRTtNQU1UQyxJQUFJLEVBQUUsRUFORztNQU9UQyxLQUFLLEVBQUUsRUFQRTtNQVFUQyxLQUFLLEVBQUUsRUFSRTtNQVNUQyxZQUFZLEVBQUUsQ0FUTDtNQVVUQyxtQkFBbUIsRUFBRSxLQVZaO01BV1RDLGVBQWUsRUFBRTtJQVhSLENBQWI7SUFGZTtFQWVsQjs7OztXQUVELHNCQUFhQyxJQUFiLEVBQW1CO01BQ2YsS0FBS0Msa0JBQUw7TUFDQSxLQUFLQyxlQUFMOztNQUVBLElBQUlGLElBQUksR0FBRyxLQUFLYixLQUFMLENBQVdHLE9BQXRCLEVBQStCO1FBQzNCVSxJQUFJLEdBQUcsS0FBS2IsS0FBTCxDQUFXRyxPQUFsQjtNQUNIOztNQUVELElBQUlVLElBQUksR0FBR1gsSUFBSSxDQUFDYyxHQUFoQixFQUFxQixDQUNwQjs7TUFFRCxLQUFLQyxRQUFMLENBQWM7UUFDVmhCLFNBQVMsRUFBRVk7TUFERCxDQUFkO0lBR0g7OztXQUVELG9CQUFXQSxJQUFYLEVBQWlCO01BQ2IsS0FBS0Msa0JBQUw7TUFDQSxLQUFLQyxlQUFMOztNQUVBLElBQUlGLElBQUksR0FBRyxLQUFLYixLQUFMLENBQVdDLFNBQXRCLEVBQWlDO1FBQzdCWSxJQUFJLEdBQUcsS0FBS2IsS0FBTCxDQUFXQyxTQUFsQjtNQUNIOztNQUVELElBQUlZLElBQUksR0FBR1gsSUFBSSxDQUFDYyxHQUFoQixFQUFxQixDQUNwQjs7TUFFRCxLQUFLQyxRQUFMLENBQWM7UUFDVmQsT0FBTyxFQUFFVTtNQURDLENBQWQ7SUFHSDs7O1dBRUQsOEJBQXFCUixRQUFyQixFQUErQjtNQUMzQixRQUFRQSxRQUFSO1FBQ0ksS0FBSyxRQUFMO1VBQ0ksT0FBTyxZQUFQOztRQUNKLEtBQUssUUFBTDtVQUNJLE9BQU8sT0FBUDs7UUFDSixLQUFLLFFBQUw7VUFDSSxPQUFPLFFBQVA7O1FBQ0osS0FBSyxXQUFMO1VBQ0ksT0FBTyxXQUFQO01BUlI7SUFVSDs7O1dBRUQsMkJBQWtCO01BQ2QsSUFBSWEsYUFBYSxHQUFHLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsT0FBbEIsQ0FBcEI7TUFDQSxJQUFJQyxDQUFDLEdBQUcsQ0FBUjtNQUVBOUIsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLEVBQXVDOEIsS0FBdkMsQ0FBNkNDLFVBQTdDLEdBQTBELFFBQTFEOztNQUVBLE9BQU9GLENBQUMsR0FBR0QsYUFBYSxDQUFDSSxNQUF6QixFQUFpQztRQUM3QmpDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QjRCLGFBQWEsQ0FBQ0MsQ0FBRCxDQUFyQyxFQUEwQ0MsS0FBMUMsQ0FBZ0RDLFVBQWhELEdBQTZELFFBQTdEO1FBQ0FoQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0I0QixhQUFhLENBQUNDLENBQUQsQ0FBYixHQUFtQixHQUEzQyxFQUFnREMsS0FBaEQsQ0FBc0RDLFVBQXRELEdBQW1FLFFBQW5FO1FBQ0FGLENBQUMsR0FBR0EsQ0FBQyxHQUFHLENBQVI7TUFDSDs7TUFFRDlCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixFQUF5QzhCLEtBQXpDLENBQStDQyxVQUEvQyxHQUE0RCxRQUE1RDtJQUNIOzs7V0FFRCw4QkFBcUI7TUFDakIsSUFBSUYsQ0FBQyxHQUFHLENBQVI7TUFDQSxJQUFJSSxTQUFTLEdBQUcsQ0FBQyxXQUFELEVBQWMsUUFBZCxFQUF3QixRQUF4QixFQUFrQyxRQUFsQyxDQUFoQjtNQUdBbEMsUUFBUSxDQUFDQyxjQUFULENBQXdCLHFCQUF4QixFQUErQzhCLEtBQS9DLENBQXFEQyxVQUFyRCxHQUFrRSxRQUFsRTs7TUFFQSxPQUFPRixDQUFDLEdBQUcsQ0FBWCxFQUFjO1FBQ1Y5QixRQUFRLENBQUNDLGNBQVQsQ0FBd0JpQyxTQUFTLENBQUNKLENBQUQsQ0FBVCxDQUFhSyxXQUFiLEVBQXhCLEVBQW9EQyxRQUFwRCxHQUErRCxLQUEvRDtRQUNBcEMsUUFBUSxDQUFDQyxjQUFULENBQXdCaUMsU0FBUyxDQUFDSixDQUFELENBQVQsQ0FBYUssV0FBYixFQUF4QixFQUFvREosS0FBcEQsQ0FBMERDLFVBQTFELEdBQXVFLFFBQXZFO1FBQ0FoQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JpQyxTQUFTLENBQUNKLENBQUQsQ0FBVCxDQUFhSyxXQUFiLEtBQTZCLEdBQXJELEVBQTBESixLQUExRCxDQUFnRUMsVUFBaEUsR0FBNkUsUUFBN0U7UUFDQWhDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QmlDLFNBQVMsQ0FBQ0osQ0FBRCxDQUFULENBQWFLLFdBQWIsS0FBNkIsR0FBckQsRUFBMERFLFNBQTFELEdBQXNFLEtBQUtDLG9CQUFMLENBQTBCSixTQUFTLENBQUNKLENBQUQsQ0FBbkMsSUFBMEMsSUFBaEg7UUFDQUEsQ0FBQyxHQUFHQSxDQUFDLEdBQUcsQ0FBUjtNQUNIOztNQUVEOUIsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLEVBQXdDc0MsU0FBeEMsR0FBb0QsRUFBcEQ7TUFDQXZDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixFQUF3QzhCLEtBQXhDLENBQThDQyxVQUE5QyxHQUEyRCxRQUEzRDtJQUNIOzs7V0FFRCw2QkFBb0I7TUFBQTs7TUFDaEIsSUFBSVEsZUFBZSxHQUFHLEtBQUs3QixLQUFMLENBQVdDLFNBQVgsQ0FBcUI2QixXQUFyQixHQUFtQ0MsS0FBbkMsQ0FBeUMsR0FBekMsRUFBOEMsQ0FBOUMsQ0FBdEI7TUFDQSxJQUFJQyxhQUFhLEdBQUcsS0FBS2hDLEtBQUwsQ0FBV0csT0FBWCxDQUFtQjJCLFdBQW5CLEdBQWlDQyxLQUFqQyxDQUF1QyxHQUF2QyxFQUE0QyxDQUE1QyxDQUFwQjtNQUVBLEtBQUtqQixrQkFBTDtNQUVBLEtBQUtHLFFBQUwsQ0FBYztRQUNWWCxLQUFLLEVBQUU7TUFERyxDQUFkO01BS0EsSUFBSWEsQ0FBQyxHQUFHLENBQVI7TUFDQSxJQUFJSSxTQUFTLEdBQUcsQ0FBQyxXQUFELEVBQWMsUUFBZCxFQUF3QixRQUF4QixFQUFrQyxRQUFsQyxDQUFoQjtNQUNBLElBQUlVLFFBQVEsR0FBRyxFQUFmOztNQUNBLE9BQU9kLENBQUMsR0FBRyxJQUFJLEtBQUtuQixLQUFMLENBQVdJLFNBQTFCLEVBQXFDO1FBQ2pDNkIsUUFBUSxDQUFDQyxJQUFULENBQWN4QyxpREFBQSxDQUFVRyxRQUFRLEdBQUcsaUNBQVgsR0FDcEIsRUFEb0IsR0FDZmdDLGVBRGUsR0FFcEIsV0FGb0IsR0FFTkcsYUFGTSxHQUdwQixZQUhvQixHQUdMVCxTQUFTLENBQUNKLENBQUQsQ0FIZCxFQUdtQmlCLElBSG5CLENBR3dCLFVBQUE5QixLQUFLLEVBQUk7VUFDM0MsTUFBSSxDQUFDTixLQUFMLENBQVdNLEtBQVgsQ0FBaUI0QixJQUFqQixDQUFzQixDQUFDNUIsS0FBSyxDQUFDK0IsSUFBTixDQUFXQyxlQUFaLEVBQTZCaEMsS0FBSyxDQUFDK0IsSUFBTixDQUFXaEMsUUFBeEMsQ0FBdEI7O1VBQ0EsTUFBSSxDQUFDWSxRQUFMLENBQWM7WUFBQ1gsS0FBSyxFQUFFLE1BQUksQ0FBQ04sS0FBTCxDQUFXTTtVQUFuQixDQUFkO1FBQ0gsQ0FOYSxDQUFkO1FBT0FhLENBQUMsR0FBR0EsQ0FBQyxHQUFHLENBQVI7TUFDSDs7TUFDRG9CLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUCxRQUFaLEVBQXNCRyxJQUF0QixDQUEyQixVQUFDSyxJQUFELEVBQVU7UUFDakN0QixDQUFDLEdBQUcsQ0FBSjtRQUNBLElBQUlkLFFBQVEsR0FBRyxFQUFmOztRQUVBLE9BQU9jLENBQUMsR0FBRyxJQUFJLE1BQUksQ0FBQ25CLEtBQUwsQ0FBV0ksU0FBMUIsRUFBcUM7VUFDakMsUUFBUSxNQUFJLENBQUNKLEtBQUwsQ0FBV00sS0FBWCxDQUFpQmEsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBUjtZQUNJLEtBQUssUUFBTDtjQUFlZCxRQUFRLEdBQUcsUUFBWDtjQUFxQjs7WUFDcEMsS0FBSyxRQUFMO2NBQWVBLFFBQVEsR0FBRyxRQUFYO2NBQXFCOztZQUNwQyxLQUFLLFFBQUw7Y0FBZUEsUUFBUSxHQUFHLFFBQVg7Y0FBcUI7O1lBQ3BDLEtBQUssV0FBTDtjQUFrQkEsUUFBUSxHQUFHLFdBQVg7Y0FBd0I7VUFKOUM7O1VBT0EsSUFBSSxNQUFJLENBQUNMLEtBQUwsQ0FBV00sS0FBWCxDQUFpQmEsQ0FBakIsRUFBb0IsQ0FBcEIsTUFBMkIsQ0FBL0IsRUFBa0M7WUFDOUI5QixRQUFRLENBQUNDLGNBQVQsQ0FBd0JlLFFBQXhCLEVBQWtDb0IsUUFBbEMsR0FBNkMsSUFBN0M7VUFDSDs7VUFFRHBDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QmUsUUFBeEIsRUFBa0NlLEtBQWxDLENBQXdDQyxVQUF4QyxHQUFxRCxTQUFyRDtVQUNBaEMsUUFBUSxDQUFDQyxjQUFULENBQXdCZSxRQUFRLEdBQUcsR0FBbkMsRUFBd0NlLEtBQXhDLENBQThDQyxVQUE5QyxHQUEyRCxTQUEzRDtVQUNBaEMsUUFBUSxDQUFDQyxjQUFULENBQXdCZSxRQUFRLEdBQUcsR0FBbkMsRUFBd0N1QixTQUF4QyxJQUFxRCxNQUFJLENBQUM1QixLQUFMLENBQVdNLEtBQVgsQ0FBaUJhLENBQWpCLEVBQW9CLENBQXBCLElBQXlCLDJCQUE5RTtVQUNBQSxDQUFDLEdBQUdBLENBQUMsR0FBRyxDQUFSO1FBQ0g7TUFFSixDQXRCRDtNQXVCQTlCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixxQkFBeEIsRUFBK0M4QixLQUEvQyxDQUFxREMsVUFBckQsR0FBa0UsU0FBbEU7SUFDSDs7O1dBRUQsNkJBQW9CO01BQ2hCLEtBQUtQLGtCQUFMO01BQ0EsS0FBS0MsZUFBTDtNQUVBLEtBQUtFLFFBQUwsQ0FBYztRQUNWYixTQUFTLEVBQUVmLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixFQUFxQ29ELGFBQXJDLEdBQXFEO01BRHRELENBQWQ7TUFHQSxJQUFJbkIsU0FBUyxHQUFHLENBQUMsV0FBRCxFQUFjLFFBQWQsRUFBd0IsUUFBeEIsRUFBa0MsUUFBbEMsQ0FBaEI7TUFDQSxJQUFJSixDQUFDLEdBQUcsQ0FBUjs7TUFDQSxPQUFPQSxDQUFDLEdBQUcsSUFBSSxLQUFLbkIsS0FBTCxDQUFXSSxTQUExQixFQUFxQztRQUNqQ2YsUUFBUSxDQUFDQyxjQUFULENBQXdCaUMsU0FBUyxDQUFDSixDQUFELENBQVQsQ0FBYUssV0FBYixFQUF4QixFQUFvREosS0FBcEQsQ0FBMERDLFVBQTFELEdBQXVFLFFBQXZFO1FBQ0FoQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JpQyxTQUFTLENBQUNKLENBQUQsQ0FBVCxDQUFhSyxXQUFiLEtBQTZCLEdBQXJELEVBQTBESixLQUExRCxDQUFnRUMsVUFBaEUsR0FBNkUsUUFBN0U7UUFDQUYsQ0FBQyxHQUFHQSxDQUFDLEdBQUcsQ0FBUjtNQUNIOztNQUVEOUIsUUFBUSxDQUFDQyxjQUFULENBQXdCLHFCQUF4QixFQUErQzhCLEtBQS9DLENBQXFEQyxVQUFyRCxHQUFrRSxRQUFsRTtJQUNIOzs7V0FFRCwyQkFBa0I7TUFBQTs7TUFDZCxJQUFJUSxlQUFlLEdBQUcsS0FBSzdCLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQjZCLFdBQXJCLEdBQW1DQyxLQUFuQyxDQUF5QyxHQUF6QyxFQUE4QyxDQUE5QyxDQUF0QjtNQUNBLElBQUlDLGFBQWEsR0FBRyxLQUFLaEMsS0FBTCxDQUFXRyxPQUFYLENBQW1CMkIsV0FBbkIsR0FBaUNDLEtBQWpDLENBQXVDLEdBQXZDLEVBQTRDLENBQTVDLENBQXBCO01BRUEsSUFBSTFCLFFBQVEsR0FBR2hCLFFBQVEsQ0FBQ3NELGFBQVQsQ0FBdUIsaUNBQXZCLEVBQTBEQyxLQUExRCxDQUFnRUMsV0FBaEUsRUFBZjtNQUNBLEtBQUs1QixRQUFMLENBQWM7UUFDVlosUUFBUSxFQUFFQTtNQURBLENBQWQ7TUFHQVgsaURBQUEsQ0FBVUcsUUFBUSxHQUFHLGdDQUFYLEdBQ04sRUFETSxHQUNEZ0MsZUFEQyxHQUVOLFdBRk0sR0FFUUcsYUFGUixHQUdOLFlBSE0sR0FHUzNCLFFBSG5CLEVBRzZCK0IsSUFIN0IsQ0FHa0MsVUFBQVUsTUFBTSxFQUFJO1FBQ3hDLE1BQUksQ0FBQzdCLFFBQUwsQ0FBYztVQUFDUCxZQUFZLEVBQUVvQyxNQUFNLENBQUNULElBQVAsQ0FBWVU7UUFBM0IsQ0FBZDs7UUFDQTFELFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixFQUF3Q3NDLFNBQXhDLEdBQW9ELG1CQUFtQixNQUFJLENBQUM1QixLQUFMLENBQVdVLFlBQTlCLEdBQTZDLEdBQWpHO1FBQ0FyQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsRUFBd0M4QixLQUF4QyxDQUE4Q0MsVUFBOUMsR0FBMkQsU0FBM0Q7TUFDSCxDQVBEO01BU0EsS0FBSzJCLHNCQUFMO0lBQ0g7OztXQUVELHlCQUFnQjtNQUVaM0QsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLEVBQXFDb0MsU0FBckMsR0FBaUQsRUFBakQ7TUFDQXJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQ29DLFNBQXRDLEdBQWtELEVBQWxEO01BQ0FyQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NvQyxTQUF0QyxHQUFrRCxFQUFsRDtNQUVBLElBQUl1QixNQUFNLEdBQUcsSUFBYjtNQUNBLElBQUlDLE9BQU8sR0FBRyxJQUFkO01BQ0EsSUFBSUMsT0FBTyxHQUFHLElBQWQ7O01BRUEsSUFBSSxLQUFLbkQsS0FBTCxDQUFXTyxJQUFYLElBQW1CLEVBQXZCLEVBQTJCO1FBQ3ZCbEIsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLEVBQXFDb0MsU0FBckMsR0FBaUQsNkNBQWpEO1FBQ0F1QixNQUFNLEdBQUcsS0FBVDtNQUNIOztNQUVELElBQUksS0FBS2pELEtBQUwsQ0FBV08sSUFBWCxDQUFnQmUsTUFBaEIsR0FBeUIsRUFBN0IsRUFBaUM7UUFDN0JqQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsRUFBcUNvQyxTQUFyQyxHQUFpRCw4Q0FBakQ7UUFDQXVCLE1BQU0sR0FBRyxLQUFUO01BQ0g7O01BRUQsSUFBSSxLQUFLakQsS0FBTCxDQUFXUSxLQUFYLElBQW9CLEVBQXhCLEVBQTRCO1FBQ3hCbkIsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLEVBQXNDb0MsU0FBdEMsR0FBa0QsNkNBQWxEO1FBQ0F3QixPQUFPLEdBQUcsS0FBVjtNQUNIOztNQUVELElBQUksS0FBS2xELEtBQUwsQ0FBV1EsS0FBWCxDQUFpQmMsTUFBakIsR0FBMEIsRUFBOUIsRUFBa0M7UUFDOUJqQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NvQyxTQUF0QyxHQUFrRCw4Q0FBbEQ7UUFDQXdCLE9BQU8sR0FBRyxLQUFWO01BQ0g7O01BRUQsSUFBSSxLQUFLbEQsS0FBTCxDQUFXUyxLQUFYLElBQW9CLEVBQXhCLEVBQTRCO1FBQ3hCcEIsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLEVBQXNDb0MsU0FBdEMsR0FBa0QsNkNBQWxEO1FBQ0F5QixPQUFPLEdBQUcsS0FBVjtNQUNIOztNQUVELElBQUksS0FBS25ELEtBQUwsQ0FBV1MsS0FBWCxDQUFpQmEsTUFBakIsR0FBMEIsRUFBOUIsRUFBa0M7UUFDOUJqQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsRUFBcUNvQyxTQUFyQyxHQUFpRCw4Q0FBakQ7UUFDQXlCLE9BQU8sR0FBRyxLQUFWO01BQ0g7O01BRUQsSUFBSSxDQUFDRixNQUFELElBQVcsQ0FBQ0MsT0FBWixJQUF1QixDQUFDQyxPQUE1QixFQUFxQztRQUNqQ0MsT0FBTyxDQUFDQyxHQUFSLENBQVlKLE1BQVosRUFBb0JDLE9BQXBCLEVBQTZCQyxPQUE3QjtRQUNBO01BQ0g7O01BRUR6RCxrREFBQSxDQUFXRyxRQUFRLEdBQUcsZUFBdEIsRUFBdUM7UUFDbkNJLFNBQVMsRUFBRSxLQUFLRCxLQUFMLENBQVdDLFNBRGE7UUFFbkNFLE9BQU8sRUFBRSxLQUFLSCxLQUFMLENBQVdHLE9BRmU7UUFHbkNFLFFBQVEsRUFBRSxLQUFLTCxLQUFMLENBQVdLLFFBSGM7UUFJbkNELFNBQVMsRUFBRSxLQUFLSixLQUFMLENBQVdJLFNBSmE7UUFLbkMyQyxhQUFhLEVBQUUsS0FBSy9DLEtBQUwsQ0FBV1UsWUFMUztRQU1uQ0gsSUFBSSxFQUFFLEtBQUtQLEtBQUwsQ0FBV08sSUFOa0I7UUFPbkNDLEtBQUssRUFBRSxLQUFLUixLQUFMLENBQVdRLEtBUGlCO1FBUW5DQyxLQUFLLEVBQUUsS0FBS1QsS0FBTCxDQUFXUztNQVJpQixDQUF2QyxFQVVLMkIsSUFWTCxDQVVVLFVBQVVtQixRQUFWLEVBQW9CO1FBQ3RCLElBQUk5RCxxREFBSixDQUFTLFNBQVQsRUFBb0IsMENBQXBCLEVBQWdFLFNBQWhFLEVBQTJFMkMsSUFBM0UsQ0FBZ0Y7VUFBQSxPQUM1RS9DLFFBQVEsQ0FBQ21FLFFBQVQsQ0FBa0JDLElBQWxCLEdBQXlCLEtBRG1EO1FBQUEsQ0FBaEY7TUFHSCxDQWRMLFdBZVcsVUFBVUMsS0FBVixFQUFpQjtRQUNwQk4sT0FBTyxDQUFDQyxHQUFSLENBQVlLLEtBQVo7TUFDSCxDQWpCTDtJQWtCSDs7O1dBRUQsa0NBQXlCO01BQ3JCLElBQUl4QyxhQUFhLEdBQUcsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixPQUFsQixDQUFwQjtNQUNBLElBQUlDLENBQUMsR0FBRyxDQUFSO01BRUE5QixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUM4QixLQUF2QyxDQUE2Q0MsVUFBN0MsR0FBMEQsU0FBMUQ7O01BRUEsT0FBT0YsQ0FBQyxHQUFHRCxhQUFhLENBQUNJLE1BQXpCLEVBQWlDO1FBQzdCakMsUUFBUSxDQUFDQyxjQUFULENBQXdCNEIsYUFBYSxDQUFDQyxDQUFELENBQXJDLEVBQTBDQyxLQUExQyxDQUFnREMsVUFBaEQsR0FBNkQsU0FBN0Q7UUFDQWhDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QjRCLGFBQWEsQ0FBQ0MsQ0FBRCxDQUFiLEdBQW1CLEdBQTNDLEVBQWdEQyxLQUFoRCxDQUFzREMsVUFBdEQsR0FBbUUsU0FBbkU7UUFDQUYsQ0FBQyxHQUFHQSxDQUFDLEdBQUcsQ0FBUjtNQUNIOztNQUVEOUIsUUFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLEVBQXlDOEIsS0FBekMsQ0FBK0NDLFVBQS9DLEdBQTRELFNBQTVEO0lBRUg7OztXQUVELHNCQUFhc0MsS0FBYixFQUFvQkMsS0FBcEIsRUFBMkI7TUFDdkIsUUFBUUQsS0FBUjtRQUNJLEtBQUssTUFBTDtVQUNJLEtBQUsxQyxRQUFMLENBQWM7WUFBQ1YsSUFBSSxFQUFFcUQsS0FBSyxDQUFDQyxNQUFOLENBQWFqQjtVQUFwQixDQUFkO1VBQ0E7O1FBQ0osS0FBSyxPQUFMO1VBQ0ksS0FBSzNCLFFBQUwsQ0FBYztZQUFDVCxLQUFLLEVBQUVvRCxLQUFLLENBQUNDLE1BQU4sQ0FBYWpCO1VBQXJCLENBQWQ7VUFDQTs7UUFDSixLQUFLLE9BQUw7VUFDSSxLQUFLM0IsUUFBTCxDQUFjO1lBQUNSLEtBQUssRUFBRW1ELEtBQUssQ0FBQ0MsTUFBTixDQUFhakI7VUFBckIsQ0FBZDtVQUNBO01BVFI7SUFXSDs7O1dBRUQsa0JBQVM7TUFBQTs7TUFDTCxvQkFDSTtRQUFLLFNBQVMsRUFBQztNQUFmLGdCQUNJO1FBQUksU0FBUyxFQUFDO01BQWQsZ0JBQTRCLDBGQUE1QixDQURKLGVBRUk7UUFBSyxTQUFTLEVBQUM7TUFBZixFQUZKLG1DQUlJLDREQUFDLDBEQUFEO1FBQ0ksVUFBVSxFQUFDLFlBRGY7UUFFSSxRQUFRLEVBQUUsS0FBSzVDLEtBQUwsQ0FBV0MsU0FGekI7UUFHSSxRQUFRLEVBQUUsa0JBQUNZLElBQUQsRUFBVTtVQUNoQixNQUFJLENBQUNpRCxZQUFMLENBQWtCakQsSUFBbEI7UUFDSCxDQUxMO1FBTUksT0FBTyxFQUFFLElBQUlYLElBQUo7TUFOYixFQUpKLGVBV0k7UUFBSyxTQUFTLEVBQUM7TUFBZixFQVhKLGtDQWFJLDREQUFDLDBEQUFEO1FBQ0ksVUFBVSxFQUFDLFlBRGY7UUFFSSxRQUFRLEVBQUUsS0FBS0YsS0FBTCxDQUFXRyxPQUZ6QjtRQUdJLFFBQVEsRUFBRSxrQkFBQ1UsSUFBRCxFQUFVO1VBQ2hCLE1BQUksQ0FBQ2tELFVBQUwsQ0FBZ0JsRCxJQUFoQjtRQUNILENBTEw7UUFNSSxPQUFPLEVBQUUsSUFBSVgsSUFBSjtNQU5iLEVBYkosZUFvQkk7UUFBSyxTQUFTLEVBQUM7TUFBZixFQXBCSix3Q0FzQkk7UUFBUSxRQUFRLEVBQUUsS0FBSzhELGlCQUFMLENBQXVCQyxJQUF2QixDQUE0QixJQUE1QixDQUFsQjtRQUFxRCxJQUFJLEVBQUMsV0FBMUQ7UUFBc0UsRUFBRSxFQUFDO01BQXpFLGdCQUNJO1FBQVEsS0FBSyxFQUFDO01BQWQsT0FESixlQUVJO1FBQVEsS0FBSyxFQUFDO01BQWQsT0FGSixlQUdJO1FBQVEsS0FBSyxFQUFDO01BQWQsT0FISixlQUlJO1FBQVEsS0FBSyxFQUFDO01BQWQsT0FKSixDQXRCSixlQTRCSTtRQUFRLEVBQUUsRUFBQyxzQkFBWDtRQUFrQyxTQUFTLEVBQUMsaUJBQTVDO1FBQ1EsT0FBTyxFQUFFLEtBQUtDLGlCQUFMLENBQXVCRCxJQUF2QixDQUE0QixJQUE1QjtNQURqQixrQ0E1QkosZUFnQ0k7UUFBSyxTQUFTLEVBQUM7TUFBZixFQWhDSixlQWlDSTtRQUFHLEVBQUUsRUFBQyxxQkFBTjtRQUE0QixLQUFLLEVBQUU7VUFBQzVDLFVBQVUsRUFBRTtRQUFiO01BQW5DLGdDQWpDSixlQWtDSTtRQUFLLFNBQVMsRUFBQztNQUFmLEVBbENKLGVBbUNJO1FBQU8sSUFBSSxFQUFDLE9BQVo7UUFBb0IsRUFBRSxFQUFDLFFBQXZCO1FBQWdDLElBQUksRUFBQyxXQUFyQztRQUFpRCxLQUFLLEVBQUMsUUFBdkQ7UUFDTyxPQUFPLEVBQUUsS0FBSzhDLGVBQUwsQ0FBcUJGLElBQXJCLENBQTBCLElBQTFCLENBRGhCO1FBQ2lELEtBQUssRUFBRTtVQUFDNUMsVUFBVSxFQUFFO1FBQWI7TUFEeEQsRUFuQ0osZUFxQ0k7UUFBTyxPQUFPLEVBQUMsUUFBZjtRQUF3QixFQUFFLEVBQUMsU0FBM0I7UUFBcUMsS0FBSyxFQUFFO1VBQUNBLFVBQVUsRUFBRTtRQUFiO01BQTVDLGlCQXJDSixlQXFDMkYsdUVBckMzRixlQXNDSTtRQUFPLElBQUksRUFBQyxPQUFaO1FBQW9CLEVBQUUsRUFBQyxRQUF2QjtRQUFnQyxJQUFJLEVBQUMsV0FBckM7UUFBaUQsS0FBSyxFQUFDLFFBQXZEO1FBQ08sT0FBTyxFQUFFLEtBQUs4QyxlQUFMLENBQXFCRixJQUFyQixDQUEwQixJQUExQixDQURoQjtRQUNpRCxLQUFLLEVBQUU7VUFBQzVDLFVBQVUsRUFBRTtRQUFiO01BRHhELEVBdENKLGVBd0NJO1FBQU8sT0FBTyxFQUFDLFFBQWY7UUFBd0IsRUFBRSxFQUFDLFNBQTNCO1FBQXFDLEtBQUssRUFBRTtVQUFDQSxVQUFVLEVBQUU7UUFBYjtNQUE1QyxZQXhDSixlQXdDc0YsdUVBeEN0RixlQXlDSTtRQUFPLElBQUksRUFBQyxPQUFaO1FBQW9CLEVBQUUsRUFBQyxRQUF2QjtRQUFnQyxJQUFJLEVBQUMsV0FBckM7UUFBaUQsS0FBSyxFQUFDLFFBQXZEO1FBQ08sT0FBTyxFQUFFLEtBQUs4QyxlQUFMLENBQXFCRixJQUFyQixDQUEwQixJQUExQixDQURoQjtRQUVPLEtBQUssRUFBRTtVQUFDNUMsVUFBVSxFQUFFO1FBQWI7TUFGZCxFQXpDSixlQTRDSTtRQUFPLE9BQU8sRUFBQyxRQUFmO1FBQXdCLEVBQUUsRUFBQyxTQUEzQjtRQUFxQyxLQUFLLEVBQUU7VUFBQ0EsVUFBVSxFQUFFO1FBQWI7TUFBNUMsYUE1Q0osZUE0Q3VGLHVFQTVDdkYsZUE2Q0k7UUFBTyxJQUFJLEVBQUMsT0FBWjtRQUFvQixFQUFFLEVBQUMsV0FBdkI7UUFBbUMsSUFBSSxFQUFDLFdBQXhDO1FBQW9ELEtBQUssRUFBQyxXQUExRDtRQUNPLE9BQU8sRUFBRSxLQUFLOEMsZUFBTCxDQUFxQkYsSUFBckIsQ0FBMEIsSUFBMUIsQ0FEaEI7UUFFTyxLQUFLLEVBQUU7VUFBQzVDLFVBQVUsRUFBRTtRQUFiO01BRmQsRUE3Q0osZUFnREk7UUFBTyxPQUFPLEVBQUMsV0FBZjtRQUEyQixFQUFFLEVBQUMsWUFBOUI7UUFBMkMsS0FBSyxFQUFFO1VBQUNBLFVBQVUsRUFBRTtRQUFiO01BQWxELGdCQWhESixlQWdEZ0csdUVBaERoRyxlQWlESTtRQUFLLFNBQVMsRUFBQztNQUFmLEVBakRKLGVBa0RJO1FBQUcsRUFBRSxFQUFDLGNBQU47UUFBcUIsS0FBSyxFQUFFO1VBQUNBLFVBQVUsRUFBRTtRQUFiO01BQTVCLG9CQWxESixlQW1ESTtRQUFLLFNBQVMsRUFBQztNQUFmLEVBbkRKLGVBb0RJO1FBQUcsRUFBRSxFQUFDLGFBQU47UUFBb0IsS0FBSyxFQUFFO1VBQUNBLFVBQVUsRUFBRTtRQUFiO01BQTNCLHlDQXBESixlQXFESTtRQUFPLE9BQU8sRUFBQyxNQUFmO1FBQXNCLEVBQUUsRUFBQyxPQUF6QjtRQUFpQyxLQUFLLEVBQUU7VUFBQ0EsVUFBVSxFQUFFO1FBQWI7TUFBeEMseUJBckRKLGVBc0RJO1FBQU8sSUFBSSxFQUFDLE1BQVo7UUFBbUIsRUFBRSxFQUFDLE1BQXRCO1FBQTZCLElBQUksRUFBQyxNQUFsQztRQUF5QyxRQUFRLEVBQUUsa0JBQUMrQyxHQUFEO1VBQUEsT0FBUyxNQUFJLENBQUNDLFlBQUwsQ0FBa0IsTUFBbEIsRUFBMEJELEdBQTFCLENBQVQ7UUFBQSxDQUFuRDtRQUNPLEtBQUssRUFBRTtVQUFDL0MsVUFBVSxFQUFFO1FBQWI7TUFEZCxFQXRESixlQXVEMkMsdUVBdkQzQyxlQXdESTtRQUFHLEVBQUUsRUFBQztNQUFOLEVBeERKLGVBeURJO1FBQU8sT0FBTyxFQUFDLE9BQWY7UUFBdUIsRUFBRSxFQUFDLFFBQTFCO1FBQW1DLEtBQUssRUFBRTtVQUFDQSxVQUFVLEVBQUU7UUFBYjtNQUExQyw0QkF6REosZUEwREk7UUFBTyxJQUFJLEVBQUMsTUFBWjtRQUFtQixFQUFFLEVBQUMsT0FBdEI7UUFBOEIsSUFBSSxFQUFDLE9BQW5DO1FBQTJDLFFBQVEsRUFBRSxrQkFBQytDLEdBQUQ7VUFBQSxPQUFTLE1BQUksQ0FBQ0MsWUFBTCxDQUFrQixPQUFsQixFQUEyQkQsR0FBM0IsQ0FBVDtRQUFBLENBQXJEO1FBQ08sS0FBSyxFQUFFO1VBQUMvQyxVQUFVLEVBQUU7UUFBYjtNQURkLEVBMURKLGVBMkQyQyx1RUEzRDNDLGVBNERJO1FBQUcsRUFBRSxFQUFDO01BQU4sRUE1REosZUE2REk7UUFBTyxPQUFPLEVBQUMsT0FBZjtRQUF1QixFQUFFLEVBQUMsUUFBMUI7UUFBbUMsS0FBSyxFQUFFO1VBQUNBLFVBQVUsRUFBRTtRQUFiO01BQTFDLG9DQTdESixlQThESTtRQUFPLElBQUksRUFBQyxNQUFaO1FBQW1CLEVBQUUsRUFBQyxPQUF0QjtRQUE4QixJQUFJLEVBQUMsT0FBbkM7UUFBMkMsUUFBUSxFQUFFLGtCQUFDK0MsR0FBRDtVQUFBLE9BQVMsTUFBSSxDQUFDQyxZQUFMLENBQWtCLE9BQWxCLEVBQTJCRCxHQUEzQixDQUFUO1FBQUEsQ0FBckQ7UUFDTyxLQUFLLEVBQUU7VUFBQy9DLFVBQVUsRUFBRTtRQUFiO01BRGQsRUE5REosZUErRDJDLHVFQS9EM0MsZUFnRUk7UUFBRyxFQUFFLEVBQUM7TUFBTixFQWhFSixlQWlFSTtRQUFRLFNBQVMsRUFBQyxpQkFBbEI7UUFDUSxFQUFFLEVBQUMsZUFEWDtRQUVRLEtBQUssRUFBRTtVQUNIaUQsUUFBUSxFQUFFLFVBRFA7VUFFSCxTQUFPLE9BRko7VUFHSEMsS0FBSyxFQUFFLE1BSEo7VUFJSEMsR0FBRyxFQUFFLE9BSkY7VUFLSG5ELFVBQVUsRUFBRTtRQUxULENBRmY7UUFTUSxPQUFPLEVBQUUsS0FBS29ELGFBQUwsQ0FBbUJSLElBQW5CLENBQXdCLElBQXhCO01BVGpCLG1CQWpFSixDQURKO0lBZ0ZIOzs7O0VBeld1QzFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWNUM7QUFDQTtBQUNBO0FBRUE7QUFPQTs7QUFFQSxJQUFNSSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsc0RBQUQsQ0FBcEI7O0FBRUEsSUFBTUMsUUFBUSxHQUFHRixJQUFJLENBQUNFLFFBQUwsQ0FBY0MsVUFBL0IsRUFBMEM7O0lBRXJCZ0Y7Ozs7O0VBQ2pCLG9CQUFjO0lBQUE7O0lBQUE7O0lBQ1Y7SUFFQSxNQUFLOUUsS0FBTCxHQUFhO01BQUMrRSxRQUFRLEVBQUU7SUFBWCxDQUFiO0lBSFU7RUFJYjs7OztXQUVELDZCQUFvQjtNQUNoQixLQUFLQyxXQUFMO0lBQ0g7OztXQUVELHVCQUFjO01BQUE7O01BQ1Z0RixpREFBQSxDQUFVRyxRQUFRLEdBQUcsZUFBckIsRUFBc0N1QyxJQUF0QyxDQUEyQyxVQUFBMkMsUUFBUSxFQUFJO1FBQ25ELE1BQUksQ0FBQzlELFFBQUwsQ0FBYztVQUFDOEQsUUFBUSxFQUFFQSxRQUFRLENBQUMxQztRQUFwQixDQUFkOztRQUNBZSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFJLENBQUNyRCxLQUFMLENBQVcrRSxRQUFYLENBQW9CNUUsT0FBaEM7TUFDSCxDQUhEO0lBSUg7OztXQUVELDhCQUFzQkUsUUFBdEIsRUFBZ0M7TUFDNUIsUUFBUUEsUUFBUjtRQUNJLEtBQUssUUFBTDtVQUFlLE9BQU8sWUFBUDs7UUFDZixLQUFLLFFBQUw7VUFBZSxPQUFPLE9BQVA7O1FBQ2YsS0FBSyxRQUFMO1VBQWUsT0FBTyxRQUFQOztRQUNmLEtBQUssV0FBTDtVQUFrQixPQUFPLFdBQVA7TUFKdEI7SUFNSDs7O1dBRUQsa0JBQVM7TUFBQTs7TUFDTCxvQkFDSSxzRkFDSSw0REFBQyxtREFBRDtRQUFNLFNBQVMsRUFBQyxpQkFBaEI7UUFBa0MsRUFBRSxFQUFDLGtCQUFyQztRQUNNLEtBQUssRUFBRTtVQUFDaUUsUUFBUSxFQUFFLFVBQVg7VUFBdUIsU0FBTyxPQUE5QjtVQUF1Q0MsS0FBSyxFQUFFO1FBQTlDO01BRGIsbUJBREosZUFHSTtRQUFTLFNBQVMsRUFBQztNQUFuQixnQkFDSTtRQUFLLFNBQVMsRUFBQztNQUFmLGdCQUNJO1FBQUssU0FBUyxFQUFDO01BQWYsZ0JBQ0k7UUFBSSxTQUFTLEVBQUM7TUFBZCx1QkFESixDQURKLGVBSUk7UUFBSyxTQUFTLEVBQUM7TUFBZixFQUpKLGVBS0k7UUFBSyxTQUFTLEVBQUU7TUFBaEIsR0FDSyxLQUFLdkUsS0FBTCxDQUFXK0UsUUFBWCxDQUFvQkUsR0FBcEIsQ0FBd0IsVUFBQUMsT0FBTztRQUFBLG9CQUM1QjtVQUFLLFNBQVMsRUFBQyxNQUFmO1VBQXNCLEdBQUcsRUFBRUEsT0FBTyxDQUFDQyxPQUFuQztVQUNLLEtBQUssRUFBRTtZQUFDQyxVQUFVLEVBQUUsUUFBYjtZQUF1QkMsS0FBSyxFQUFFLFFBQTlCO1lBQXdDQyxPQUFPLEVBQUU7VUFBakQ7UUFEWixnQkFFSTtVQUFLLFNBQVMsRUFBQztRQUFmLGdCQUNJO1VBQUssU0FBUyxFQUFDO1FBQWYsZ0JBQ0k7VUFBSyxTQUFTLEVBQUM7UUFBZixnQkFBaUMsb0ZBQUcscUdBQUgsT0FBdUNKLE9BQU8sQ0FBQ0MsT0FBL0MsTUFBakMsQ0FESixlQUVJO1VBQ0ksU0FBUyxFQUFDO1FBRGQsZ0JBQ2tDLGlHQURsQyxPQUMrRCxNQUFJLENBQUN4RCxvQkFBTCxDQUEwQnVELE9BQU8sQ0FBQzdFLFFBQWxDLENBRC9ELENBRkosZUFJSTtVQUNJLFNBQVMsRUFBQztRQURkLGdCQUNtQyxpR0FEbkMsT0FDNkQ2RSxPQUFPLENBQUM5RSxTQURyRSxDQUpKLGVBTUk7VUFDSSxTQUFTLEVBQUM7UUFEZCxnQkFDbUMsNEZBRG5DLE9BQzhEOEUsT0FBTyxDQUFDakYsU0FEdEUsQ0FOSixlQVFJO1VBQ0ksU0FBUyxFQUFDO1FBRGQsZ0JBQ2lDLDJGQURqQyxPQUMyRGlGLE9BQU8sQ0FBQy9FLE9BRG5FLENBUkosZUFVSTtVQUNJLFNBQVMsRUFBQztRQURkLGdCQUMrQixnR0FEL0IsT0FDOEQrRSxPQUFPLENBQUNuQyxhQUR0RSxXQVZKLGVBV2dHLHVFQVhoRyxlQVlJO1VBQU0sU0FBUyxFQUFDO1FBQWhCLGdCQUF1Qyw2RkFBdkMsQ0FaSixlQVk0RSx1RUFaNUUsZUFhSTtVQUFNLEVBQUUsRUFBQyxNQUFUO1VBQWdCLFNBQVMsRUFBQztRQUExQixnQkFBeUMsa0ZBQXpDLEVBQXlEbUMsT0FBTyxDQUFDM0UsSUFBakUsQ0FiSixlQWNJO1VBQU0sRUFBRSxFQUFDLE9BQVQ7VUFBaUIsU0FBUyxFQUFDO1FBQTNCLGdCQUEyQyxpR0FBM0MsRUFBdUUyRSxPQUFPLENBQUMxRSxLQUEvRSxDQWRKLGVBZUk7VUFBTSxFQUFFLEVBQUMsT0FBVDtVQUFpQixTQUFTLEVBQUM7UUFBM0IsZ0JBQTJDLGdHQUEzQyxFQUFtRTBFLE9BQU8sQ0FBQ3pFLEtBQTNFLENBZkosQ0FESixlQWtCSTtVQUFLLFNBQVMsRUFBQztRQUFmLEVBbEJKLENBRkosQ0FENEI7TUFBQSxDQUEvQixDQURMLENBTEosQ0FESixDQUhKLENBREo7SUF5Q0g7Ozs7RUFyRWlDbEI7Ozs7Ozs7Ozs7Ozs7QUNqQnRDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9ib29raW5nQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9ib29raW5nc0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC4vc3JjL2pzL2FwcC5qc1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0IEJvb2tpbmdzTGlzdCBmcm9tICcuL2NvbXBvbmVudHMvYm9va2luZ3NMaXN0JztcbmltcG9ydCB7QnJvd3NlclJvdXRlciwgUm91dGVzLCBSb3V0ZSwgUmVkaXJlY3QsIE5hdmlnYXRlfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEJvb2tpbmdDcmVhdG9yIGZyb20gXCIuL2NvbXBvbmVudHMvYm9va2luZ0NyZWF0b3JcIjtcblxuUmVhY3RET00ucmVuZGVyKFxuICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYm9va2luZ3NcIiBlbGVtZW50PXs8Qm9va2luZ3NMaXN0Lz59IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9ib29raW5ncy9jcmVhdGVcIiBlbGVtZW50PXs8Qm9va2luZ0NyZWF0b3IvPn0vPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCJlbGVtZW50PXs8TmF2aWdhdGUgdG89XCIvYm9va2luZ3NcIiByZXBsYWNlIC8+fS8+XG4gICAgICAgIDwvUm91dGVzPlxuICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgICAsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJyZWFjdC1kYXRlcGlja2VyXCI7XHJcbmltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzc1wiO1xyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IGpzb24gPSByZXF1aXJlKCcuLi9jb25maWcvY29uZi5qc29uJyk7XHJcblxyXG5jb25zdCBCQVNFX1VSTCA9IGpzb24uQkFTRV9VUkwucHJvZHVjdGlvbiAvLyBjaGFuZ2UgdG8gbG9jYWwgaWYgbmVlZGVkXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb29raW5nQ3JlYXRvciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgbnVtR3Vlc3RzOiAxLFxyXG4gICAgICAgICAgICByb29tVHlwZTogXCJcIixcclxuICAgICAgICAgICAgcm9vbXM6IFtdLFxyXG4gICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgICAgcGhvbmU6IFwiXCIsXHJcbiAgICAgICAgICAgIGJvb2tpbmdQcmljZTogMCxcclxuICAgICAgICAgICAgcm9vbXNBdmFpbGFibGVDaGVjazogZmFsc2UsXHJcbiAgICAgICAgICAgIGNhbGN1bGF0ZWRDaGVjazogZmFsc2UsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXJ0RGF0ZShkYXRlKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlQXZhaWxhYmxlUm9vbXMoKTtcclxuICAgICAgICB0aGlzLmhpZGVDb250YWN0RGF0YSgpO1xyXG5cclxuICAgICAgICBpZiAoZGF0ZSA+IHRoaXMuc3RhdGUuZW5kRGF0ZSkge1xyXG4gICAgICAgICAgICBkYXRlID0gdGhpcy5zdGF0ZS5lbmREYXRlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGF0ZSA8IERhdGUubm93KSB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc3RhcnREYXRlOiBkYXRlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHNldEVuZERhdGUoZGF0ZSkge1xyXG4gICAgICAgIHRoaXMuaGlkZUF2YWlsYWJsZVJvb21zKCk7XHJcbiAgICAgICAgdGhpcy5oaWRlQ29udGFjdERhdGEoKTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGUgPCB0aGlzLnN0YXRlLnN0YXJ0RGF0ZSkge1xyXG4gICAgICAgICAgICBkYXRlID0gdGhpcy5zdGF0ZS5zdGFydERhdGVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkYXRlIDwgRGF0ZS5ub3cpIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBlbmREYXRlOiBkYXRlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGdldFJvb21UeXBlVG9EaXNwbGF5KHJvb21UeXBlKSB7XHJcbiAgICAgICAgc3dpdGNoIChyb29tVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdTaW5nbGUnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdJbmRpdmlkdWFsJztcclxuICAgICAgICAgICAgY2FzZSAnRG91YmxlJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnRG9ibGUnO1xyXG4gICAgICAgICAgICBjYXNlICdUcmlwbGUnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdUcmlwbGUnO1xyXG4gICAgICAgICAgICBjYXNlICdRdWFkcnVwbGUnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdDdcOhZHJ1cGxlJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUNvbnRhY3REYXRhKCkge1xyXG4gICAgICAgIGxldCBjb250YWN0RmllbGRzID0gW1wibmFtZVwiLCBcImVtYWlsXCIsIFwicGhvbmVcIl07XHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3REYXRhXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG5cclxuICAgICAgICB3aGlsZSAoaSA8IGNvbnRhY3RGaWVsZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhY3RGaWVsZHNbaV0pLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWN0RmllbGRzW2ldICsgXCJMXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICBpID0gaSArIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZUJvb2tpbmdcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUF2YWlsYWJsZVJvb21zKCkge1xyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICBsZXQgcm9vbVR5cGVzID0gWydRdWFkcnVwbGUnLCAnVHJpcGxlJywgJ0RvdWJsZScsICdTaW5nbGUnXTtcclxuXHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vbXNBdmFpbGFibGVUaXRsZVwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuXHJcbiAgICAgICAgd2hpbGUgKGkgPCA0KSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJvb21UeXBlc1tpXS50b0xvd2VyQ2FzZSgpKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyb29tVHlwZXNbaV0udG9Mb3dlckNhc2UoKSkuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJvb21UeXBlc1tpXS50b0xvd2VyQ2FzZSgpICsgXCJMXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyb29tVHlwZXNbaV0udG9Mb3dlckNhc2UoKSArIFwiTFwiKS5pbm5lclRleHQgPSB0aGlzLmdldFJvb21UeXBlVG9EaXNwbGF5KHJvb21UeXBlc1tpXSkgKyBcIjogXCI7XHJcbiAgICAgICAgICAgIGkgPSBpICsgMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9va2luZ1ByaWNlXCIpLmlubmVySFRNTCA9IFwiXCJcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvb2tpbmdQcmljZVwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBdmFpbGFibGVSb29tcygpIHtcclxuICAgICAgICBsZXQgc3RhcnREYXRlU3RyaW5nID0gdGhpcy5zdGF0ZS5zdGFydERhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgICAgIGxldCBlbmREYXRlU3RyaW5nID0gdGhpcy5zdGF0ZS5lbmREYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuXHJcbiAgICAgICAgdGhpcy5oaWRlQXZhaWxhYmxlUm9vbXMoKVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgcm9vbXM6IFtdXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgbGV0IHJvb21UeXBlcyA9IFsnUVVBRFJVUExFJywgJ1RSSVBMRScsICdET1VCTEUnLCAnU0lOR0xFJ107XHJcbiAgICAgICAgbGV0IHByb21pc2VzID0gW11cclxuICAgICAgICB3aGlsZSAoaSA8IDUgLSB0aGlzLnN0YXRlLm51bUd1ZXN0cykge1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKGF4aW9zLmdldChCQVNFX1VSTCArICcvYXBpL3Jvb21zLWF2YWlsYWJsZT9zdGFydERhdGU9JyArXHJcbiAgICAgICAgICAgICAgICAnJyArIHN0YXJ0RGF0ZVN0cmluZyArXHJcbiAgICAgICAgICAgICAgICAnJmVuZERhdGU9JyArIGVuZERhdGVTdHJpbmcgK1xyXG4gICAgICAgICAgICAgICAgJyZyb29tVHlwZT0nICsgcm9vbVR5cGVzW2ldKS50aGVuKHJvb21zID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucm9vbXMucHVzaChbcm9vbXMuZGF0YS5yb29tc19hdmFpbGFibGUsIHJvb21zLmRhdGEucm9vbVR5cGVdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Jvb21zOiB0aGlzLnN0YXRlLnJvb21zfSk7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgaSA9IGkgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigocm9vbSkgPT4ge1xyXG4gICAgICAgICAgICBpID0gMFxyXG4gICAgICAgICAgICBsZXQgcm9vbVR5cGUgPSAnJztcclxuXHJcbiAgICAgICAgICAgIHdoaWxlIChpIDwgNSAtIHRoaXMuc3RhdGUubnVtR3Vlc3RzKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUucm9vbXNbaV1bMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdTSU5HTEUnOiByb29tVHlwZSA9ICdzaW5nbGUnOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdET1VCTEUnOiByb29tVHlwZSA9ICdkb3VibGUnOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdUUklQTEUnOiByb29tVHlwZSA9ICd0cmlwbGUnOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdRVUFEUlVQTEUnOiByb29tVHlwZSA9ICdxdWFkcnVwbGUnOyBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5yb29tc1tpXVswXSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJvb21UeXBlKS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocm9vbVR5cGUpLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJvb21UeXBlICsgXCJMXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJvb21UeXBlICsgXCJMXCIpLmlubmVySFRNTCArPSB0aGlzLnN0YXRlLnJvb21zW2ldWzBdICsgXCIgaGFiaXRhY2lvbmVzIGRpc3BvbmlibGVzXCI7XHJcbiAgICAgICAgICAgICAgICBpID0gaSArIDE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb21zQXZhaWxhYmxlVGl0bGVcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdGVkTnVtR3Vlc3RzKCkge1xyXG4gICAgICAgIHRoaXMuaGlkZUF2YWlsYWJsZVJvb21zKCk7XHJcbiAgICAgICAgdGhpcy5oaWRlQ29udGFjdERhdGEoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG51bUd1ZXN0czogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ251bUd1ZXN0cycpLnNlbGVjdGVkSW5kZXggKyAxXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHJvb21UeXBlcyA9IFsnUVVBRFJVUExFJywgJ1RSSVBMRScsICdET1VCTEUnLCAnU0lOR0xFJ107XHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIHdoaWxlIChpIDwgNSAtIHRoaXMuc3RhdGUubnVtR3Vlc3RzKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJvb21UeXBlc1tpXS50b0xvd2VyQ2FzZSgpKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocm9vbVR5cGVzW2ldLnRvTG93ZXJDYXNlKCkgKyBcIkxcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgIGkgPSBpICsgMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vbXNBdmFpbGFibGVUaXRsZVwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCb29raW5nUHJpY2UoKSB7XHJcbiAgICAgICAgbGV0IHN0YXJ0RGF0ZVN0cmluZyA9IHRoaXMuc3RhdGUuc3RhcnREYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgICAgICBsZXQgZW5kRGF0ZVN0cmluZyA9IHRoaXMuc3RhdGUuZW5kRGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcblxyXG4gICAgICAgIGxldCByb29tVHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJyb29tVHlwZXNcIl06Y2hlY2tlZCcpLnZhbHVlLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHJvb21UeXBlOiByb29tVHlwZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXhpb3MuZ2V0KEJBU0VfVVJMICsgJy9hcGkvYm9va2luZ3MvcHJpY2U/c3RhcnREYXRlPScgK1xyXG4gICAgICAgICAgICAnJyArIHN0YXJ0RGF0ZVN0cmluZyArXHJcbiAgICAgICAgICAgICcmZW5kRGF0ZT0nICsgZW5kRGF0ZVN0cmluZyArXHJcbiAgICAgICAgICAgICcmcm9vbVR5cGU9JyArIHJvb21UeXBlKS50aGVuKHByaWNlcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Jvb2tpbmdQcmljZTogcHJpY2VzLmRhdGEuYm9va2luZ1RvdGFsc30pO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvb2tpbmdQcmljZVwiKS5pbm5lckhUTUwgPSBcIlByZWNpbyB0b3RhbDogXCIgKyB0aGlzLnN0YXRlLmJvb2tpbmdQcmljZSArIFwi4oKsXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9va2luZ1ByaWNlXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmRpc3BsYXlDb250YWN0RGF0YUZvcm0oKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVCb29raW5nKCkge1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVDaGVja1wiKS5pbm5lclRleHQgPSBcIlwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxDaGVja1wiKS5pbm5lclRleHQgPSBcIlwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGhvbmVDaGVja1wiKS5pbm5lclRleHQgPSBcIlwiO1xyXG5cclxuICAgICAgICBsZXQgbmFtZU9rID0gdHJ1ZTtcclxuICAgICAgICBsZXQgZW1haWxPayA9IHRydWU7XHJcbiAgICAgICAgbGV0IHBob25lT2sgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5uYW1lID09IFwiXCIpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lQ2hlY2tcIikuaW5uZXJUZXh0ID0gXCJFc3RlIGNhbXBvIGVzdGEgdmFjw61vLiBQb3IgZmF2b3IsIHJlbGzDqW5hbG9cIjtcclxuICAgICAgICAgICAgbmFtZU9rID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5uYW1lLmxlbmd0aCA+IDUwKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZUNoZWNrXCIpLmlubmVyVGV4dCA9IFwiRXN0ZSBjYW1wbyB0aWVuZSB1biBtw6F4aW1vIGRlIDUwIGNhcmFjdGVyZXMuXCI7XHJcbiAgICAgICAgICAgIG5hbWVPayA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZW1haWwgPT0gXCJcIikge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsQ2hlY2tcIikuaW5uZXJUZXh0ID0gXCJFc3RlIGNhbXBvIGVzdGEgdmFjw61vLiBQb3IgZmF2b3IsIHJlbGzDqW5hbG9cIjtcclxuICAgICAgICAgICAgZW1haWxPayA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZW1haWwubGVuZ3RoID4gNTApIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbENoZWNrXCIpLmlubmVyVGV4dCA9IFwiRXN0ZSBjYW1wbyB0aWVuZSB1biBtw6F4aW1vIGRlIDUwIGNhcmFjdGVyZXMuXCI7XHJcbiAgICAgICAgICAgIGVtYWlsT2sgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnBob25lID09IFwiXCIpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaG9uZUNoZWNrXCIpLmlubmVyVGV4dCA9IFwiRXN0ZSBjYW1wbyBlc3RhIHZhY8Otby4gUG9yIGZhdm9yLCByZWxsw6luYWxvXCI7XHJcbiAgICAgICAgICAgIHBob25lT2sgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnBob25lLmxlbmd0aCA+IDEwKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZUNoZWNrXCIpLmlubmVyVGV4dCA9IFwiRXN0ZSBjYW1wbyB0aWVuZSB1biBtw6F4aW1vIGRlIDEwIGNhcmFjdGVyZXMuXCI7XHJcbiAgICAgICAgICAgIHBob25lT2sgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbmFtZU9rIHx8ICFlbWFpbE9rIHx8ICFwaG9uZU9rKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5hbWVPaywgZW1haWxPaywgcGhvbmVPayk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF4aW9zLnBvc3QoQkFTRV9VUkwgKyAnL2FwaS9ib29raW5ncycsIHtcclxuICAgICAgICAgICAgc3RhcnREYXRlOiB0aGlzLnN0YXRlLnN0YXJ0RGF0ZSxcclxuICAgICAgICAgICAgZW5kRGF0ZTogdGhpcy5zdGF0ZS5lbmREYXRlLFxyXG4gICAgICAgICAgICByb29tVHlwZTogdGhpcy5zdGF0ZS5yb29tVHlwZSxcclxuICAgICAgICAgICAgbnVtR3Vlc3RzOiB0aGlzLnN0YXRlLm51bUd1ZXN0cyxcclxuICAgICAgICAgICAgYm9va2luZ1RvdGFsczogdGhpcy5zdGF0ZS5ib29raW5nUHJpY2UsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmFtZSxcclxuICAgICAgICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXHJcbiAgICAgICAgICAgIHBob25lOiB0aGlzLnN0YXRlLnBob25lXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBuZXcgU3dhbChcIkdlbmlhbCFcIiwgXCIsIFNlIGhhIGNyZWFkbyBsYSByZXNlcnZhIGNvcnJlY3RhbWVudGUuXCIsIFwic3VjY2Vzc1wiKS50aGVuKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9ICcuLi8nXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlDb250YWN0RGF0YUZvcm0oKSB7XHJcbiAgICAgICAgbGV0IGNvbnRhY3RGaWVsZHMgPSBbXCJuYW1lXCIsIFwiZW1haWxcIiwgXCJwaG9uZVwiXTtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdERhdGFcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG5cclxuICAgICAgICB3aGlsZSAoaSA8IGNvbnRhY3RGaWVsZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhY3RGaWVsZHNbaV0pLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFjdEZpZWxkc1tpXSArIFwiTFwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgICAgIGkgPSBpICsgMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlQm9va2luZ1wiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoYW5nZShmaWVsZCwgZXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGZpZWxkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJuYW1lXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtuYW1lOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZW1haWxcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2VtYWlsOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicGhvbmVcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Bob25lOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXctYm9va2luZy1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj48c3Bhbj5OdWV2YSByZXNlcnZhPC9zcGFuPjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmdzLWxpc3QtdGl0bGUgbXQtM1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgRmVjaGEgZGUgZW50cmFkYVxyXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwiZGQvTU0veXl5eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuc3RhcnREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXJ0RGF0ZShkYXRlKVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgbWluRGF0ZT17bmV3IERhdGUoKX0vPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29raW5ncy1saXN0LXRpdGxlIG10LTNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIEZlY2hhIGRlIHNhbGlkYVxyXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwiZGQvTU0veXl5eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuZW5kRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFbmREYXRlKGRhdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBtaW5EYXRlPXtuZXcgRGF0ZSgpfS8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmdzLWxpc3QtdGl0bGUgbXQtNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgTsK6IGRlIGh1w6lzcGVkZXNcclxuICAgICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e3RoaXMuc2VsZWN0ZWROdW1HdWVzdHMuYmluZCh0aGlzKX0gbmFtZT1cIm51bUd1ZXN0c1wiIGlkPVwibnVtR3Vlc3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj4xPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj4yPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj4zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj40PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzaG93LWF2YWlsYWJsZS1yb29tc1wiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZ2V0QXZhaWxhYmxlUm9vbXMuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgID5WZXIgaGFiaXRhY2lvbmVzIGRpc3BvbmlibGVzXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZ3MtbGlzdC10aXRsZSBtdC0zXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBpZD1cInJvb21zQXZhaWxhYmxlVGl0bGVcIiBzdHlsZT17e3Zpc2liaWxpdHk6IFwiaGlkZGVuXCJ9fT5IYWJpdGFjaW9uZXMgZGlzcG9uaWJsZXM6IDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZ3MtbGlzdC10aXRsZSBtdC0xXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJzaW5nbGVcIiBuYW1lPVwicm9vbVR5cGVzXCIgdmFsdWU9XCJTaW5nbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZ2V0Qm9va2luZ1ByaWNlLmJpbmQodGhpcyl9IHN0eWxlPXt7dmlzaWJpbGl0eTogXCJoaWRkZW5cIn19Lz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2luZ2xlXCIgaWQ9XCJzaW5nbGVMXCIgc3R5bGU9e3t2aXNpYmlsaXR5OiBcImhpZGRlblwifX0+SW5kaXZpZHVhbCA8L2xhYmVsPjxici8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJkb3VibGVcIiBuYW1lPVwicm9vbVR5cGVzXCIgdmFsdWU9XCJEb3VibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZ2V0Qm9va2luZ1ByaWNlLmJpbmQodGhpcyl9IHN0eWxlPXt7dmlzaWJpbGl0eTogXCJoaWRkZW5cIn19Lz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZG91YmxlXCIgaWQ9XCJkb3VibGVMXCIgc3R5bGU9e3t2aXNpYmlsaXR5OiBcImhpZGRlblwifX0+RG9ibGUgPC9sYWJlbD48YnIvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwidHJpcGxlXCIgbmFtZT1cInJvb21UeXBlc1wiIHZhbHVlPVwiVHJpcGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmdldEJvb2tpbmdQcmljZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dmlzaWJpbGl0eTogXCJoaWRkZW5cIn19Lz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidHJpcGxlXCIgaWQ9XCJ0cmlwbGVMXCIgc3R5bGU9e3t2aXNpYmlsaXR5OiBcImhpZGRlblwifX0+VHJpcGxlIDwvbGFiZWw+PGJyLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInF1YWRydXBsZVwiIG5hbWU9XCJyb29tVHlwZXNcIiB2YWx1ZT1cIlF1YWRydXBsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5nZXRCb29raW5nUHJpY2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Zpc2liaWxpdHk6IFwiaGlkZGVuXCJ9fS8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInF1YWRydXBsZVwiIGlkPVwicXVhZHJ1cGxlTFwiIHN0eWxlPXt7dmlzaWJpbGl0eTogXCJoaWRkZW5cIn19PkN1YWRydXBsZSA8L2xhYmVsPjxici8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmdzLWxpc3QtdGl0bGUgbXQtMlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgaWQ9XCJib29raW5nUHJpY2VcIiBzdHlsZT17e3Zpc2liaWxpdHk6IFwiaGlkZGVuXCJ9fT5QcmVjaW8gdG90YWw6IDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZ3MtbGlzdC10aXRsZSBtdC0zXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBpZD1cImNvbnRhY3REYXRhXCIgc3R5bGU9e3t2aXNpYmlsaXR5OiBcImhpZGRlblwifX0+RGF0b3MgZGUgY29udGFjdG8gcGFyYSBsYSByZXNlcnZhOiA8L3A+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBpZD1cIm5hbWVMXCIgc3R5bGU9e3t2aXNpYmlsaXR5OiBcImhpZGRlblwifX0+Tm9tYnJlIHkgQXBlbGxpZG9zOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBuYW1lPVwibmFtZVwiIG9uQ2hhbmdlPXsoZXZ0KSA9PiB0aGlzLmhhbmRsZUNoYW5nZSgnbmFtZScsIGV2dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t2aXNpYmlsaXR5OiBcImhpZGRlblwifX0vPjxici8+XHJcbiAgICAgICAgICAgICAgICA8cCBpZD1cIm5hbWVDaGVja1wiPjwvcD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBpZD1cImVtYWlsTFwiIHN0eWxlPXt7dmlzaWJpbGl0eTogXCJoaWRkZW5cIn19PkNvcnJlbyBlbGVjdHLDs25pY286PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBvbkNoYW5nZT17KGV2dCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoJ2VtYWlsJywgZXZ0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Zpc2liaWxpdHk6IFwiaGlkZGVuXCJ9fS8+PGJyLz5cclxuICAgICAgICAgICAgICAgIDxwIGlkPVwiZW1haWxDaGVja1wiPjwvcD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGhvbmVcIiBpZD1cInBob25lTFwiIHN0eWxlPXt7dmlzaWJpbGl0eTogXCJoaWRkZW5cIn19Pk7CuiBkZSB0ZWzDqWZvbm8vbcOzdmlsOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInBob25lXCIgbmFtZT1cInBob25lXCIgb25DaGFuZ2U9eyhldnQpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKCdwaG9uZScsIGV2dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t2aXNpYmlsaXR5OiBcImhpZGRlblwifX0vPjxici8+XHJcbiAgICAgICAgICAgICAgICA8cCBpZD1cInBob25lQ2hlY2tcIj48L3A+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY3JlYXRlQm9va2luZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IFwicmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBcIjE1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCItNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogXCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNyZWF0ZUJvb2tpbmcuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgID5DcmVhciByZXNlcnZhXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLFxyXG4gICAgUmVkaXJlY3QsXHJcbiAgICBTd2l0Y2gsXHJcbiAgICBSb3V0ZSxcclxuICAgIExpbmssIFJvdXRlc1xyXG59IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBCb29raW5nQ3JlYXRvciBmcm9tIFwiLi9ib29raW5nQ3JlYXRvclwiO1xyXG5cclxuY29uc3QganNvbiA9IHJlcXVpcmUoJy4uL2NvbmZpZy9jb25mLmpzb24nKTtcclxuXHJcbmNvbnN0IEJBU0VfVVJMID0ganNvbi5CQVNFX1VSTC5wcm9kdWN0aW9uIC8vIGNoYW5nZSB0byBsb2NhbCBpZiBuZWVkZWRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tpbmdzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7Ym9va2luZ3M6IFtdfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuZ2V0Qm9va2luZ3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCb29raW5ncygpIHtcclxuICAgICAgICBheGlvcy5nZXQoQkFTRV9VUkwgKyAnL2FwaS9ib29raW5ncycpLnRoZW4oYm9va2luZ3MgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtib29raW5nczogYm9va2luZ3MuZGF0YX0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuYm9va2luZ3MuZW5kRGF0ZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBnZXRSb29tVHlwZVRvRGlzcGxheSAocm9vbVR5cGUpIHtcclxuICAgICAgICBzd2l0Y2ggKHJvb21UeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ1NJTkdMRSc6IHJldHVybiAnSW5kaXZpZHVhbCc7XHJcbiAgICAgICAgICAgIGNhc2UgJ0RPVUJMRSc6IHJldHVybiAnRG9ibGUnO1xyXG4gICAgICAgICAgICBjYXNlICdUUklQTEUnOiByZXR1cm4gJ1RyaXBsZSc7XHJcbiAgICAgICAgICAgIGNhc2UgJ1FVQURSVVBMRSc6IHJldHVybiAnQ3XDoWRydXBsZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdG89XCIvYm9va2luZ3MvY3JlYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246IFwicmVsYXRpdmVcIiwgZmxvYXQ6IFwicmlnaHRcIiwgcmlnaHQ6IFwiMjAwcHhcIn19PkNyZWFyIHJlc2VydmE8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyb3ctc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZ3MtbGlzdC10aXRsZSBtdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5MaXN0YSBkZSByZXNlcnZhczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmdzLWxpc3QtdGl0bGUgbXQtNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3Jvdyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYm9va2luZ3MubWFwKGJvb2tpbmcgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTNcIiBrZXk9e2Jvb2tpbmcubG9jYXRvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZDogXCJibGFjaztcIiwgY29sb3I6IFwid2hpdGU7XCIsIHBhZGRpbmc6IFwiMjBweDtcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZy1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29raW5nLWxvY2F0b3JcIj48cD48Yj5Mb2NhbGl6YWRvciBkZSBsYSByZXNlcnZhOiA8L2I+IHtib29raW5nLmxvY2F0b3J9IDwvcD48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib29raW5nLXJvb20tdHlwZVwiPjxiPlRpcG8gZGUgaGFiaXRhY2nDs246IDwvYj4ge3RoaXMuZ2V0Um9vbVR5cGVUb0Rpc3BsYXkoYm9va2luZy5yb29tVHlwZSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvb2tpbmctbnVtLWd1ZXN0c1wiPjxiPk7CuiBkZSBodcOpc3BlZGVzOiA8L2I+IHtib29raW5nLm51bUd1ZXN0c308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9va2luZy1zdGFydC1kYXRlXCI+PGI+RmVjaGEgZGUgZW50cmFkYTogPC9iPiB7Ym9va2luZy5zdGFydERhdGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvb2tpbmctZW5kLWRhdGVcIj48Yj5GZWNoYSBkZSBzYWxpZGE6IDwvYj4ge2Jvb2tpbmcuZW5kRGF0ZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9va2luZy10b3RhbHNcIj48Yj5QcmVjaW8gZGUgbGEgcmVzZXJ2YTogPC9iPiB7Ym9va2luZy5ib29raW5nVG90YWxzfeKCrDwvc3Bhbj48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJvb2tpbmctY29udGFjdC1kYXRhXCI+PGI+RGF0b3MgZGUgY29udGFjdG86IDwvYj48L3NwYW4+PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cIm5hbWVcIiBjbGFzc05hbWU9XCJib29raW5nLW5hbWVcIj48Yj5Ob21icmU6IDwvYj57Ym9va2luZy5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYm9va2luZy1lbWFpbFwiPjxiPkNvcnJlbyBlbGVjdHLDs25pY286IDwvYj57Ym9va2luZy5lbWFpbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJwaG9uZVwiIGNsYXNzTmFtZT1cImJvb2tpbmctcGhvbmVcIj48Yj5OwrogZGUgdGVsw6lmb25vOiA8L2I+e2Jvb2tpbmcucGhvbmV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmdzLWxpc3QtdGl0bGUgbXQtNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJCb29raW5nc0xpc3QiLCJCcm93c2VyUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJSZWRpcmVjdCIsIk5hdmlnYXRlIiwiQm9va2luZ0NyZWF0b3IiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiQ29tcG9uZW50IiwiRGF0ZVBpY2tlciIsIlN3YWwiLCJheGlvcyIsImpzb24iLCJyZXF1aXJlIiwiQkFTRV9VUkwiLCJwcm9kdWN0aW9uIiwicHJvcHMiLCJzdGF0ZSIsInN0YXJ0RGF0ZSIsIkRhdGUiLCJlbmREYXRlIiwibnVtR3Vlc3RzIiwicm9vbVR5cGUiLCJyb29tcyIsIm5hbWUiLCJlbWFpbCIsInBob25lIiwiYm9va2luZ1ByaWNlIiwicm9vbXNBdmFpbGFibGVDaGVjayIsImNhbGN1bGF0ZWRDaGVjayIsImRhdGUiLCJoaWRlQXZhaWxhYmxlUm9vbXMiLCJoaWRlQ29udGFjdERhdGEiLCJub3ciLCJzZXRTdGF0ZSIsImNvbnRhY3RGaWVsZHMiLCJpIiwic3R5bGUiLCJ2aXNpYmlsaXR5IiwibGVuZ3RoIiwicm9vbVR5cGVzIiwidG9Mb3dlckNhc2UiLCJkaXNhYmxlZCIsImlubmVyVGV4dCIsImdldFJvb21UeXBlVG9EaXNwbGF5IiwiaW5uZXJIVE1MIiwic3RhcnREYXRlU3RyaW5nIiwidG9JU09TdHJpbmciLCJzcGxpdCIsImVuZERhdGVTdHJpbmciLCJwcm9taXNlcyIsInB1c2giLCJnZXQiLCJ0aGVuIiwiZGF0YSIsInJvb21zX2F2YWlsYWJsZSIsIlByb21pc2UiLCJhbGwiLCJyb29tIiwic2VsZWN0ZWRJbmRleCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsInRvVXBwZXJDYXNlIiwicHJpY2VzIiwiYm9va2luZ1RvdGFscyIsImRpc3BsYXlDb250YWN0RGF0YUZvcm0iLCJuYW1lT2siLCJlbWFpbE9rIiwicGhvbmVPayIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwicmVzcG9uc2UiLCJsb2NhdGlvbiIsImhyZWYiLCJlcnJvciIsImZpZWxkIiwiZXZlbnQiLCJ0YXJnZXQiLCJzZXRTdGFydERhdGUiLCJzZXRFbmREYXRlIiwic2VsZWN0ZWROdW1HdWVzdHMiLCJiaW5kIiwiZ2V0QXZhaWxhYmxlUm9vbXMiLCJnZXRCb29raW5nUHJpY2UiLCJldnQiLCJoYW5kbGVDaGFuZ2UiLCJwb3NpdGlvbiIsInJpZ2h0IiwidG9wIiwiY3JlYXRlQm9va2luZyIsIlByb3BUeXBlcyIsIlJvdXRlciIsIlN3aXRjaCIsIkxpbmsiLCJCb29raW5ncyIsImJvb2tpbmdzIiwiZ2V0Qm9va2luZ3MiLCJtYXAiLCJib29raW5nIiwibG9jYXRvciIsImJhY2tncm91bmQiLCJjb2xvciIsInBhZGRpbmciXSwic291cmNlUm9vdCI6IiJ9