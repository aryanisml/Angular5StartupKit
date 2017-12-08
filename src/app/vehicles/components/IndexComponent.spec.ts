import {TestBed, async, ComponentFixture } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { VehicleCardComponent } from "./VehicleCardComponent";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Car, Model } from "./../libs/models"
import { guid } from "../libs/utils";
import { IVehicle } from "../libs/contracts";
import { IndexComponent } from "./IndexComponent";
import { RouterModule } from "@angular/router";

describe("Vehicle.IndexComponent", () => {
    let fixture:ComponentFixture<IndexComponent>;
    let component:IndexComponent;
    let element:DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations:[IndexComponent, VehicleCardComponent],
            imports:[FormsModule, CommonModule, RouterModule],
            //providers:[{}]
        }).compileComponents();

        fixture = TestBed.createComponent(IndexComponent);
        component = fixture.componentInstance;
        element = fixture.debugElement;
    }));

    it("should create component", ()  => {
        expect(component).toBeTruthy("Element was null");
        expect(element).toBeTruthy("Element was null")
    });
});


var FactoryServiceStub = {

}