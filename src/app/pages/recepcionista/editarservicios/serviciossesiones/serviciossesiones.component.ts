import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { RecepcionistaService } from 'src/app/services/recepcionista.service';
import { UserResponse } from 'src/app/shared/models/user.interface';

@Component({
  selector: 'app-serviciossesiones',
  templateUrl: './serviciossesiones.component.html',
  styleUrls: ['./serviciossesiones.component.css'],
})
export class ServiciossesionesComponent implements OnInit, OnDestroy {
  public defaultUrl = 'http://localhost:3000/';

  mostrarBotonFinalizar = false;

  servicio: any;
  private subscription: Subscription = new Subscription();
  id: string = '';


  private destroy$ = new Subject<any>();
  public user: UserResponse = null!;

  constructor(
    private rutaActiva: ActivatedRoute,
    private recepcionistaService: RecepcionistaService,
    private authService: AuthService,
    private toastr: ToastrService,
  ) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.destroy$.next({});
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.getUser();

    this.user = this.authService.getUser();

    this.id = this.rutaActiva.snapshot.params.id;

  }

  getServicio(){
    this.subscription.add(
      this.recepcionistaService.getServicioSesion(this.id).subscribe((data) => {
        console.log(data);
        this.servicio = data;
      })
    );
  }
  getUser() {
    this.user = this.authService.getUser();
    if (this.user == null)
      this.subscription.add(
        this.authService.user$
          .pipe(takeUntil(this.destroy$))
          .subscribe((user: UserResponse) => {
            if (user) {
              this.user = user;
            }
          })
      );
  }

  finalizarServicio() {
    this.recepcionistaService.changeStatusServicioSesion(this.id).subscribe( data => {
      this.getServicio()
      this.toastr.success(`Se ha cambiado el estado del servicio exitosamente`, "Estado cambiado", {
        positionClass: 'toast-bottom-right'
      });
    } )
  }
}
