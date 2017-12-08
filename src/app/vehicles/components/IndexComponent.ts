import { Component, OnInit, OnDestroy } from "@angular/core";
import { FactoryService } from "../libs/services/FactoryService";
import { IVehicle } from "../libs/contracts";
@Component({
    selector:"vehicle-index",
    templateUrl:"./IndexComponent.html"
})
export class IndexComponent implements OnInit, OnDestroy {

    private vehicles:Array<IVehicle>;

    constructor(private factoryService:FactoryService) {
    }

    ngOnInit() {
        this.factoryService.all().subscribe(c => this.vehicles = c);
    }

    updateVehicle(vehicle:IVehicle) {
        this.factoryService.update(vehicle).subscribe(c => console.log(c))
    }

    deleteVehicle(vehicle:IVehicle) {
        this.factoryService.delete(vehicle).subscribe(c => this.vehicles.splice(this.vehicles.indexOf(vehicle), 1));
    }

    ngOnDestroy() {

    }

}