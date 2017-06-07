require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var options = [{ value: 'one', label: 'One' }, { value: 'two', label: 'Two' }];

_reactDom2['default'].render(_react2['default'].createElement(_reactSelect2['default'], {
  autofocus: true,
  options: options,
  simpleValue: true,
  clearable: false,
  name: 'selected-state',
  searchable: true,
  popperModifiers: {
    preventOverflow: {
      boundariesElement: 'viewport'
    }
  }
}), document.getElementById('panel'));

},{"react":undefined,"react-dom":undefined,"react-select":undefined}]},{},[1]);
