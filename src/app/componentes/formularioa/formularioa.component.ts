import { Component, Output, EventEmitter } from '@angular/core';
import { Alumno, seccionAlum} from './../../modelos/alumno'
@Component({
  selector: 'app-formularioa',
  templateUrl: './formularioa.component.html',
  styleUrls: ['./formularioa.component.scss']
})
export class FormularioaComponent  {
  public se: Array<string> = [
    'Pgy',
    'Mdy',
    'Mat'
  ]
  public alumno: Alumno = {
    rut: 0, //input type number,
    run: '',
    dv: 0,
    nombre: '', //input type text
    apellido:'',
    edad:0,
    nsec: 'Pgy' //select
  }
  @Output() public enviarAlumno = new EventEmitter<Alumno>();
  public guardarElemento(){
    //Copia de un obj de un nivel :D
    const copia: Alumno = {
      ...this.alumno
    }
    this.enviarAlumno.emit(copia);
    this.alumno = {
      rut: 0, //input type number,
      run: '',
      dv: 0,
      nombre: '', //input type text
      apellido:'',
      edad:0,
      nsec: 'Pgy' //select
    }
  }
  public cDv(evento: Event): void{
    const ele = evento.target as HTMLInputElement;
    this.alumno.dv = Number.parseInt(ele.value) || 0;
  }
  public cRun(evento: Event): void{
    const ele = evento.target as HTMLInputElement;
    this.alumno.run = ele.value;
  }
  public cNombre(evento: Event): void{
    const ele = evento.target as HTMLInputElement;
    this.alumno.nombre = ele.value;
  }
  public cApellido(evento: Event): void{
    const ele = evento.target as HTMLInputElement;
    this.alumno.apellido = ele.value;
  }
  public cEdad(evento: Event): void{
    const ele = evento.target as HTMLInputElement;
    this.alumno.edad = Number.parseInt(ele.value) || 0;
  }
  public cSec(evento: Event): void{
    const ele = evento.target as HTMLSelectElement;
    this.alumno.nsec = ele.value as seccionAlum;
  }

}
