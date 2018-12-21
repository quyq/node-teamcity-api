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

function queryJson() {
  return new APIEndpoint()
	  .get()
	  .uri("{uri}")
	  .locator({name: "uri", validator: hostLocator})
	  .acceptJson();
}

function xmlPayload(data) {
  return {
    body: data.xml,
    type: "application/xml"
  }
}

function jsonPayload(data) {
  return {
    body: data.json,
    type: "application/json"
  }
}

function postXml() {
  return new APIEndpoint()
	  .post()
	  .uri("{uri}")
	  .locator({name: "uri", validator: hostLocator})
	  .payload(xmlPayload);
}

function postJson() {
  return new APIEndpoint()
	  .post()
	  .uri("{uri}")
	  .locator({name: "uri", validator: hostLocator})
	  .payload(jsonPayload);
}

module.exports = {
  version: version(),
  apiVersion: apiVersion(),
  queryTxt: queryTxt(),
  queryXml: queryXml(),
  queryJson: queryJson(),
  postXml: postXml(),
  postJson: postJson()
};