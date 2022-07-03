import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Repository} from "../../models/repository";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  constructor(private http : HttpClient) { }

  get():Observable<Repository[]>{
    return this.http.get<Repository[]>('http://localhost:3000/repo')
  }
}
