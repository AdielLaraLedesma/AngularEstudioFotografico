import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { EmpleadosService } from '../../../../services/empleados.service'
import { Employee } from '../../../../shared/models/employee.interface'

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit, OnDestroy {


  public imageSrc = 'http://localhost:3000/'  
  public imageSrcDefault = 'assets/img/image-not-found.png'  

  public empleados: Employee[] = [];

  private subscription: Subscription = new Subscription();


  constructor( private empleadosService: EmpleadosService,
    private toastr: ToastrService
     ) {
    

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.getEmpleados();
  }

  eliminarEmpleado(id: number){
    this.subscription.add(
      this.empleadosService.deleteEmpleado(id).subscribe(data => {
        this.toastr.success("El empleado fue eliminado exitosamente", "Empleado eliminado", {
          positionClass: 'toast-bottom-right'
        });
        this.getEmpleados();
      })
    );
  }


  getEmpleados(){
    this.subscription.add(
      this.empleadosService.getEmpleados().subscribe(data => {
        this.empleados = data;
      })
    );
  }

}
