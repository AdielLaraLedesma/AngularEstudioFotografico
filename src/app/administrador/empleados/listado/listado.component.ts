import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { Employee } from 'src/app/shared/models/employee.interface';
import { UserResponse } from 'src/app/shared/models/user.interface';
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
  private destroy$ = new Subject<any>();
  public user: UserResponse = null!;

  constructor(
    private _empleadosService: EmpleadosService,
    private _authService: AuthService,
    private _toastr: ToastrService,
  ) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.destroy$.next({});
    this.destroy$.complete();
  }


  ngOnInit(): void {
    this.getUser();
    this.getEmpleados();
  }

  eliminarEmpleado(id: number, iControl: any) {
    this.subscription.add(
      this._empleadosService.deleteEmpleado(id).subscribe((data) => {
        this._toastr.success(
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
      this._empleadosService.getEmpleados().subscribe((data) => {
        this.empleados = data;

        for (var i = 0; i < this.empleados.length; i++) {
          if (this.empleados[i].id === this.user.id) {
            this.empleados.splice(i, 1);
            i--;
          }

        }

      })
    );
  }
  getUser() {
    this.user = this._authService.getUser();
    if (this.user == null)
      this.subscription.add(
        this._authService.user$
          .pipe(takeUntil(this.destroy$))
          .subscribe((user: UserResponse) => {
            if (user) {
              this.user = user;
            }
          })
      );
  }
}
