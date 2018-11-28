"use strict";

var util = require("util")
    , APIEndpoint = require("../api-endpoint")
    , buildTypeLocator = require("../locators/build-type-locator")
    , projectLocator = require("../locators/project")
    , vcsRootLocator = require("../locators/vcs-root")
;

function getBuildsByBuildTypeWithDimensions() {
  return new APIEndpoint()
      .get()
      .uri("builds/?locator=buildType:({locator}),{dimensions},defaultFilter:false")
      .pureJson()
      .locator({name: "locator", validator: buildTypeLocator})
      .locator({name: "dimensions", validator: buildTypeLocator})
      ;
}

function getBuildsByProjectWithDimensions() {
  return new APIEndpoint()
      .get()
      .uri("builds/?locator={project},{dimensions},defaultFilter:false")
      .pureJson()
      .locator({name: "project", validator: projectLocator})
      .locator({name: "dimensions", validator: buildTypeLocator})
      ;
}

function getBuildById() {
  return new APIEndpoint()
      .get()
      .uri("builds/{locator}")
      .pureJson()
      .locator({name: "locator", validator: buildTypeLocator});
}

function getBuildPropertiesById() {
  return new APIEndpoint()
      .get()
      .uri("builds/{locator}/resulting-properties")
      .pureJson()
      .locator({name: "locator", validator: buildTypeLocator})
}

function startBuild() {
  return new APIEndpoint()
      .post()
      .uri("buildQueue")
      .pureJson()
      .payload(buildNode)
      ;
}

module.exports = {
  getBuildsByBuildTypeWithDimensions: getBuildsByBuildTypeWithDimensions(),
  getBuildsByProjectWithDimensions: getBuildsByProjectWithDimensions(),
  getBuildById: getBuildById(),
  getBuildPropertiesById: getBuildPropertiesById(),
  startBuild: startBuild()
};

function buildNode(data) {
  return {
    body: data,
    type: "application/xml"
  };
}