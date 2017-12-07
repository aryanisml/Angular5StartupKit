import { NgModule } from "@angular/core";
import { TextTrimPipe } from "./pipes/TextTrimPipe";

@NgModule({
    declarations: [TextTrimPipe],
    exports:[TextTrimPipe]
})
export class SharedModule {}