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

  profile(userId: number): Observable<any>{
    return this.http.get<any>(`${this.urlApi}/comun/perfil/${userId}`);
  }

  profileDetails(json): Observable<any>{
    return this.http.put<any>(`${this.urlApi}/captado/perfil-detalles`, json);
  }

  //Actualizar Persona
  updatePersona(json): Observable<any>{
    return this.http.put<any>(`${this.urlApi}/comun/persona/`, json);
  }

  //Actualizar usuario
  updateUser(json): Observable<any>{
    return this.http.put<any>(`${this.urlApi}/comun/usuario/`, json);
  }

  UpdateUserLanguage(json): Observable<any>{
    return this.http.post<any>(`${this.urlApi}/comun/idioma-nuevo`, json);
  }

  deleteUserLanguage(json): Observable<any>{
    return this.http.request('delete', `${this.urlApi}/comun/idioma-eliminar`, {body: json});
  }

  postRedes(json): Observable<any>{
    return this.http.post<any>(`${this.urlApi}/comun/red`, json);
  }

  UpdateRedes(id:string, json): Observable<any>{
    return this.http.put<any>(`${this.urlApi}/comun/actualizar-red/${id}`, json);
  }

  deleteRedes(id): Observable<any>{
    return this.http.delete<any>(`${this.urlApi}/comun/eliminar-red/${id}`);
  }

  postTags(json): Observable<any>{
    return this.http.post<any>(`${this.urlApi}/comun/tag-nuevo`, json);
  }

  deleteTags(json): Observable<any>{
    return this.http.request('delete', `${this.urlApi}/comun/tag-eliminar`, {body:json});
  }

}
