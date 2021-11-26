import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { FotografoService } from 'src/app/services/fotografo.service';
import { ServicioEvento } from 'src/app/shared/models/servicioevento.interface';
import { UserResponse } from 'src/app/shared/models/user.interface';

@Component({
  selector: 'app-detalleservicio',
  templateUrl: './detalleservicio.component.html',
  styleUrls: ['./detalleservicio.component.css'],
})
export class DetalleservicioComponent implements OnInit, OnDestroy {
  public defaultUrl = 'http://localhost:3000/'

  id: string = '';
  public servicioEvento: ServicioEvento = {
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
  };

  private destroy$ = new Subject<any>();
  public user: UserResponse = null!;
  private subscription: Subscription = new Subscription();

  images: string[] = [];
  imagesHtml: string[] = [];


  //displayURL: any;

  videos: string[] = [];
  videosHtml: any[] = [];
  public agregarImagenesVideoForm = new FormGroup({
    files: new FormControl([Validators.required]),
    usuario_modificacion_id: new FormControl('', [Validators.required]),
  });

  constructor(
    private rutaActiva: ActivatedRoute,
    private fotografoService: FotografoService,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.destroy$.next({});
    this.destroy$.complete();
  }

  ngOnInit(): void {

    this.getUser();

    this.id = this.rutaActiva.snapshot.params.id;

    this.subscription.add(
      this.fotografoService.getServicio(this.id).subscribe((data) => {
      if ((!data)){
        this.router.navigate([`/serviciosfotografo/${this.user.id}`])
      }

      this.servicioEvento = data;
      })
    );

    this.subscription.add(
      this.fotografoService.getImages(this.id).subscribe( data => {
        console.log(data)

        data.forEach((element: { url_imagen: string; }) => {
          this.imagesHtml.push(this.defaultUrl + element.url_imagen)
        });


      })
    );

    this.subscription.add(
      this.fotografoService.getVideos(this.id).subscribe( data => {
        console.log(data)

        //TODO Corregir esta madre
        data.forEach((element: { url_video: string; }) => {
          this.videosHtml.push(this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/tgbNymZ7vqY'));


          
        });
        console.log(this.videosHtml)
        console.log(this.imagesHtml)


      })
    );


    
  }

  removeImagen(element: string) {
 
    for (var i = 0; i < this.images.length; i++) {
      if (this.imagesHtml[i] === element) {
        this.imagesHtml.splice(i, 1);
        this.images.splice(i, 1);
        i--;
      }

    }
  }

  agregarMultimedia() {
    const formImg = new FormData();
    formImg.append(
      'usuario_modificacion_id',
      this.agregarImagenesVideoForm.get('usuario_modificacion_id')?.value
    );
    for (var i = 0; i < this.images.length; i++) {
      formImg.append('image', this.images[i]);
    }

    this.fotografoService.updateImg(this.id, formImg).subscribe((data) => {
      console.log(data);
      this.toastr.success(
        'Se han agregado las imagenes correctamente',
        'Imagenes agregadas',
        {
          positionClass: 'toast-bottom-right',
        }
      );
      //this.router.navigate([`/serviciosfotografo/${this.id}`]);
    });

    let formVideo = new FormData();
    formVideo.append(
      'usuario_modificacion_id',
      this.agregarImagenesVideoForm.get('usuario_modificacion_id')?.value
    );
    for (var i = 0; i < this.videos.length; i++) {
      formVideo.append('video', this.videos[i]);
    }
    this.fotografoService.updateVideo(this.id, formVideo).subscribe((data) => {
      console.log(data);
      this.toastr.success(
        'Se han agregado los videos correctamente',
        'Videos agregadas',
        {
          positionClass: 'toast-bottom-right',
        }
      );
      this.router.navigate([`/serviciosfotografo/${this.id}`]);
    });

  }
  getUser() {
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
  }

  onImageSelected(event: any) {
    console.log("aqui entro")
    for (var i = 0; i < event.target.files.length; i++) {
      this.images.push(event.target.files[i]);

      const readerImage = new FileReader();
      readerImage.onload = (event: any) => {
        this.imagesHtml.push(event.target.result);
      };
      readerImage.readAsDataURL(event.target.files[i]);
    }
  }

  onVideoSelected(event: any){
    console.log("aqui entro")
    for (var i = 0; i < event.target.files.length; i++) {
      this.videos.push(event.target.files[i]);

      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.videosHtml.push(event.target.result);
        //console.log(event.target.result)
      };
      reader.readAsDataURL(event.target.files[i]);
    }
  }
}