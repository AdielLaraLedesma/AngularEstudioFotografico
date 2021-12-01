import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { RecepcionistaService } from 'src/app/services/recepcionista.service';
import { UserResponse } from 'src/app/shared/models/user.interface';

@Component({
  selector: 'app-serviciosimpresiones',
  templateUrl: './serviciosimpresiones.component.html',
  styleUrls: ['./serviciosimpresiones.component.css']
})
export class ServiciosimpresionesComponent implements OnInit {

  public defaultUrl = 'http://localhost:3000/'

  mostrarBotonFinalizar = false;

  servicio: any;
  public user: UserResponse = null!;
  private subscription: Subscription = new Subscription();
  id: string = '';

  images: string[] = [];
  imagesHtml: string[] = [];

  videos: string[] = [];
  videosHtml: any[] = [];


  constructor(
    private rutaActiva: ActivatedRoute,
    private recepcionistaService: RecepcionistaService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.user = this.authService.getUser();

    this.id = this.rutaActiva.snapshot.params.id;

    this.subscription.add(
      this.recepcionistaService.getServicioImpresion(this.id).subscribe( data => {
        console.log(data)
        this.servicio = data;
      } )
    );

    this.subscription.add(
      this.recepcionistaService.getImagesImpresion(this.id).subscribe( data => {

        data.forEach((element: { url_imagen: string; }) => {
          this.imagesHtml.push(this.defaultUrl + element.url_imagen)
        });


      }) 
    );
  }
  finalizarServicio(){

  } 

}
