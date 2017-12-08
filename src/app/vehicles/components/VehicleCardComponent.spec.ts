import {TestBed, async, ComponentFixture } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { VehicleCardComponent } from "./VehicleCardComponent";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Car, Model } from "./../libs/models"
import { guid } from "../libs/utils";
import { IVehicle } from "../libs/contracts";

describe("VehicleCardComponent", () => {

    let fixture:ComponentFixture<VehicleCardComponent>;
    let component:VehicleCardComponent;
    let element:DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations:[VehicleCardComponent],
            imports:[FormsModule, CommonModule]
        }).compileComponents();

        fixture = TestBed.createComponent(VehicleCardComponent);
        component = fixture.componentInstance;
        element = fixture.debugElement;
    }));

    it("should create component", ()  => {
        expect(component).toBeTruthy("Element was null");
        expect(element).toBeTruthy("Element was null")
    });

    it("should display in UI", () => {
        let expected = new Car(guid(), new Model("Test", 2017), "Test");
        component.vehicle = expected;
        fixture.detectChanges();

        let vinHeaderEl = element.query(By.css("div h5:nth-of-type(1)")).nativeElement;
        let modelHeaderEl = element.query(By.css("div h5:nth-of-type(2)")).nativeElement;
        let makeHeaderEl = element.query(By.css("div h5:nth-of-type(3)")).nativeElement;
        
        expect(vinHeaderEl.innerText).toEqual(expected.id);
        expect(modelHeaderEl.innerText).toEqual(expected.model.name + " " + expected.model.year);
        expect(makeHeaderEl.innerText).toEqual(expected.make);
    });

    it("should request update of vehicle", () => {
        let actual:IVehicle;
        let outputEvent = component.needsUpdated;
        outputEvent.subscribe(e => actual = e );

        component.vehicle = new Car(guid(), new Model("Test", 2017), "Test");
        fixture.detectChanges();
        expect(actual).toBeFalsy();
        
        component.updateWasClicked();
        expect(actual).toEqual(component.vehicle);

        outputEvent.unsubscribe();
    });

    it("should request delete of vehicle", () => {
        let actual:IVehicle;
        let outputEvent = component.needsDeleted;
        outputEvent.subscribe(e => actual = e );

        component.vehicle = new Car(guid(), new Model("Test", 2017), "Test");
        fixture.detectChanges();
        expect(actual).toBeFalsy();
        
        component.deleteWasClicked();
        expect(actual).toEqual(component.vehicle);

        outputEvent.unsubscribe();
    });
});