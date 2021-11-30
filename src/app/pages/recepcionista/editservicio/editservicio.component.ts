import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { FotografoService } from 'src/app/services/fotografo.service';
import { RecepcionistaService } from 'src/app/services/recepcionista.service';
import { ServicioEvento } from 'src/app/shared/models/servicioevento.interface';
import { UserResponse } from 'src/app/shared/models/user.interface';

@Component({
  selector: 'app-editservicio',
  templateUrl: './editservicio.component.html',
  styleUrls: ['./editservicio.component.css']
})
export class EditservicioComponent implements OnInit {

  public defaultUrl = 'http://localhost:3000/'


  mostrarBotonFinalizar = false;

  showServicioEvento = false;
  showServicioImpresion = false;
  showServicioSesion = false;



  contador: number = 0;
  id: string = '';
  tipo_paquete_id: string = '';


  servicio: any;


  /*public servicioEvento: ServicioEvento = {
    id: 0,
    cliente_id: 0,
    fotografo_id: 0,
    paquete_id: 0,
    fecha_evento: new Date(),
    direccion: '',
    marco_id: 0,
    total: 0,
    estatus_id: 0,
    pago_id: 0,
    activo: false,
    usuario_registro_id: 0,
    fecha_registro: 0,
    nombre_cliente: '',
    paquete_nombre: '',
    estatus_nombre: '',
  };*/

  private destroy$ = new Subject<any>();
  public user: UserResponse = null!;
  private subscription: Subscription = new Subscription();

  images: string[] = [];
  imagesHtml: string[] = [];

  videoCollection: string[] = [];
  videoCollectionSafe: SafeResourceUrl[] = [];

  videos: string[] = [];
  videosHtml: any[] = [];
  public agregarImagenesVideoForm = new FormGroup({
    files: new FormControl([Validators.required]),
    usuario_modificacion_id: new FormControl('', [Validators.required]),
  });

  constructor(
    private rutaActiva: ActivatedRoute,
    private recepcionistaService: RecepcionistaService,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.destroy$.next({});
    this.destroy$.complete();
  }

  ngOnInit(): void {

    this.user = this.authService.getUser();

    this.id = this.rutaActiva.snapshot.params.id;

    this.tipo_paquete_id = this.rutaActiva.snapshot.params.tipo_paquete_id;

    //Si el tipo de paquete es 1 será Evento social
    switch(this.tipo_paquete_id ) { 
      case '1': { 
         
        this.subscription.add(
          this.recepcionistaService.getServicioEvento(this.id).subscribe( data => {
            console.log(data)
            this.servicio = data;
            this.showServicioEvento = true;
          } )
        );
        break; 
      } 
      case '2': { 
        this.subscription.add(
          this.recepcionistaService.getServicioSesion(this.id).subscribe( data => {
              console.log(data)
              this.servicio = data;
              this.showServicioSesion = true;
          } )
        );
        break; 
      } 
      default: { 
        this.subscription.add(
          this.recepcionistaService.getServicioImpresion(this.id).subscribe( data => {
              console.log(data)
              this.servicio = data;
              this.showServicioImpresion = true;
          } )
        );
        break; 
      } 
   } 




    this.subscription.add(
      //Arreglar esto una vez implementen los endpoints para
      /*this.recepcionistaService.get(this.id).subscribe((data) => {

        console.log(data)

      if ((!data)){
        this.router.navigate([`/serviciosfotografo/${this.user.id}`])
      }

      this.servicioEvento = data;

      if (data.estatus_nombre == "Finalizando pedido"){
        this.mostrarBotonFinalizar = true;
      }

      })*/
    );

    this.subscription.add(
      this.recepcionistaService.getImages(this.id).subscribe( data => {

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

  /*getUser() {
    this.subscription.add(
      this.authService.user$
        .pipe(takeUntil(this.destroy$))
        .subscribe((user: UserResponse) => {
          if (user) {
            this.user = user;
            this.agregarImagenesVideoForm.controls[
              'usuario_modificacion_id'
            ].setValue(this.user.id);
          }
        })
    );
  }*/
  finalizarServicio(){

  }

}
