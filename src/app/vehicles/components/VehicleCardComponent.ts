import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IVehicle } from "../libs/contracts";

@Component({
    selector:"vehicle-card",
    templateUrl: "./VehicleCardComponent.html"
})
export class VehicleCardComponent {
    @Input() vehicle:IVehicle
    @Output() needsUpdated = new EventEmitter<IVehicle>();
    @Output() needsDeleted = new EventEmitter<IVehicle>(); 
    isEditing:boolean = false;

    updateWasClicked() {
        this.needsUpdated.emit(this.vehicle);
        this.isEditing = false;
    }

    deleteWasClicked() {
        this.needsDeleted.emit(this.vehicle);
    }
}