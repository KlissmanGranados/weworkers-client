export interface DatabaseQuiz{
  data: DataQuiz;
  message: string;
}

export interface DataQuiz{
  cuestionario: Cuestionario;
  preguntas: Preguntas[];
}

export interface Cuestionario {
  id: number;
  proyectosId: number;
}

export interface Preguntas{
  cuestionariosId: number;
  id: number;
  pregunta: string;
  respuestas: Respuestas[];
}

export interface Respuestas{
  id: number;
  preguntasId: number;
  cuestionariosId: number;
  respuesta: string;
}
