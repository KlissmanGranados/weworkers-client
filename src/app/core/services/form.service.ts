import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { proyecto } from '../models/forms.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  urlApi = environment.apiBase;
  headers = new HttpHeaders({'token': localStorage.getItem("tk")});
  constructor(private http: HttpClient) { }

  formCollectorInformation = {
    proyecto: {
      nombre: '',
      descripcion: '',
      fechaCrea:'',
      fechaTermina:'',
      presupuesto: '',
      monedasId: '',
      tiposPagoId: '',
      estado: 'TRUE',
      modalidadesId: '',
    },
    tags: []
  };

  private formComplete = new Subject<any>();

  formComplete$ = this.formComplete.asObservable();

  getformInformation() {
    return this.formCollectorInformation;
  }

  setformInformation(formCollectorInformation) {
    this.formCollectorInformation = formCollectorInformation;
  }

  complete() {
    this.formComplete.next(this.formCollectorInformation);
  }

  proyecto(json: any): Observable<any>{
    return this.http.post<proyecto>(`${this.urlApi}/captador/proyecto`, json, {headers: this.headers});
  }

  actualizarProyecto(json: any): Observable<any>{
    return this.http.put<any>(`${this.urlApi}/captador/actualizar-proyecto`, json, {headers: this.headers} )
  }
}
