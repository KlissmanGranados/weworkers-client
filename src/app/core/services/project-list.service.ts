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
  private _freelanceList: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  public get proyectList(): any {
    return this._proyectList.getValue();
  }
  public set proyectList(lista: any) {
    this._proyectList.next(lista);
  }
  public onSelectedProyectList(): Observable<any> {
    return this._proyectList.asObservable();
  }

  public get freelanceList(): any {
    return this._freelanceList.getValue();
  }
  public set freelanceList(lista: any) {
    this._freelanceList.next(lista);
  }
  public onSelectedfreelanceList(): Observable<any> {
    return this._freelanceList.asObservable();
  }

  constructor(private http: HttpClient) { }

  listarProyectos(parametros: string): Observable<any>{
    return this.http.get<any>(`${this.urlApi}/comun/listar-proyectos/?usuario=true&${parametros}`);
  }

  detallesProyecto(idProyecto: number): Observable<any>{
    return this.http.get<any>(`${this.urlApi}/comun/proyecto/${idProyecto}`);
  }

  //por modificar
  listadoPropuestas(idProyecto: number, parametros: string): Observable<any>{
    return this.http.get<any>(`${this.urlApi}/captador/evaluar-captados-propuestos/${idProyecto}/query?${parametros}`);
  }

  resetValues() {
    this.proyectList = null;
    this.freelanceList = null;
  }

  agregarTrabajador(json): Observable<any>{
    return this.http.post<any>(`${this.urlApi}/captador/agregar-trabajador`, json);
  }

  eliminarTrabajador(json): Observable<any>{
    return this.http.request('delete',`${this.urlApi}/captador/eliminar-trabajador`,  {body: json});
  }

  // deleteUserLanguage(json): Observable<any>{
  //   return this.http.request('delete', `${this.urlApi}/comun/idioma-eliminar`, {body: json});
  // }
}
