
export interface ProyectoBase{
  data: DataBase;
  message: string;
}

export interface DataBase{
  metadata: Metadata;
  records: Records[];
}

export class PaginationData {
  page = 1;
  pageCount = 0;
  perPage = 10;
  totalCount = 0;
  totalPages = 0;
}

export interface Metadata{
  links?: Links;
  page: number;
  pageCount: number;
  perPage: number;
  totalCount: number;
  totalPages: number;
}

export interface Links{
  first: string;
  last: string;
  next: string;
  previous: null;
  self: string;
}

export interface Records{
  descripcion: string;
  estado: boolean;
  fechaCrea: FechaCrea;
  fechaTermina: FechaTermina;
  id: number;
  modalidadNombre: string;
  monedaId: number;
  monedaNombreCorto: string;
  monedaNombreLargo: string;
  nombre: string;
  presupuesto: string;
  reclutadoresId: number;
  tags: tags;
  tiposPagoId: number;
  tiposPagoNombre: string;
  uri: string;
}

export interface FechaCrea{
  etiqueta: string;
  etiquetaSemantica: string;
  valor: string;
}

export interface FechaTermina{
  etiqueta: string;
  etiquetaSemantica: string;
  valor: string;
}

export interface tags{
  id: number;
  nombre: string;
}
