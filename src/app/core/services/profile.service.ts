import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  urlApi = environment.apiBase;
  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({'token': localStorage.getItem("tk")});

  profile(userId: number): Observable<any>{
    return this.http.get<any>(`${this.urlApi}/comun/perfil/${userId}`, {headers: this.headers});
  }

  profileDetails(json): Observable<any>{
    return this.http.put<any>(`${this.urlApi}/captado/perfil-detalles`, json, {headers: this.headers})
  }
}
