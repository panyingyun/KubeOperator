import {Injectable} from '@angular/core';
import {BaseModelService} from "../../../shared/class/BaseModelService";
import {Region, RegionCreateRequest} from "./region";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class RegionService extends BaseModelService<Region> {

    baseUrl = '/api/v1/regions'

    constructor(http: HttpClient) {
        super(http);
    }

    checkValid(item: RegionCreateRequest): Observable<any> {
        const itemUrl = `${this.baseUrl}/check/valid/`;
        return this.http.post<any>(itemUrl, item);
    }
}
