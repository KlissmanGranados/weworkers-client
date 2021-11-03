import { Links, tags } from "./proyect.model";

export interface CaptadosBase{
  data: DataBaseCaptados;
  message: string;
}

export interface DataBaseCaptados{
  metadata: Metadata;
  records: Records[];
}

export interface Metadata{
  links?: Links;
  page: number;
  pageCount: number;
  perPage: number;
  totalCount: number;
  totalPages: number;
}

export interface Records{
  id: number;
  idiomas: string;
  nombreCompleto: string;
  primerApellido: string;
  primerNombre: string;
  segundoApellido: string;
  segundoNombre: string;
  tags: tags;
  uri: string;
  usuario: string;
}




