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

module.exports = JSON.parse('{"BASE_URL":{"local":"http://localhost:8000","prod":"https://super-bookings-app.herokuapp.com"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_map_js-node_modules-9f7aca"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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M0MsRUFBbUUwRSxPQUFPLENBQUN6RSxLQUEzRSxDQWZKLENBREosZUFrQkk7VUFBSyxTQUFTLEVBQUM7UUFBZixFQWxCSixDQUZKLENBRDRCO01BQUEsQ0FBL0IsQ0FETCxDQUxKLENBREosQ0FISixDQURKO0lBeUNIOzs7O0VBckVpQ2xCOzs7Ozs7Ozs7Ozs7O0FDakJ0QyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYm9va2luZ0NyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYm9va2luZ3NMaXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuL3NyYy9qcy9hcHAuanNcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCBCb29raW5nc0xpc3QgZnJvbSAnLi9jb21wb25lbnRzL2Jvb2tpbmdzTGlzdCc7XG5pbXBvcnQge0Jyb3dzZXJSb3V0ZXIsIFJvdXRlcywgUm91dGUsIFJlZGlyZWN0LCBOYXZpZ2F0ZX0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBCb29raW5nQ3JlYXRvciBmcm9tIFwiLi9jb21wb25lbnRzL2Jvb2tpbmdDcmVhdG9yXCI7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2Jvb2tpbmdzXCIgZWxlbWVudD17PEJvb2tpbmdzTGlzdC8+fSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYm9va2luZ3MvY3JlYXRlXCIgZWxlbWVudD17PEJvb2tpbmdDcmVhdG9yLz59Lz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiZWxlbWVudD17PE5hdmlnYXRlIHRvPVwiL2Jvb2tpbmdzXCIgcmVwbGFjZSAvPn0vPlxuICAgICAgICA8L1JvdXRlcz5cbiAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4gICAgLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwicmVhY3QtZGF0ZXBpY2tlclwiO1xyXG5pbXBvcnQgXCJyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5jc3NcIjtcclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBqc29uID0gcmVxdWlyZSgnLi4vY29uZmlnL2NvbmYuanNvbicpO1xyXG5cclxuY29uc3QgQkFTRV9VUkwgPSBqc29uLkJBU0VfVVJMLnByb2QgLy8gY2hhbmdlIHRvIGxvY2FsIGlmIG5lZWRlZFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9va2luZ0NyZWF0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgIG51bUd1ZXN0czogMSxcclxuICAgICAgICAgICAgcm9vbVR5cGU6IFwiXCIsXHJcbiAgICAgICAgICAgIHJvb21zOiBbXSxcclxuICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgIHBob25lOiBcIlwiLFxyXG4gICAgICAgICAgICBib29raW5nUHJpY2U6IDAsXHJcbiAgICAgICAgICAgIHJvb21zQXZhaWxhYmxlQ2hlY2s6IGZhbHNlLFxyXG4gICAgICAgICAgICBjYWxjdWxhdGVkQ2hlY2s6IGZhbHNlLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGFydERhdGUoZGF0ZSkge1xyXG4gICAgICAgIHRoaXMuaGlkZUF2YWlsYWJsZVJvb21zKCk7XHJcbiAgICAgICAgdGhpcy5oaWRlQ29udGFjdERhdGEoKTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGUgPiB0aGlzLnN0YXRlLmVuZERhdGUpIHtcclxuICAgICAgICAgICAgZGF0ZSA9IHRoaXMuc3RhdGUuZW5kRGF0ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRhdGUgPCBEYXRlLm5vdykge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogZGF0ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBzZXRFbmREYXRlKGRhdGUpIHtcclxuICAgICAgICB0aGlzLmhpZGVBdmFpbGFibGVSb29tcygpO1xyXG4gICAgICAgIHRoaXMuaGlkZUNvbnRhY3REYXRhKCk7XHJcblxyXG4gICAgICAgIGlmIChkYXRlIDwgdGhpcy5zdGF0ZS5zdGFydERhdGUpIHtcclxuICAgICAgICAgICAgZGF0ZSA9IHRoaXMuc3RhdGUuc3RhcnREYXRlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGF0ZSA8IERhdGUubm93KSB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZW5kRGF0ZTogZGF0ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBnZXRSb29tVHlwZVRvRGlzcGxheShyb29tVHlwZSkge1xyXG4gICAgICAgIHN3aXRjaCAocm9vbVR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnU2luZ2xlJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnSW5kaXZpZHVhbCc7XHJcbiAgICAgICAgICAgIGNhc2UgJ0RvdWJsZSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0RvYmxlJztcclxuICAgICAgICAgICAgY2FzZSAnVHJpcGxlJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnVHJpcGxlJztcclxuICAgICAgICAgICAgY2FzZSAnUXVhZHJ1cGxlJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnQ3XDoWRydXBsZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhpZGVDb250YWN0RGF0YSgpIHtcclxuICAgICAgICBsZXQgY29udGFjdEZpZWxkcyA9IFtcIm5hbWVcIiwgXCJlbWFpbFwiLCBcInBob25lXCJdO1xyXG4gICAgICAgIGxldCBpID0gMDtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0RGF0YVwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuXHJcbiAgICAgICAgd2hpbGUgKGkgPCBjb250YWN0RmllbGRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWN0RmllbGRzW2ldKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFjdEZpZWxkc1tpXSArIFwiTFwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgaSA9IGkgKyAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVCb29raW5nXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVBdmFpbGFibGVSb29tcygpIHtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgbGV0IHJvb21UeXBlcyA9IFsnUXVhZHJ1cGxlJywgJ1RyaXBsZScsICdEb3VibGUnLCAnU2luZ2xlJ107XHJcblxyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb21zQXZhaWxhYmxlVGl0bGVcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcblxyXG4gICAgICAgIHdoaWxlIChpIDwgNCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyb29tVHlwZXNbaV0udG9Mb3dlckNhc2UoKSkuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocm9vbVR5cGVzW2ldLnRvTG93ZXJDYXNlKCkpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyb29tVHlwZXNbaV0udG9Mb3dlckNhc2UoKSArIFwiTFwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocm9vbVR5cGVzW2ldLnRvTG93ZXJDYXNlKCkgKyBcIkxcIikuaW5uZXJUZXh0ID0gdGhpcy5nZXRSb29tVHlwZVRvRGlzcGxheShyb29tVHlwZXNbaV0pICsgXCI6IFwiO1xyXG4gICAgICAgICAgICBpID0gaSArIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvb2tpbmdQcmljZVwiKS5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib29raW5nUHJpY2VcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXZhaWxhYmxlUm9vbXMoKSB7XHJcbiAgICAgICAgbGV0IHN0YXJ0RGF0ZVN0cmluZyA9IHRoaXMuc3RhdGUuc3RhcnREYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgICAgICBsZXQgZW5kRGF0ZVN0cmluZyA9IHRoaXMuc3RhdGUuZW5kRGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcblxyXG4gICAgICAgIHRoaXMuaGlkZUF2YWlsYWJsZVJvb21zKClcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHJvb21zOiBbXVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIGxldCByb29tVHlwZXMgPSBbJ1FVQURSVVBMRScsICdUUklQTEUnLCAnRE9VQkxFJywgJ1NJTkdMRSddO1xyXG4gICAgICAgIGxldCBwcm9taXNlcyA9IFtdXHJcbiAgICAgICAgd2hpbGUgKGkgPCA1IC0gdGhpcy5zdGF0ZS5udW1HdWVzdHMpIHtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChheGlvcy5nZXQoQkFTRV9VUkwgKyAnL2FwaS9yb29tcy1hdmFpbGFibGU/c3RhcnREYXRlPScgK1xyXG4gICAgICAgICAgICAgICAgJycgKyBzdGFydERhdGVTdHJpbmcgK1xyXG4gICAgICAgICAgICAgICAgJyZlbmREYXRlPScgKyBlbmREYXRlU3RyaW5nICtcclxuICAgICAgICAgICAgICAgICcmcm9vbVR5cGU9JyArIHJvb21UeXBlc1tpXSkudGhlbihyb29tcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJvb21zLnB1c2goW3Jvb21zLmRhdGEucm9vbXNfYXZhaWxhYmxlLCByb29tcy5kYXRhLnJvb21UeXBlXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyb29tczogdGhpcy5zdGF0ZS5yb29tc30pO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIGkgPSBpICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKHJvb20pID0+IHtcclxuICAgICAgICAgICAgaSA9IDBcclxuICAgICAgICAgICAgbGV0IHJvb21UeXBlID0gJyc7XHJcblxyXG4gICAgICAgICAgICB3aGlsZSAoaSA8IDUgLSB0aGlzLnN0YXRlLm51bUd1ZXN0cykge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlLnJvb21zW2ldWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnU0lOR0xFJzogcm9vbVR5cGUgPSAnc2luZ2xlJzsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnRE9VQkxFJzogcm9vbVR5cGUgPSAnZG91YmxlJzsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnVFJJUExFJzogcm9vbVR5cGUgPSAndHJpcGxlJzsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnUVVBRFJVUExFJzogcm9vbVR5cGUgPSAncXVhZHJ1cGxlJzsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucm9vbXNbaV1bMF0gPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyb29tVHlwZSkuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJvb21UeXBlKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyb29tVHlwZSArIFwiTFwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyb29tVHlwZSArIFwiTFwiKS5pbm5lckhUTUwgKz0gdGhpcy5zdGF0ZS5yb29tc1tpXVswXSArIFwiIGhhYml0YWNpb25lcyBkaXNwb25pYmxlc1wiO1xyXG4gICAgICAgICAgICAgICAgaSA9IGkgKyAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb29tc0F2YWlsYWJsZVRpdGxlXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RlZE51bUd1ZXN0cygpIHtcclxuICAgICAgICB0aGlzLmhpZGVBdmFpbGFibGVSb29tcygpO1xyXG4gICAgICAgIHRoaXMuaGlkZUNvbnRhY3REYXRhKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBudW1HdWVzdHM6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdudW1HdWVzdHMnKS5zZWxlY3RlZEluZGV4ICsgMVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCByb29tVHlwZXMgPSBbJ1FVQURSVVBMRScsICdUUklQTEUnLCAnRE9VQkxFJywgJ1NJTkdMRSddO1xyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICB3aGlsZSAoaSA8IDUgLSB0aGlzLnN0YXRlLm51bUd1ZXN0cykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyb29tVHlwZXNbaV0udG9Mb3dlckNhc2UoKSkuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJvb21UeXBlc1tpXS50b0xvd2VyQ2FzZSgpICsgXCJMXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICBpID0gaSArIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb21zQXZhaWxhYmxlVGl0bGVcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Qm9va2luZ1ByaWNlKCkge1xyXG4gICAgICAgIGxldCBzdGFydERhdGVTdHJpbmcgPSB0aGlzLnN0YXRlLnN0YXJ0RGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICAgICAgbGV0IGVuZERhdGVTdHJpbmcgPSB0aGlzLnN0YXRlLmVuZERhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG5cclxuICAgICAgICBsZXQgcm9vbVR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicm9vbVR5cGVzXCJdOmNoZWNrZWQnKS52YWx1ZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICByb29tVHlwZTogcm9vbVR5cGVcclxuICAgICAgICB9KVxyXG4gICAgICAgIGF4aW9zLmdldChCQVNFX1VSTCArICcvYXBpL2Jvb2tpbmdzL3ByaWNlP3N0YXJ0RGF0ZT0nICtcclxuICAgICAgICAgICAgJycgKyBzdGFydERhdGVTdHJpbmcgK1xyXG4gICAgICAgICAgICAnJmVuZERhdGU9JyArIGVuZERhdGVTdHJpbmcgK1xyXG4gICAgICAgICAgICAnJnJvb21UeXBlPScgKyByb29tVHlwZSkudGhlbihwcmljZXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtib29raW5nUHJpY2U6IHByaWNlcy5kYXRhLmJvb2tpbmdUb3RhbHN9KTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib29raW5nUHJpY2VcIikuaW5uZXJIVE1MID0gXCJQcmVjaW8gdG90YWw6IFwiICsgdGhpcy5zdGF0ZS5ib29raW5nUHJpY2UgKyBcIuKCrFwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvb2tpbmdQcmljZVwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5kaXNwbGF5Q29udGFjdERhdGFGb3JtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQm9va2luZygpIHtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lQ2hlY2tcIikuaW5uZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsQ2hlY2tcIikuaW5uZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBob25lQ2hlY2tcIikuaW5uZXJUZXh0ID0gXCJcIjtcclxuXHJcbiAgICAgICAgbGV0IG5hbWVPayA9IHRydWU7XHJcbiAgICAgICAgbGV0IGVtYWlsT2sgPSB0cnVlO1xyXG4gICAgICAgIGxldCBwaG9uZU9rID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubmFtZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZUNoZWNrXCIpLmlubmVyVGV4dCA9IFwiRXN0ZSBjYW1wbyBlc3RhIHZhY8Otby4gUG9yIGZhdm9yLCByZWxsw6luYWxvXCI7XHJcbiAgICAgICAgICAgIG5hbWVPayA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubmFtZS5sZW5ndGggPiA1MCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVDaGVja1wiKS5pbm5lclRleHQgPSBcIkVzdGUgY2FtcG8gdGllbmUgdW4gbcOheGltbyBkZSA1MCBjYXJhY3RlcmVzLlwiO1xyXG4gICAgICAgICAgICBuYW1lT2sgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVtYWlsID09IFwiXCIpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbENoZWNrXCIpLmlubmVyVGV4dCA9IFwiRXN0ZSBjYW1wbyBlc3RhIHZhY8Otby4gUG9yIGZhdm9yLCByZWxsw6luYWxvXCI7XHJcbiAgICAgICAgICAgIGVtYWlsT2sgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVtYWlsLmxlbmd0aCA+IDUwKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxDaGVja1wiKS5pbm5lclRleHQgPSBcIkVzdGUgY2FtcG8gdGllbmUgdW4gbcOheGltbyBkZSA1MCBjYXJhY3RlcmVzLlwiO1xyXG4gICAgICAgICAgICBlbWFpbE9rID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5waG9uZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGhvbmVDaGVja1wiKS5pbm5lclRleHQgPSBcIkVzdGUgY2FtcG8gZXN0YSB2YWPDrW8uIFBvciBmYXZvciwgcmVsbMOpbmFsb1wiO1xyXG4gICAgICAgICAgICBwaG9uZU9rID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5waG9uZS5sZW5ndGggPiAxMCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVDaGVja1wiKS5pbm5lclRleHQgPSBcIkVzdGUgY2FtcG8gdGllbmUgdW4gbcOheGltbyBkZSAxMCBjYXJhY3RlcmVzLlwiO1xyXG4gICAgICAgICAgICBwaG9uZU9rID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW5hbWVPayB8fCAhZW1haWxPayB8fCAhcGhvbmVPaykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuYW1lT2ssIGVtYWlsT2ssIHBob25lT2spO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBheGlvcy5wb3N0KEJBU0VfVVJMICsgJy9hcGkvYm9va2luZ3MnLCB7XHJcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogdGhpcy5zdGF0ZS5zdGFydERhdGUsXHJcbiAgICAgICAgICAgIGVuZERhdGU6IHRoaXMuc3RhdGUuZW5kRGF0ZSxcclxuICAgICAgICAgICAgcm9vbVR5cGU6IHRoaXMuc3RhdGUucm9vbVR5cGUsXHJcbiAgICAgICAgICAgIG51bUd1ZXN0czogdGhpcy5zdGF0ZS5udW1HdWVzdHMsXHJcbiAgICAgICAgICAgIGJvb2tpbmdUb3RhbHM6IHRoaXMuc3RhdGUuYm9va2luZ1ByaWNlLFxyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLnN0YXRlLm5hbWUsXHJcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsLFxyXG4gICAgICAgICAgICBwaG9uZTogdGhpcy5zdGF0ZS5waG9uZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgbmV3IFN3YWwoXCJHZW5pYWwhXCIsIFwiLCBTZSBoYSBjcmVhZG8gbGEgcmVzZXJ2YSBjb3JyZWN0YW1lbnRlLlwiLCBcInN1Y2Nlc3NcIikudGhlbigoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSAnLi4vJ1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5Q29udGFjdERhdGFGb3JtKCkge1xyXG4gICAgICAgIGxldCBjb250YWN0RmllbGRzID0gW1wibmFtZVwiLCBcImVtYWlsXCIsIFwicGhvbmVcIl07XHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3REYXRhXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuXHJcbiAgICAgICAgd2hpbGUgKGkgPCBjb250YWN0RmllbGRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWN0RmllbGRzW2ldKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhY3RGaWVsZHNbaV0gKyBcIkxcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICAgICAgICBpID0gaSArIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZUJvb2tpbmdcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UoZmllbGQsIGV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChmaWVsZCkge1xyXG4gICAgICAgICAgICBjYXNlIFwibmFtZVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImVtYWlsXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlbWFpbDogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInBob25lXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwaG9uZTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3LWJvb2tpbmctZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+PHNwYW4+TnVldmEgcmVzZXJ2YTwvc3Bhbj48L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29raW5ncy1saXN0LXRpdGxlIG10LTNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIEZlY2hhIGRlIGVudHJhZGFcclxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cImRkL01NL3l5eXlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnN0YXJ0RGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGFydERhdGUoZGF0ZSlcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG1pbkRhdGU9e25ldyBEYXRlKCl9Lz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZ3MtbGlzdC10aXRsZSBtdC0zXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICBGZWNoYSBkZSBzYWxpZGFcclxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cImRkL01NL3l5eXlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLmVuZERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RW5kRGF0ZShkYXRlKVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgbWluRGF0ZT17bmV3IERhdGUoKX0vPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29raW5ncy1saXN0LXRpdGxlIG10LTVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIE7CuiBkZSBodcOpc3BlZGVzXHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXt0aGlzLnNlbGVjdGVkTnVtR3Vlc3RzLmJpbmQodGhpcyl9IG5hbWU9XCJudW1HdWVzdHNcIiBpZD1cIm51bUd1ZXN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+MTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+Mjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+Mzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+NDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic2hvdy1hdmFpbGFibGUtcm9vbXNcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmdldEF2YWlsYWJsZVJvb21zLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICA+VmVyIGhhYml0YWNpb25lcyBkaXNwb25pYmxlc1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmdzLWxpc3QtdGl0bGUgbXQtM1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgaWQ9XCJyb29tc0F2YWlsYWJsZVRpdGxlXCIgc3R5bGU9e3t2aXNpYmlsaXR5OiBcImhpZGRlblwifX0+SGFiaXRhY2lvbmVzIGRpc3BvbmlibGVzOiA8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmdzLWxpc3QtdGl0bGUgbXQtMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwic2luZ2xlXCIgbmFtZT1cInJvb21UeXBlc1wiIHZhbHVlPVwiU2luZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmdldEJvb2tpbmdQcmljZS5iaW5kKHRoaXMpfSBzdHlsZT17e3Zpc2liaWxpdHk6IFwiaGlkZGVuXCJ9fS8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNpbmdsZVwiIGlkPVwic2luZ2xlTFwiIHN0eWxlPXt7dmlzaWJpbGl0eTogXCJoaWRkZW5cIn19PkluZGl2aWR1YWwgPC9sYWJlbD48YnIvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiZG91YmxlXCIgbmFtZT1cInJvb21UeXBlc1wiIHZhbHVlPVwiRG91YmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmdldEJvb2tpbmdQcmljZS5iaW5kKHRoaXMpfSBzdHlsZT17e3Zpc2liaWxpdHk6IFwiaGlkZGVuXCJ9fS8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRvdWJsZVwiIGlkPVwiZG91YmxlTFwiIHN0eWxlPXt7dmlzaWJpbGl0eTogXCJoaWRkZW5cIn19PkRvYmxlIDwvbGFiZWw+PGJyLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInRyaXBsZVwiIG5hbWU9XCJyb29tVHlwZXNcIiB2YWx1ZT1cIlRyaXBsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5nZXRCb29raW5nUHJpY2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Zpc2liaWxpdHk6IFwiaGlkZGVuXCJ9fS8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRyaXBsZVwiIGlkPVwidHJpcGxlTFwiIHN0eWxlPXt7dmlzaWJpbGl0eTogXCJoaWRkZW5cIn19PlRyaXBsZSA8L2xhYmVsPjxici8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJxdWFkcnVwbGVcIiBuYW1lPVwicm9vbVR5cGVzXCIgdmFsdWU9XCJRdWFkcnVwbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZ2V0Qm9va2luZ1ByaWNlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t2aXNpYmlsaXR5OiBcImhpZGRlblwifX0vPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJxdWFkcnVwbGVcIiBpZD1cInF1YWRydXBsZUxcIiBzdHlsZT17e3Zpc2liaWxpdHk6IFwiaGlkZGVuXCJ9fT5DdWFkcnVwbGUgPC9sYWJlbD48YnIvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29raW5ncy1saXN0LXRpdGxlIG10LTJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGlkPVwiYm9va2luZ1ByaWNlXCIgc3R5bGU9e3t2aXNpYmlsaXR5OiBcImhpZGRlblwifX0+UHJlY2lvIHRvdGFsOiA8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmdzLWxpc3QtdGl0bGUgbXQtM1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgaWQ9XCJjb250YWN0RGF0YVwiIHN0eWxlPXt7dmlzaWJpbGl0eTogXCJoaWRkZW5cIn19PkRhdG9zIGRlIGNvbnRhY3RvIHBhcmEgbGEgcmVzZXJ2YTogPC9wPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgaWQ9XCJuYW1lTFwiIHN0eWxlPXt7dmlzaWJpbGl0eTogXCJoaWRkZW5cIn19Pk5vbWJyZSB5IEFwZWxsaWRvczo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgbmFtZT1cIm5hbWVcIiBvbkNoYW5nZT17KGV2dCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoJ25hbWUnLCBldnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dmlzaWJpbGl0eTogXCJoaWRkZW5cIn19Lz48YnIvPlxyXG4gICAgICAgICAgICAgICAgPHAgaWQ9XCJuYW1lQ2hlY2tcIj48L3A+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgaWQ9XCJlbWFpbExcIiBzdHlsZT17e3Zpc2liaWxpdHk6IFwiaGlkZGVuXCJ9fT5Db3JyZW8gZWxlY3Ryw7NuaWNvOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgb25DaGFuZ2U9eyhldnQpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKCdlbWFpbCcsIGV2dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t2aXNpYmlsaXR5OiBcImhpZGRlblwifX0vPjxici8+XHJcbiAgICAgICAgICAgICAgICA8cCBpZD1cImVtYWlsQ2hlY2tcIj48L3A+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBob25lXCIgaWQ9XCJwaG9uZUxcIiBzdHlsZT17e3Zpc2liaWxpdHk6IFwiaGlkZGVuXCJ9fT5OwrogZGUgdGVsw6lmb25vL23Ds3ZpbDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwaG9uZVwiIG5hbWU9XCJwaG9uZVwiIG9uQ2hhbmdlPXsoZXZ0KSA9PiB0aGlzLmhhbmRsZUNoYW5nZSgncGhvbmUnLCBldnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dmlzaWJpbGl0eTogXCJoaWRkZW5cIn19Lz48YnIvPlxyXG4gICAgICAgICAgICAgICAgPHAgaWQ9XCJwaG9uZUNoZWNrXCI+PC9wPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNyZWF0ZUJvb2tpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBcInJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogXCIxNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiLTQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IFwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jcmVhdGVCb29raW5nLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICA+Q3JlYXIgcmVzZXJ2YVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBCcm93c2VyUm91dGVyIGFzIFJvdXRlcixcclxuICAgIFJlZGlyZWN0LFxyXG4gICAgU3dpdGNoLFxyXG4gICAgUm91dGUsXHJcbiAgICBMaW5rLCBSb3V0ZXNcclxufSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQm9va2luZ0NyZWF0b3IgZnJvbSBcIi4vYm9va2luZ0NyZWF0b3JcIjtcclxuXHJcbmNvbnN0IGpzb24gPSByZXF1aXJlKCcuLi9jb25maWcvY29uZi5qc29uJyk7XHJcblxyXG5jb25zdCBCQVNFX1VSTCA9IGpzb24uQkFTRV9VUkwucHJvZCAvLyBjaGFuZ2UgdG8gbG9jYWwgaWYgbmVlZGVkXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb29raW5ncyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge2Jvb2tpbmdzOiBbXX1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmdldEJvb2tpbmdzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Qm9va2luZ3MoKSB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KEJBU0VfVVJMICsgJy9hcGkvYm9va2luZ3MnKS50aGVuKGJvb2tpbmdzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Ym9va2luZ3M6IGJvb2tpbmdzLmRhdGF9KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmJvb2tpbmdzLmVuZERhdGUpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Um9vbVR5cGVUb0Rpc3BsYXkgKHJvb21UeXBlKSB7XHJcbiAgICAgICAgc3dpdGNoIChyb29tVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdTSU5HTEUnOiByZXR1cm4gJ0luZGl2aWR1YWwnO1xyXG4gICAgICAgICAgICBjYXNlICdET1VCTEUnOiByZXR1cm4gJ0RvYmxlJztcclxuICAgICAgICAgICAgY2FzZSAnVFJJUExFJzogcmV0dXJuICdUcmlwbGUnO1xyXG4gICAgICAgICAgICBjYXNlICdRVUFEUlVQTEUnOiByZXR1cm4gJ0N1w6FkcnVwbGUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHRvPVwiL2Jvb2tpbmdzL2NyZWF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOiBcInJlbGF0aXZlXCIsIGZsb2F0OiBcInJpZ2h0XCIsIHJpZ2h0OiBcIjIwMHB4XCJ9fT5DcmVhciByZXNlcnZhPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicm93LXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmdzLWxpc3QtdGl0bGUgbXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+TGlzdGEgZGUgcmVzZXJ2YXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29raW5ncy1saXN0LXRpdGxlIG10LTVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydyb3cnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmJvb2tpbmdzLm1hcChib29raW5nID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zXCIga2V5PXtib29raW5nLmxvY2F0b3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmQ6IFwiYmxhY2s7XCIsIGNvbG9yOiBcIndoaXRlO1wiLCBwYWRkaW5nOiBcIjIwcHg7XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29raW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmctYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZy1sb2NhdG9yXCI+PHA+PGI+TG9jYWxpemFkb3IgZGUgbGEgcmVzZXJ2YTogPC9iPiB7Ym9va2luZy5sb2NhdG9yfSA8L3A+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9va2luZy1yb29tLXR5cGVcIj48Yj5UaXBvIGRlIGhhYml0YWNpw7NuOiA8L2I+IHt0aGlzLmdldFJvb21UeXBlVG9EaXNwbGF5KGJvb2tpbmcucm9vbVR5cGUpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib29raW5nLW51bS1ndWVzdHNcIj48Yj5OwrogZGUgaHXDqXNwZWRlczogPC9iPiB7Ym9va2luZy5udW1HdWVzdHN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvb2tpbmctc3RhcnQtZGF0ZVwiPjxiPkZlY2hhIGRlIGVudHJhZGE6IDwvYj4ge2Jvb2tpbmcuc3RhcnREYXRlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib29raW5nLWVuZC1kYXRlXCI+PGI+RmVjaGEgZGUgc2FsaWRhOiA8L2I+IHtib29raW5nLmVuZERhdGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvb2tpbmctdG90YWxzXCI+PGI+UHJlY2lvIGRlIGxhIHJlc2VydmE6IDwvYj4ge2Jvb2tpbmcuYm9va2luZ1RvdGFsc33igqw8L3NwYW4+PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJib29raW5nLWNvbnRhY3QtZGF0YVwiPjxiPkRhdG9zIGRlIGNvbnRhY3RvOiA8L2I+PC9zcGFuPjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJuYW1lXCIgY2xhc3NOYW1lPVwiYm9va2luZy1uYW1lXCI+PGI+Tm9tYnJlOiA8L2I+e2Jvb2tpbmcubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJvb2tpbmctZW1haWxcIj48Yj5Db3JyZW8gZWxlY3Ryw7NuaWNvOiA8L2I+e2Jvb2tpbmcuZW1haWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwicGhvbmVcIiBjbGFzc05hbWU9XCJib29raW5nLXBob25lXCI+PGI+TsK6IGRlIHRlbMOpZm9ubzogPC9iPntib29raW5nLnBob25lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29raW5ncy1saXN0LXRpdGxlIG10LTVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RE9NIiwiQm9va2luZ3NMaXN0IiwiQnJvd3NlclJvdXRlciIsIlJvdXRlcyIsIlJvdXRlIiwiUmVkaXJlY3QiLCJOYXZpZ2F0ZSIsIkJvb2tpbmdDcmVhdG9yIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkNvbXBvbmVudCIsIkRhdGVQaWNrZXIiLCJTd2FsIiwiYXhpb3MiLCJqc29uIiwicmVxdWlyZSIsIkJBU0VfVVJMIiwicHJvZCIsInByb3BzIiwic3RhdGUiLCJzdGFydERhdGUiLCJEYXRlIiwiZW5kRGF0ZSIsIm51bUd1ZXN0cyIsInJvb21UeXBlIiwicm9vbXMiLCJuYW1lIiwiZW1haWwiLCJwaG9uZSIsImJvb2tpbmdQcmljZSIsInJvb21zQXZhaWxhYmxlQ2hlY2siLCJjYWxjdWxhdGVkQ2hlY2siLCJkYXRlIiwiaGlkZUF2YWlsYWJsZVJvb21zIiwiaGlkZUNvbnRhY3REYXRhIiwibm93Iiwic2V0U3RhdGUiLCJjb250YWN0RmllbGRzIiwiaSIsInN0eWxlIiwidmlzaWJpbGl0eSIsImxlbmd0aCIsInJvb21UeXBlcyIsInRvTG93ZXJDYXNlIiwiZGlzYWJsZWQiLCJpbm5lclRleHQiLCJnZXRSb29tVHlwZVRvRGlzcGxheSIsImlubmVySFRNTCIsInN0YXJ0RGF0ZVN0cmluZyIsInRvSVNPU3RyaW5nIiwic3BsaXQiLCJlbmREYXRlU3RyaW5nIiwicHJvbWlzZXMiLCJwdXNoIiwiZ2V0IiwidGhlbiIsImRhdGEiLCJyb29tc19hdmFpbGFibGUiLCJQcm9taXNlIiwiYWxsIiwicm9vbSIsInNlbGVjdGVkSW5kZXgiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJ0b1VwcGVyQ2FzZSIsInByaWNlcyIsImJvb2tpbmdUb3RhbHMiLCJkaXNwbGF5Q29udGFjdERhdGFGb3JtIiwibmFtZU9rIiwiZW1haWxPayIsInBob25lT2siLCJjb25zb2xlIiwibG9nIiwicG9zdCIsInJlc3BvbnNlIiwibG9jYXRpb24iLCJocmVmIiwiZXJyb3IiLCJmaWVsZCIsImV2ZW50IiwidGFyZ2V0Iiwic2V0U3RhcnREYXRlIiwic2V0RW5kRGF0ZSIsInNlbGVjdGVkTnVtR3Vlc3RzIiwiYmluZCIsImdldEF2YWlsYWJsZVJvb21zIiwiZ2V0Qm9va2luZ1ByaWNlIiwiZXZ0IiwiaGFuZGxlQ2hhbmdlIiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsImNyZWF0ZUJvb2tpbmciLCJQcm9wVHlwZXMiLCJSb3V0ZXIiLCJTd2l0Y2giLCJMaW5rIiwiQm9va2luZ3MiLCJib29raW5ncyIsImdldEJvb2tpbmdzIiwibWFwIiwiYm9va2luZyIsImxvY2F0b3IiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJwYWRkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==