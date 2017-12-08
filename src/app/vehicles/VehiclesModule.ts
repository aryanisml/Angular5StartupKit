import { NgModule } from "@angular/core";
import { VehicleModuleRouting } from "./VehiclesModule.routing";
import { IndexComponent } from "./components/IndexComponent";
import { FactoryService } from "./libs/services/FactoryService";
import { HttpModule, Http } from "@angular/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms"
import { EntryComponent } from "./components/EntryComponent";
import { VehicleCardComponent } from "./components/VehicleCardComponent";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [IndexComponent, EntryComponent, VehicleCardComponent],
    imports: [VehicleModuleRouting, HttpModule, ReactiveFormsModule, CommonModule, FormsModule],
    providers: [FactoryService]
})
export class VehiclesModule {}