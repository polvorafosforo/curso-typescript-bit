"use strict";
/* Imports */
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var starfighters_1 = require("./starfighters");
var _ = require("lodash");
console.log(_.pad("Typescript Examples", 40, "="));
/* Nave Básica */
var basicShip = new base_ships_1.Spacecraft('hyperdrive');
basicShip.jumpIntoHyperSpace();
/* Millenium Falcon */
var falcon = new starfighters_1.MilleniumFalcon();
falcon.jumpIntoHyperSpace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is Falcon good for the job? " + (goodForTheJob(falcon) ? 'yes' : 'no'));
