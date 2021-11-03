import { Injectable } from '@angular/core';
import { Metadata, PaginationData } from '../models/proyect.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private paginationData: Metadata;
  private _refreshListadoProyectos: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  // numero de pagina
  get page(): number {
    return this.paginationData.page;
  }

  // cantidad de paginas total
  get totalPages(): number {
    return this.paginationData.totalPages;
  }

  // cantidad de elementos a mostar por página
  get perPage(): number {
      return this.paginationData.perPage;
  }

  // cantidad de elementos
  get totalCount(): number {
      return this.paginationData.totalCount;
  }

  constructor() {
    this.paginationData = new PaginationData();
  }

  change(pageEvent: any) {
    this.paginationData.page = pageEvent.page;
    this.paginationData.totalPages = pageEvent.totalPages;
    this.paginationData.perPage = pageEvent.perPage;
    this.paginationData.totalCount = pageEvent?.totalCount || this.paginationData.totalCount;
  }

  get paginationInfo() {
    return this.paginationData;
  }

  public get refreshListado(): any {
    return this._refreshListadoProyectos.getValue();
  }

  public set refreshListado(lista: any) {
    this._refreshListadoProyectos.next(lista);
  }

  public onSelectedrefreshListado(): Observable<any> {
    return this._refreshListadoProyectos.asObservable();
  }
}
