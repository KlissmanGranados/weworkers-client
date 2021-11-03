export interface form{
  proyecto: proyecto;
  tags: tags;
}

export interface proyecto{
  nombre: string;
  descripcion: string;
  fechaCrea: string;
  fechaTermina: string;
  estado: string;
  presupuesto: number;
  monedasId: string;
  tiposPagoId: number;
  modalidadesId: string;
}

export interface tags{
  etiqueta: string;
}

