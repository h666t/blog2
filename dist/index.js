"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dataSource = require("./data-source");

var _blogs = require("./entity/blogs");

_dataSource.AppDataSource.initialize().then( /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var manager, blog, blogsList;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            manager = _ref.manager;
            blog = new _blogs.Blogs();
            blog.title = 'title';
            blog.content = "content";
            _context.next = 6;
            return manager.save(_blogs.Blogs, blog);

          case 6:
            _context.next = 8;
            return manager.find(_blogs.Blogs);

          case 8:
            blogsList = _context.sent;
            console.log(blogsList);
            _context.next = 12;
            return _dataSource.AppDataSource.destroy();

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}())["catch"](function (error) {
  return console.log(error);
});