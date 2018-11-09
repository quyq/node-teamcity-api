"use strict";

var APIEndpoint = require("../api-endpoint")
	, hostLocator = require("../locators/host-locator")
;

function version() {
  return new APIEndpoint().get().uri("version").acceptText();
}

function apiVersion() {
  return new APIEndpoint().get().uri("apiVersion").acceptText();
}

function hostLocator() {
	return "version";
}

function queryTxt() {
  return new APIEndpoint()
	  .get()
	  .uri("{uri}")
	  .locator({name: "uri", validator: hostLocator})
	  .acceptText();
}

function queryXml() {
  return new APIEndpoint()
	  .get()
	  .uri("{uri}")
	  .locator({name: "uri", validator: hostLocator})
	  .acceptXml();
}

module.exports = {
  version: version(),
  apiVersion: apiVersion(),
  queryTxt: queryTxt(),
  queryXml: queryXml()
};