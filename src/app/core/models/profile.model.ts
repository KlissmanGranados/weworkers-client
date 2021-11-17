import { idiomas } from "./filters.model";
import { tags } from "./proyect.model";

export interface dataCollector {
  data: ProfileBase;
  message: string;
}

export interface ProfileBase {
  empresa: Empresa;
  perfil: ProfileCollector;
}

export interface Empresa {
  razonSocial: string;
  rif: string;
}

export interface ProfileCollector {
  direccion: string;
  estado: boolean;
  id: number;
  idTipoIdentificacion: number;
  identificacion: string;
  personaId: number;
  primerApellido: string;
  primerNombre: string;
  rolesId: number;
  segundoApellido: string;
  segundoNombre: string;
  usuario: string;
}

export interface dataCaptados{
  data: DataBaseCaptados;
  message: string;
}

export interface DataBaseCaptados{
  perfil: Perfil;
}

export interface Perfil{
  id: number;
  usuario: string;
  personaId: number;
  rolesId: number;
  estado: boolean;
  idTipoIdentificacion: number;
  identificacion: string;
  primerNombre: string;
  primerApellido: string;
  segundoNombre: string;
  segundoApellido: string;
  direccion: string;
  sueldo: number | null;
  descripcion: string | null;
  tipoDesarrollador: number | null;
  modalidad: string | null;
  tipoPago: string | null;
  monedaNombreLargo: string | null;
  monedaNombreCorto: string | null;
  empresa: empresa;

  // direccion: string;
  // estado: boolean;
  // id: number;
  // idTipoIdentificacion: number;
  // identificacion: string;
  idiomas?: idiomas[];
  // personaId: number;
  // primerApellido: string;
  // primerNombre: string;
  // proyectos: proyectos;
  redes?: redes[];
  // rolesId: number;
  // segundoApellido: string;
  // segundoNombre: string;
  tags?: tags[];
  // usuario: string;
}

export interface empresa{
  rif: number;
  razonSocial: string;
}

export interface proyectos{
  nombre: string;
}

export interface redes{
  nombre: string;
  id: number,
  timestamp?: Timestamp;
  redUsuario?: string;
}

export interface Timestamp{
  etiqueta: string;
  etiquetaSemantica: string;
  valor: Valor;
}

export interface Valor{
  etiqueta: string;
  etiquetaSemantica: string;
  valor: string;
}
