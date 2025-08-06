import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Password } from './pass';

const API = "http://localhost:3000/passwords";

@Injectable({
  providedIn: 'root'
})
export class PassGenService {
  constructor(private http: HttpClient) { }

  savePassword(password: Password) {
    return this.http.post<Password>(API, password);
  }
}
