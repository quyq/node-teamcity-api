"use strict";

var util = require("util")
;

var HostLocator = function () {
  this._data = {};
};

HostLocator.prototype.uri = function (uri) {
  var self = this
      , data = self._data
  ;
  data.uri = uri;
};

HostLocator.prototype.getLocatorValue = function () {
  var self = this
      , data = self._data
      , result
  ;

  if (data.uri) {
    result = util.format("%s", data.uri);
  } else {
    throw new Error("The HostLocator did not have an 'uri'");
  }

  return result;
};

module.exports = function (data) {
  var result = new HostLocator();

  if (data.uri) {
    result.uri(getValue(data.uri));
  } else {
    result.uri(getValue(data));
  }

  return result;
};

function getValue(value) {
  if (!value) {
    throw new Error("A value was not provided for the Locator to be created")
  }
  return value;
}
