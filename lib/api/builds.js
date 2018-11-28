"use strict";

var buildsEndpoints = require("../endpoints/builds")
;

var Builds = function (request) {
  this._request = request;
};
module.exports = Builds;

Builds.prototype.get = function (locator) {
  return this._request.execute(buildsEndpoints.getBuildById, {locator: locator});
};

Builds.prototype.getBuildPropertiesById = function (locator) {
  return this._request.execute(buildsEndpoints.getBuildPropertiesById, {locator: locator});
};

Builds.prototype.getByBuildTypeWithDimensions = function (locator, dimensions) {
  return this._request.execute(buildsEndpoints.getBuildsByBuildTypeWithDimensions, {locator: locator, dimensions: dimensions});
};
Builds.prototype.getByBuildTypeWithCount = function (locator, dimensions) {	//for backward compatible
  return this._request.execute(buildsEndpoints.getBuildsByBuildTypeWithDimensions, {locator: locator, dimensions: dimensions});
};

Builds.prototype.getByProjectWithDimensions = function (project, dimensions) {
  return this._request.execute(buildsEndpoints.getBuildsByProjectWithDimensions, {project: project, dimensions: dimensions});
};
Builds.prototype.getByProjectWithCount = function (project, dimensions) {	//for backward compatible
  return this._request.execute(buildsEndpoints.getBuildsByProjectWithDimensions, {project: project, dimensions: dimensions});
};

Builds.prototype.startBuild = function (buildNode) {
  return this._request.execute(buildsEndpoints.startBuild, buildNode);
};

