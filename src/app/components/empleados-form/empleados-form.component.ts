import { Component, HostBinding, OnInit } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado';
import { Rol } from 'src/app/interfaces/rol'
import { EmpleadosService } from '../../services/empleados.service'

@Component({
  selector: 'app-empleados-form',
  templateUrl: './empleados-form.component.html',
  styleUrls: ['./empleados-form.component.css']
})
export class EmpleadosFormComponent implements OnInit {

  @HostBinding('class') classes = "row";

  //para testear xd
  roles: Rol[]=[{id: 1,nombre: 'administrador'},{id: 3, nombre: 'fotografo'},{id: 4, nombre: 'recepcionista'}];


  empleado: Empleado = {
    id: 0,
    nombre: "",
    ape_pat: "",
    ape_mat: "",
    email: "",
    password: "",
    rol: ""
  };


  constructor(private empleadoService: EmpleadosService) { }

  ngOnInit(): void {
  }

  saveEmpleado(){
    console.log("Hola")
  }

}