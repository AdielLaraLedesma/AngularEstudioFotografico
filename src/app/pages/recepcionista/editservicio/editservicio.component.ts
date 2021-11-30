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

@Component({
  selector: 'app-editservicio',
  templateUrl: './editservicio.component.html',
  styleUrls: ['./editservicio.component.css']
})
export class EditservicioComponent implements OnInit {

  public defaultUrl = 'http://localhost:3000/'

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
  ) { }

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


        

        for (var i = 0; i < data.length; i++) {         
          this.videosHtml.push(this.defaultUrl + data[i].url_video);
        }

        console.log(this.videosHtml)
        console.log(this.imagesHtml)


      })
    );
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

}
