import { Component } from '@angular/core';
import { Alumno } from './modelos/alumno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public listaAlumno: Array<Alumno> =[
  {
    rut:211604859,
    run:"21.160.485",
    dv:9,
    nombre: "Valentina",
    apellido: "Cartes",
    edad: 19,
    nsec: 'Pgy'
  },
  {
    rut:204853587,
    run:"21.160.485",
    dv:9,
    nombre: "Maria",
    apellido: "Lopez",
    edad: 21,
    nsec: 'Mat'
  }
  ]
  // escucharalumnos
  public escucharAlumno(nuevoA: Alumno):void{
    this.listaAlumno.push(nuevoA);
  }

}
