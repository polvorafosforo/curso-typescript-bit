/* Imports */

import {Spacecraft, Containership} from './base-ships';
import {MilleniumFalcon} from './starfighters';

import * as _ from 'lodash';
console.log(_.pad("Typescript Examples", 40, "="));

/* Nave Básica */

let basicShip = new Spacecraft('hyperdrive');
basicShip.jumpIntoHyperSpace();

/* Millenium Falcon */

let falcon = new MilleniumFalcon();
falcon.jumpIntoHyperSpace();

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2;

console.log(`Is Falcon good for the job? ${goodForTheJob(falcon) ? 'yes': 'no'}`);