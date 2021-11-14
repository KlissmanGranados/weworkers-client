import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataBase } from '../models/proyect.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectListService {
  urlApi = environment.apiBase;
  private _proyectList: BehaviorSubject<DataBase> = new BehaviorSubject<DataBase>(null);

  public get proyectList(): any {
    return this._proyectList.getValue();
  }
  public set proyectList(lista: any) {
    this._proyectList.next(lista);
  }
  public onSelectedProyectList(): Observable<any> {
    return this._proyectList.asObservable();
  }

  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({'token': localStorage.getItem("tk")});

  listarProyectos(parametros: string): Observable<any>{
    return this.http.get<any>(`${this.urlApi}/comun/listar-proyectos/?usuario=true&${parametros}`, {headers: this.headers});
  }

  detallesProyecto(idProyecto: number): Observable<any>{
    return this.http.get<any>(`${this.urlApi}/comun/proyecto/${idProyecto}`, {headers: this.headers})
  }
}
