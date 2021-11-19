import { Component, HostBinding, OnInit } from '@angular/core';
import { Employee } from '../../../shared/models/employee.interface';
import { Rol } from 'src/app/interfaces/rol'
import { EmpleadosService } from '../../../services/empleados.service'

@Component({
  selector: 'app-empleados-form',
  templateUrl: './empleados-form.component.html',
  styleUrls: ['./empleados-form.component.css']
})
export class EmpleadosFormComponent implements OnInit {

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
    direccion: "",
    activo: 0,
    usuario_registrado_id: 0,
    fecha_registro: new Date
  };


  constructor(private empleadoService: EmpleadosService) { }

  ngOnInit(): void {
  }

  saveEmpleado(){
    console.log("Hola")
  }

}