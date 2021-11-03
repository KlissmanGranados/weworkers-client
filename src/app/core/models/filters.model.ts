export interface MultiDropdown {
  id: number | null,
  name: string,
  extra?: string,
  checked?: boolean,
  visible?: boolean
}

export interface moneda{
  nombreLargo: string;
  id: number;
  nombreCorto: string;
}

export interface tiposPago{
  nombre:string;
  id:number;
}

export interface listarRedes{
  nombre:string;
  id: number;
}

export interface modalidades{
  nombre:string;
  id: number;
}

export interface idiomas{
  id: number;
  nombreCorto: string;
  nombreLargo: string;
}
