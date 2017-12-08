import {guid} from "./utils";
import {IVehicle} from "./contracts"

export class Model {
    name:string;
    year:number;

    constructor(name:string, year:number) {
        this.name = name;
        this.year = year;
    }
}

class Vehicle implements IVehicle {
    id:string;
    model:Model;
    make:string;
    color:string = "White";

    constructor(id:string, model:Model, make:string) {
        this.id = id;
        this.model = model;
        this.make = make;
    }

    displayInfo() {
        return `
            Vin:${this.id}
            Make:${this.make}
            Model:${this.model.year} - ${this.model.name}
            Color:${this.color}`;
    }
}

export class Car extends Vehicle {

}

export class Truck extends Vehicle {
}


export class Factory {
    constructor(public manufacturer: string) {
    }

    buildCar(model: Model, quantity:number) : Array<Car> {
        return this.buildVehicle<Car>(model, quantity);
    }

    buildTruck(model: Model, quantity:number) : Array<Truck> {
        return this.buildVehicle<Truck>(model, quantity);
    }

    private buildVehicle<T extends Vehicle>(model:Model, quanity:number) : Array<T> {
        let vehicles = Array<T>();
        for (let i = 0; i < quanity; i++) {
            // NEED TO DO THIS BECAUSE TYPESCRIPT CAN'T CREATE INSTANCE OF T
            let car = new Vehicle(guid(), model, this.manufacturer) as T
            vehicles.push(car);
            i++;
        }
        return vehicles;
    }
}