import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmpleadosService } from '../../../services/empleados.service'
import { Employee } from '../../../shared/models/employee.interface'

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  public empleados: Employee[] = [];

  //displayedColumns: string[] = ['id', 'nombre', 'apellido paterno','apellido materno', 'email'];

  constructor( private empleadosService: EmpleadosService,
    private toastr: ToastrService
     ) {
    

  }

  ngOnInit(): void {
    this.getEmpleados();
  }

  eliminarEmpleado(id: number){
    this.empleadosService.deleteEmpleado(id).subscribe(data => {
      //this.paquetes = data;
      this.toastr.success("El paquete ha sido eliminado con exito");
      this.getEmpleados();
    })
  }


  getEmpleados(){
    this.empleadosService.getEmpleados().subscribe(data => {
      this.empleados = data;
    });
  }

}
