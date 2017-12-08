import { NgModule } from "@angular/core";
import { VehicleModuleRouting } from "./VehiclesModule.routing";
import { IndexComponent } from "./components/IndexComponent";

@NgModule({
    declarations: [IndexComponent],
    imports: [VehicleModuleRouting]
})
export class VehiclesModule {}