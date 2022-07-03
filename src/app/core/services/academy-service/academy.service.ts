import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Academy} from "../../models/academy";

@Injectable({
  providedIn: 'root'
})
export class AcademyService {

  constructor(private http : HttpClient) { }

  get():Observable<Academy[]>{
    return this.http.get<Academy[]>('http://localhost:3000/academy')
  }
  getById(id : number):Observable<Academy>{
    return this.http.get<Academy>('http://localhost:3000/academy')
  }
}
