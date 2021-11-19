import { Component, HostBinding, OnInit } from '@angular/core';
import { Rol } from 'src/app/interfaces/rol';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { Employee } from 'src/app/shared/models/employee.interface';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-editempleado',
  templateUrl: './editempleado.component.html',
  styleUrls: ['./editempleado.component.css']
})
export class EditempleadoComponent implements OnInit {

  @HostBinding('class') classes = "row";

  //para testear xd
  roles: Rol[]=[{id: 1,nombre: 'administrador'},{id: 3, nombre: 'fotografo'},{id: 4, nombre: 'recepcionista'}];


  empleado: Employee = {
    id: 0,
    nombre: "",
    ape_pat: "",
    ape_mat: "",
    correo: "",
    fech_nac: new Date,
    contrasena: "",
    rol_id: 0,
    celular: 0,
    direccion: ""
  };


  constructor(
    private empleadoService: EmpleadosService,
    private rutaActiva: ActivatedRoute
    ) { }

  ngOnInit(): void {

    let id = this.rutaActiva.snapshot.params.id;

    console.log(id)

  }

  saveEmpleado(){
    console.log("Hola")
  }

}