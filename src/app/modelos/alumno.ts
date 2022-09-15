export type seccionAlum = 'Pgy' | 'Mdy' | 'Mat'; //Nombre de la seccion
//Alumno
export interface Alumno{
  rut: number;
  run: string;
  dv: number;
  nombre: string;
  apellido: string;
  edad: number;
  nsec: seccionAlum;
}
// Seccion
export interface seccion{
  id: number;
  nsec: seccionAlum;
}

// Registro Historial
// --registro fecha y hora
// --Alumno de tipo alumno

