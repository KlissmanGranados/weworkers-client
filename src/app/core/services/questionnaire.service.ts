import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
  urlApi = environment.apiBase;
  private _idProyectoToQuiz: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  public get idProyectoToQuiz(): any {
    return this._idProyectoToQuiz.getValue();
  }
  public set idProyectoToQuiz(lista: any) {
    this._idProyectoToQuiz.next(lista);
  }
  public onSelectedidProyectoToQuiz(): Observable<any> {
    return this._idProyectoToQuiz.asObservable();
  }

  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({'token': localStorage.getItem("tk")});

  crearCuestionario(json): Observable<any>{
    return this.http.post<any>(`${this.urlApi}/captador/cuestionario/crear`, json, {headers: this.headers});
  }

  eliminarCuestionario(proyectoId): Observable<any>{
    return this.http.delete<any>(`${this.urlApi}/captador/cuestionario/eliminar/${proyectoId}`, {headers: this.headers});
  }

  seleccionarCuestionario(proyectoId): Observable<any>{
    return this.http.get<any>(`${this.urlApi}/comun/cuestionario/${proyectoId}`,  {headers: this.headers});
  }

  responderCuestionario(json): Observable<any>{
    return this.http.post<any>(`${this.urlApi}/captado/cuestionario/`, json, {headers: this.headers});
  }
}
