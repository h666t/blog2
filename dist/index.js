"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dataSource = require("./data-source");

var _User = require("./entity/User");

_dataSource.AppDataSource.initialize().then( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(res) {
    var user, users;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // console.log(res);
            console.log("Inserting a new user into the database...");
            user = new _User.User();
            user.firstName = "Timber"; // user.lastName = "Saw"
            // user.age = 25
            // await AppDataSource.manager.save(user)
            // console.log("Saved a new user with id: " + user.id)
            //
            // console.log("Loading users from the database...")

            _context.next = 5;
            return _dataSource.AppDataSource.manager.find(_User.User);

          case 5:
            users = _context.sent;
            console.log("Loaded users: ", users);
            console.log("Here you can setup and run express / fastify / any other framework.");

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}())["catch"](function (error) {
  return console.log(error);
});