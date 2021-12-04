import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { RecepcionistaService } from 'src/app/services/recepcionista.service';
import { UserResponse } from 'src/app/shared/models/user.interface';
import { environment } from 'src/environments/environment';


declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EditarEventosComponent implements OnInit, OnDestroy {

  public url = environment.url;

  mostrarBotonFinalizar = false;

  servicio: any;
  public user: UserResponse = null!;
  private destroy$ = new Subject<any>();
  private subscription: Subscription = new Subscription();
  id: string = '';

  //images: string[] = [];
  imagesHtml: string[] = [];

  //videos: string[] = [];
  videosHtml: any[] = [];


  constructor(
    private _rutaActiva: ActivatedRoute,
    private _recepcionistaService: RecepcionistaService,
    private _authService: AuthService,
    private _toastr: ToastrService,

  ) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.destroy$.next({});
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.getUser();

    this.id = this._rutaActiva.snapshot.params.id;

    this.getServicio();

    this.subscription.add(
      this._recepcionistaService.getImagesEvento(this.id).subscribe( data => {

        data.forEach((element: { url_imagen: string; }) => {
          this.imagesHtml.push(this.url + element.url_imagen)
        });

      })
    );

    this.subscription.add(
      this._recepcionistaService.getVideos(this.id).subscribe( data => {

        for (var i = 0; i < data.length; i++) {
          this.videosHtml.push(this.url + data[i].url_video);
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

  getServicio(){
    this.subscription.add(
      this._recepcionistaService.getServicioEvento(this.id).subscribe( data => {
        console.log(data)
        this.servicio = data;
      } )
    );
  }

  finalizarServicio() {
    this.getServicio()
    this._recepcionistaService.changeStatusServicioEvento(this.id).subscribe( data => {
      this._toastr.success(`Se ha cambiado el estado del servicio exitosamente`, "Estado cambiado", {
        positionClass: 'toast-bottom-right'
      });
    } )
  }
  downloadRar() {
    const rarUrl = this.url + this.servicio.url_rar;
    const rarName = this.servicio.nombre_cliente + "-" + this.servicio.paquete_nombre + ".rar";
    FileSaver.saveAs(rarUrl, rarName);
  }

}
