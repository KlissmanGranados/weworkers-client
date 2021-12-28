import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpResponse } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { login, Registrofreelancer, TokenData } from '../models/auth.model';
import decode  from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urlApi = environment.apiBase;
  tokenKey = 'tk';
  private loggedIn = new BehaviorSubject<boolean>(false);//inicializacion

  constructor(private http: HttpClient, private httpBackend: HttpBackend) { }

  register(json: Registrofreelancer): Observable<any>{
    const newHttpClient = new HttpClient(this.httpBackend);
    return newHttpClient.post<Registrofreelancer>(`${this.urlApi}/auth/registrar/`, json);
  }

  login(json: login): Observable<any>{
    return this.http.post<login>(`${this.urlApi}/auth/login`, json);
  }

  typesOfIdentification(): Observable<any>{
    return this.http.get<any>(`${this.urlApi}/auth/tipos-identificacion/`);
  }

  get isLoggedIn(){
    this.getShowMenu();
    return this.loggedIn.asObservable();
  }

  getShowMenu(){
    this.singInValidate();
    return this.loggedIn;
  }

  singInValidate(){
    const session = localStorage.getItem(this.tokenKey);
    this.loggedIn.next(session ? true : false);//estructura if
  }

  /*Manipulacion del token*/

  singOut(){
    this.loggedIn.next(false);
    localStorage.removeItem(this.tokenKey);
    localStorage.clear();
  }

  saveToken(token:string){
    localStorage.removeItem(this.tokenKey);
    localStorage.setItem(this.tokenKey, token)
  }

  gettoken(){
    return localStorage.getItem(this.tokenKey);
  }

  profile(): TokenData {
    if(this.gettoken()){
      const tokenDecode: TokenData = decode(this.gettoken());
      return tokenDecode;
    }else{
      return undefined;
    }
  }

  getUserRole() {
    const role: any = decode(this.gettoken());
    //1 - freelancer
    //2 - collector captador
    // console.log(role.rolesid);
    // console.log(typeof role.rolesid);
    if(role.rolesid === 1) {
      return {value: true, role: 'freelancer', rolesid: 1};
    } else {
      return {value: false, role: 'collector', rolesid: 2};
    }
  }

}
