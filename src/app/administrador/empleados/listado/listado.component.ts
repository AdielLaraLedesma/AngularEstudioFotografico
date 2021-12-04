import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { Employee } from 'src/app/shared/models/employee.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoEmpleadosComponent implements OnInit, OnDestroy {

  public url = environment.url
  //public imageSrc = environment.defaultUrl;
  public imageSrcDefault = 'assets/img/image-not-found.png';

  public empleados: Employee[] = [];

  private subscription: Subscription = new Subscription();

  constructor(
    private empleadosService: EmpleadosService,
    private toastr: ToastrService
  ) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.getEmpleados();
  }

  eliminarEmpleado(id: number, iControl: any) {
    this.subscription.add(
      this.empleadosService.deleteEmpleado(id).subscribe((data) => {
        this.toastr.success(
          'El empleado fue eliminado exitosamente',
          'Empleado eliminado',
          {
            positionClass: 'toast-bottom-right',
          }
        );
        this.empleados.splice(iControl, 1);
      })
    );
  }

  getEmpleados() {
    this.subscription.add(
      this.empleadosService.getEmpleados().subscribe((data) => {
        this.empleados = data;
      })
    );
  }
}
