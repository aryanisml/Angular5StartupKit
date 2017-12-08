import { OnInit, Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { FactoryService } from "../libs/services/FactoryService";
import { Model } from "../libs/models";

@Component({
    selector:"vehicle-entry-form",
    templateUrl: "./EntryComponent.html"
})
export class EntryComponent implements OnInit {

    entity:EntryForm;
    entryForm:FormGroup;

    constructor(private formBuilder:FormBuilder, 
        private router:Router, 
        private factoryService:FactoryService) {
    }

    ngOnInit() {
        this.entity = new EntryForm();
        this.entryForm = this.formBuilder.group({
            make:[this.entity.make, Validators.required],
            model:[this.entity.model, Validators.required],
            year:[this.entity.year, Validators.required]
        });
    }

    saveWasClicked() {
        this.entity = this.entryForm.value;
        this.factoryService.build(new Model(this.entity.make, this.entity.year), this.entity.make).subscribe(c => this.router.navigate(["/vehicles"]));
    }

    resetBuildForm() {
        this.entity = new EntryForm();
    }
}

class EntryForm {
    make:string;
    model:string;
    year:number;
}