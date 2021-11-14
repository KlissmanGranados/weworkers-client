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
    return this.http.put<any>(`${this.urlApi}/captado/perfil-detalles`, json, {headers: this.headers});
  }

  //Actualizar Persona
  updatePersona(json): Observable<any>{
    return this.http.put<any>(`${this.urlApi}/comun/persona/`, json, {headers: this.headers});
  }

  //Actualizar usuario
  updateUser(json): Observable<any>{
    return this.http.put<any>(`${this.urlApi}/comun/usuario/`, json, {headers: this.headers});
  }

  UpdateUserLanguage(json): Observable<any>{
    return this.http.post<any>(`${this.urlApi}/comun/idioma-nuevo`, json, {headers: this.headers});
  }

  deleteUserLanguage(json): Observable<any>{
    return this.http.request('delete', `${this.urlApi}/comun/idioma-eliminar`, {body: json, headers: this.headers});
  }

  postRedes(json): Observable<any>{
    return this.http.post<any>(`${this.urlApi}/comun/red`, json, {headers: this.headers});
  }

  UpdateRedes(id:string, json): Observable<any>{
    return this.http.put<any>(`${this.urlApi}/comun/actualizar-red/${id}`, json, {headers: this.headers});
  }

  deleteRedes(id): Observable<any>{
    return this.http.delete<any>(`${this.urlApi}/comun/eliminar-red/${id}`, {headers: this.headers});
  }

  postTags(json): Observable<any>{
    return this.http.post<any>(`${this.urlApi}/comun/tag-nuevo`, json, {headers: this.headers});
  }

  deleteTags(json): Observable<any>{
    return this.http.request('delete', `${this.urlApi}/comun/tag-eliminar`, {body:json, headers: this.headers});
  }

}
