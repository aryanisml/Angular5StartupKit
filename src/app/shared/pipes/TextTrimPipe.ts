import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: "charlength"
})
export class TextTrimPipe implements PipeTransform {
    transform(value:string, length:number = 1) {
        if (value && value.length > length)
            return value.substring(0, length);
        return value;
    }
}