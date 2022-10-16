import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable, pluck} from "rxjs";
import {Procedure} from "../types/procedure.types";

@Injectable({
  providedIn: 'root'
})
export class ProceduresService {

  constructor(private http: HttpClient) { }

  public procedureSearch$(search: string): Observable<Procedure[]> {
    const url = `${environment.endpoint}/browser/MAIN/descriptions?term=${search}&sematicTags=procedure&active=true&conceptActive=true&lang=english&limit=200&off
    set=0&groupByConcept=true`;
    return this.http.get<{ items: Procedure[] }>(url).pipe(pluck('items'));
  }

}
