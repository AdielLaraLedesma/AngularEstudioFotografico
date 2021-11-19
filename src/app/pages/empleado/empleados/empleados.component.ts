import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../../services/empleados.service'
import { Employee } from '../../../shared/models/employee.interface'

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  public empleados: Employee[] = [];

  displayedColumns: string[] = ['id', 'nombre', 'apellido paterno','apellido materno', 'email'];

  constructor( private empleadosService: EmpleadosService ) {
    this.empleadosService.getEmpleados().subscribe(data => {
      this.empleados = data;
    });

  }

  ngOnInit(): void {
  }

}
