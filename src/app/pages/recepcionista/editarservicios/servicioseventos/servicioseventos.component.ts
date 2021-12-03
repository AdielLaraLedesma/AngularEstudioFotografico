import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { RecepcionistaService } from 'src/app/services/recepcionista.service';
import { UserResponse } from 'src/app/shared/models/user.interface';

import { environment } from '../../../../../environments/environment';


declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-servicioseventos',
  templateUrl: './servicioseventos.component.html',
  styleUrls: ['./servicioseventos.component.css']
})
export class ServicioseventosComponent implements OnInit {

  public defaultUrl = 'http://localhost:3000/'

  mostrarBotonFinalizar = false;

  servicio: any;
  public user: UserResponse = null!;
  private subscription: Subscription = new Subscription();
  id: string = '';

  //images: string[] = [];
  imagesHtml: string[] = [];

  //videos: string[] = [];
  videosHtml: any[] = [];


  constructor(
    private rutaActiva: ActivatedRoute,
    private recepcionistaService: RecepcionistaService,
    private authService: AuthService,
    private toastr: ToastrService,

  ) { }

  ngOnInit(): void {
    this.user = this.authService.getUser();

    this.id = this.rutaActiva.snapshot.params.id;

    this.getServicio();

    this.subscription.add(
      this.recepcionistaService.getImagesEvento(this.id).subscribe( data => {

        data.forEach((element: { url_imagen: string; }) => {
          this.imagesHtml.push(this.defaultUrl + element.url_imagen)
        });

      }) 
    );

    this.subscription.add(
      this.recepcionistaService.getVideos(this.id).subscribe( data => {
        
        for (var i = 0; i < data.length; i++) {         
          this.videosHtml.push(this.defaultUrl + data[i].url_video);
        }
      })
    );
  } 

  getServicio(){
    this.subscription.add(
      this.recepcionistaService.getServicioEvento(this.id).subscribe( data => {
        console.log(data)
        this.servicio = data;
        //videosHtml.length == 0 && imagesHtml.length > 0 && imagesHtml.length <= 30
      } )
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
  downloadRar() {
    const rarUrl = this.defaultUrl + this.servicio.url_rar;
    const rarName = this.servicio.nombre_cliente + "-" + this.servicio.paquete_nombre;
    FileSaver.saveAs(rarUrl, rarName);
  }

}
