import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { FotografoService } from 'src/app/services/fotografo.service';
import { ServicioEvento } from 'src/app/shared/models/servicioevento.interface';
import { UserResponse } from 'src/app/shared/models/user.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  public url = environment.url

  contador: number = 0;
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

  videoCollection: string[] = [];
  videoCollectionSafe: SafeResourceUrl[] = [];


  //displayURL: any;

  videos: string[] = [];
  videosHtml: any[] = [];
  public agregarImagenesVideoForm = new FormGroup({
    files: new FormControl([Validators.required]),
    usuario_modificacion_id: new FormControl('', [Validators.required]),
  });

  constructor(
    private _rutaActiva: ActivatedRoute,
    private _fotografoService: FotografoService,
    private _authService: AuthService,
    private _toastr: ToastrService,
    private _router: Router
  ) {  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.destroy$.next({});
    this.destroy$.complete();
  }

  ngOnInit(): void {

    this.getUser();

    this.id = this._rutaActiva.snapshot.params.id;

    this.subscription.add(
      this._fotografoService.getServicio(this.id).subscribe((data) => {
      if ((!data)){
        this._router.navigate([`/fotografo/detalle/${this.id}`])
      }

      this.servicioEvento = data;
      })
    );

    this.subscription.add(
      this._fotografoService.getImages(this.id).subscribe( data => {
        console.log(data)

        data.forEach((element: { url_imagen: string; }) => {
          this.imagesHtml.push(this.url + element.url_imagen)
        });


      })
    );

    this.subscription.add(
      this._fotografoService.getVideos(this.id).subscribe( data => {
        for (var i = 0; i < data.length; i++) {
          this.videosHtml.push(this.url + data[i].url_video);
        }
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

    this._fotografoService.updateImg(this.id, formImg).subscribe((data) => {
      console.log(data);
      this._toastr.success(
        'Se han agregado las imagenes correctamente',
        'Imagenes agregadas',
        {
          positionClass: 'toast-bottom-right',
        }
      );
    });

    let formVideo = new FormData();
    formVideo.append(
      'usuario_modificacion_id',
      this.agregarImagenesVideoForm.get('usuario_modificacion_id')?.value
    );
    for (var i = 0; i < this.videos.length; i++) {
      formVideo.append('video', this.videos[i]);
    }
    this._fotografoService.updateVideo(this.id, formVideo).subscribe((data) => {
      console.log(data);
      this._toastr.success(
        'Se han agregado los videos correctamente',
        'Videos agregadas',
        {
          positionClass: 'toast-bottom-right',
        }
      );
      this._router.navigate([`/fotografo/detalle/${this.id}`]);
    });

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
