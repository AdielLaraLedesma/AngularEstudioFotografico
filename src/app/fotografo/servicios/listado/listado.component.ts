import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { FotografoService } from 'src/app/services/fotografo.service';
import { ServicioEvento } from 'src/app/shared/models/servicioevento.interface';
import { UserResponse } from 'src/app/shared/models/user.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit, OnDestroy {

  id: string =  "";

  private destroy$ = new Subject<any>();
  public user: UserResponse = null!;
  private subscription: Subscription = new Subscription();

  public servicioEventos: ServicioEvento[] | undefined;

  constructor(
    private _rutaActiva: ActivatedRoute,
    private _authService: AuthService,
    private _fotografoService: FotografoService,
    private _router: Router
  ) { }
  ngOnInit(): void {
    this.getUser();
    this.id = this._rutaActiva.snapshot.params.id;

    if(this.user.id.toString() != this.id){
      this._router.navigate(["/home"]);
        return
    }

    this.subscription.add(
      this._fotografoService.getServicios(this.id).subscribe( data => {
        this.servicioEventos = data;
      })
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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

  getColor(estatus_nombre: string){ (2)
    switch (estatus_nombre) {
      case 'Solicitado/Agendado':
        return "violet";
      case 'En espera del evento':
        return 'naviblue';
      case 'En espera de interaccion del fotografo':
        return 'marron';
      case 'En espera de interaccion del cliente':
        return 'purple';
      case 'Finalizando pedido':
        return 'pink';
      case 'Finalizado':
        return 'green';
      default:
        return 'black'
    }
  }

}
