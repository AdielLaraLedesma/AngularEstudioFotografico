import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { RecepcionistaService } from 'src/app/services/recepcionista.service';
import { UserResponse } from 'src/app/shared/models/user.interface';

@Component({
  selector: 'app-sesiones',
  templateUrl: './sesiones.component.html',
  styleUrls: ['./sesiones.component.css']
})
export class EditarSesionesComponent implements OnInit, OnDestroy {

  mostrarBotonFinalizar = false;

  servicio: any;
  private subscription: Subscription = new Subscription();
  id: string = '';


  private destroy$ = new Subject<any>();
  public user: UserResponse = null!;

  constructor(
    private _rutaActiva: ActivatedRoute,
    private _recepcionistaService: RecepcionistaService,
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

    this.user = this._authService.getUser();

    this.id = this._rutaActiva.snapshot.params.id;

    this.getServicio();

  }

  getServicio(){
    this.subscription.add(
      this._recepcionistaService.getServicioSesion(this.id).subscribe((data) => {
        console.log(data);
        this.servicio = data;
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

  finalizarServicio() {
    this.getServicio()
    this._recepcionistaService.changeStatusServicioSesion(this.id).subscribe( data => {
      this._toastr.success(`Se ha cambiado el estado del servicio exitosamente`, "Estado cambiado", {
        positionClass: 'toast-bottom-right'
      });
    } )
  }
}
