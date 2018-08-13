class Spacecraft {

    constructor(public propulsor: string) {}

    jumpIntoHyperSpace() {
        console.log(`Entering hyperspace with ${this.propulsor}`);
    }

}

class MilleniumFalcon extends Spacecraft implements Containership{

    cargoContainers: number;

    constructor(){
        super('hyperdrive'),
        this.cargoContainers = 2
    }

    jumpIntoHyperSpace() {
        if(Math.random() >= 0.5){
            super.jumpIntoHyperSpace();
        } else {
            console.log('Failed to jump into hyperpace!');
        }
    }

}

interface Containership {
    cargoContainers: number
}

/* Nave Básica */

let ship = new Spacecraft('hyperdrive');
ship.jumpIntoHyperSpace();

/* Millenium Falcon */

let falcon = new MilleniumFalcon();
falcon.jumpIntoHyperSpace();

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2;

console.log(`Is Falcon good for the job? ${goodForTheJob(falcon) ? 'yes': 'no'}`);