"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = (_ref) => {
  var {
    label
  } = _ref;
  return _react.default.createElement("button", null, label);
};

var _default = Button;
exports.default = _default;