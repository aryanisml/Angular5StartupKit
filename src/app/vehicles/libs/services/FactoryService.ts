import { Injectable } from "@angular/core";
import { Model, Factory, Car } from "./models";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { IVehicle } from "../contracts";
import { IVehicle } from "../contracts";
import { IVehicle } from "../contracts";



@Injectable()
export class FactoryService {

    private url = "http://localhost:3000/cars/"
    private http:Http;
    private vehicles:Array<IVehicle> = new Array();

    constructor(http:Http) {
        this.http = http;
    }

    public build(model:Model, manufacturer:string) : Observable<IVehicle> {
        let factory = new Factory(manufacturer);
        let vehicles = factory.buildCar(model, 1);
        let vehicle = vehicles[0];

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({headers: headers});
        let body = JSON.stringify(vehicle);

        return this.http
            .post(this.url, body, options)
            .map(()=> vehicle)
            .catch(this.handleError);
    }

    public update(vehicle: IVehicle): Observable<IVehicle>{
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({headers: headers});

        let url = this.url + vehicle.id;
        let body = JSON.stringify(vehicle);

        return this.http
            .post(url, body, options)
            .map(()=> vehicle)
            .catch(this.handleError);
    }

    public delete(vehicle: IVehicle): Observable<IVehicle>{
        let url = this.url + vehicle.id;

        return this.http
                .delete(url)
                .catch(this.handleError);
    }

    public all(): Observable<IVehicle[]>{
        return this.http.get(this.url)
            .map((r) => r.json())
            .catch(this.handleError);
    }

    private handleError(error:any):Observable<any>{
        console.log(error);
        return Observable.throw("An error occurred.  Please try the last operation again.");
    }


}
