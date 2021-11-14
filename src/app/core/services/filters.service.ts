import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { idiomas, listarRedes, modalidades, moneda, tiposPago } from '../models/filters.model';
import { environment } from 'src/environments/environment';
import { DataBase } from '../models/proyect.model';
import { DataBaseCaptados } from '../models/captados.model';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  urlApi = environment.apiBase;
  private _ListadoProyectos: BehaviorSubject<DataBase> = new BehaviorSubject<DataBase>(null);
  private _ListadoFreelancer: BehaviorSubject<DataBaseCaptados> = new BehaviorSubject<DataBaseCaptados>(null);

  public get listadoProyecto(): any {
    return this._ListadoProyectos.getValue();
  }
  public set listadoProyecto(lista: any) {
    this._ListadoProyectos.next(lista);
  }
  public onSelectedlistadoProyecto(): Observable<any> {
    return this._ListadoProyectos.asObservable();
  }

  public get listadoFreelancer(): any{
    return this._ListadoFreelancer.getValue();
  }
  public set listadoFreelancer(lista: any){
    this._ListadoFreelancer.next(lista);
  }
  public onSelectedlistadoFreelancer(): any{
    return this._ListadoFreelancer.asObservable();
  }

  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({'token': localStorage.getItem("tk")});


  getListadoProyectos(parametros: string): Observable<any>{
    return this.http.get(`${this.urlApi}/comun/listar-proyectos/?${parametros}`, { headers: this.headers});
  }

  getListadoFreelancer(parametros: string): Observable<any>{
    return this.http.get(`${this.urlApi}/comun/usuario/?${parametros}`, {headers: this.headers});
  }

  moneda(): Observable<any>{
    return this.http.get<moneda[]>(`${this.urlApi}/public/monedas`);
  }

  tiposPago(): Observable<any>{
    return this.http.get<tiposPago[]>(`${this.urlApi}/public/tipos-pago/`);
  }

  modalidades(): Observable<any>{
    return this.http.get<modalidades[]>(`${this.urlApi}/public/modalidad/`);
  }

  listarRedes(): Observable<any>{
    return this.http.get<listarRedes[]>(`${this.urlApi}/public/redes/`);
  }

  idiomas(): Observable<any>{
    return this.http.get<idiomas[]>(`${this.urlApi}/public/idiomas`);
  }

  tipodeDesarrollador(): Observable<any>{
    return this.http.get(`${this.urlApi}/public/tipos-desarrollador/`, {headers: this.headers});
  }

  updateIdiomas(json): Observable<any>{
    return this.http.put<any>(`${this.urlApi}/comun/idioma-nuevo`, json, {headers: this.headers})
  }
}
