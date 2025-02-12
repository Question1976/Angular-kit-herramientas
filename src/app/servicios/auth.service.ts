import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistroRequest } from '../interfaces/registro_request';
import { LoginRequest } from '../interfaces/login_request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api: string;

  constructor(private http: HttpClient) { 
    this.api = environment.api;
  }

  login(modelo: LoginRequest):Observable<any> {
    return this.http.post(`${this.api}login`, modelo);
  }

  registro(modelo: RegistroRequest):Observable<any> {
    return this.http.post(`${this.api}registro`, modelo);
  }
}
