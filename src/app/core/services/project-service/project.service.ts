import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Project} from "../../models/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http : HttpClient) { }

  get():Observable<Project[]>{
    return this.http.get<Project[]>('http://localhost:3000/projects')
  }
  getById(id : number):Observable<Project>{
    return this.http.get<Project>('http://localhost:3000/projects/' + id)
  }
}
