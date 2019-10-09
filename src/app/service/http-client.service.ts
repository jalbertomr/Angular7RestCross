import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Person {
  constructor(
    id:string,
    nombre:string,
    email:string,
    peso:string
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor( private httpClient:HttpClient) { }

  getPersonas() {
    console.log('llamando al servicio spring boot...');
    return this.httpClient.get<Person[]>('http://localhost:8080/personas');
  }
}
