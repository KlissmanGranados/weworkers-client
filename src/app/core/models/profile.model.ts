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
  direccion: string;
  estado: boolean;
  id: number;
  idTipoIdentificacion: number;
  identificacion: string;
  idiomas: idiomas;
  personaId: number;
  primerApellido: string;
  primerNombre: string;
  proyectos: proyectos;
  redes: redes;
  rolesId: number;
  segundoApellido: string;
  segundoNombre: string;
  tags: tags;
  usuario: string;
}

export interface proyectos{
  nombre: string;
}

export interface redes{
  nombre: string;
}


