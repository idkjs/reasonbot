// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Dotenv = require("dotenv");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Process = require("process");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");

Dotenv.config(undefined);

var token = Belt_Option.getExn(Js_dict.get(Process.env, "TOKEN"));

var everythingExists = {
  doesTokenExist: {
    orThis: token
  }
};

var match = everythingExists.doesTokenExist;

var result;

if (match !== undefined) {
  var match$1 = match.orThis;
  result = match$1 !== undefined ? match$1 : undefined;
} else {
  result = undefined;
}

console.log(result);

var everythingExistsNone = {
  doesTokenExist: {
    orThis: undefined
  }
};

var doesntExist = {
  doesTokenExist: undefined
};

exports.token = token;
exports.everythingExists = everythingExists;
exports.everythingExistsNone = everythingExistsNone;
exports.doesntExist = doesntExist;
exports.result = result;
/*  Not a pure module */
