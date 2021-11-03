export interface login{
  usuario: string;
  clave: string;
}

export interface Registrofreelancer {
  persona: persona;
  usuario: usuario;
  correo: correo;
  empresa?: empresa;
}

export interface persona {
  idTipoIdentificacion: string;
  identificacion: string;
  primerNombre: string;
  segundoNombre: string;
  primerApellido: string;
  segundoApellido: string;
}

export interface usuario {
  usuario: string;
  clave: string;
  rolesId: string;
}

export interface correo {
  direccion: string;
}

export interface empresa{
  rif: string;
  razonSocial: string;
}

export interface idTipoIdentificacion{
  id: number;
  tipo: string;
}

export interface TokenData {
  idusuario: number;
  rolesid: number;
  estado: boolean;
  iat: number;
  exp: number;
}

