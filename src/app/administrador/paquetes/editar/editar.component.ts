import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { MarcosService } from 'src/app/services/marcos.service';
import { PaquetesService } from 'src/app/services/paquetes.service';
import { TamanoService } from 'src/app/services/tamano.service';
import { Marco } from 'src/app/shared/models/marco.interface';
import { Tamano } from 'src/app/shared/models/tamano.interface';
import { TipoPaquete } from 'src/app/shared/models/tipo-paquetes.interface';
import { UserResponse } from 'src/app/shared/models/user.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarPaquetesComponent implements OnInit, OnDestroy {

  public url = environment.url

  /* Imagen */
  public newFile: File =  null!;
  public urlImage: any;
  public imageSrc = 'assets/img/image-not-found.png'

  private destroy$ = new Subject<any>();
  public user: UserResponse = null!;
  private subscription: Subscription = new Subscription();

  public selectedTamano = '';
  tamanos: Tamano[] = null!;

  public selectedTipoPaquete = '';
  tipo_paqutes : TipoPaquete[] = null!;

  public selectedMarco = '';
  marcos: Marco[] = null!;


  isDisabled: boolean = true;
  id: string =  "";


  editarPaqueteForm = new FormGroup({
    id: new FormControl({value:'', disabled:true}, Validators.required),
    nombre: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    descripcion: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    hrs_Video: new FormControl('', [Validators.maxLength(10)]),
    no_Fotos_Dig: new FormControl(0, [Validators.required]),
    no_Fotos_Fis: new FormControl(0, [Validators.required]),
    no_Fotos_Enm: new FormControl(0, [Validators.required]),
    marco_id: new FormControl(0, [Validators.required]),
    tamano_id: new FormControl(0, [Validators.required]),
    tipo_paquete_id: new FormControl('', [Validators.required]),
    precio: new FormControl('', [Validators.required]),
    usuario_modificacion_id: new FormControl(Validators.required),
    file: new FormControl()
  })


  constructor(
    private _authService: AuthService,
    private _paqueteService: PaquetesService,
    private _marcoService: MarcosService,
    private _tamanoService: TamanoService,
    private _rutaActiva: ActivatedRoute,
    private _toastr: ToastrService,
    private _router: Router
    ) { }
  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete();
    this.subscription.unsubscribe();

  }

  ngOnInit(): void {

    this.getUser();
    this.getMarco();
    this.getTipoPaquetes();
    this.getTamanos();

    this.id = this._rutaActiva.snapshot.params.id;

    this._paqueteService.getPaquete(this.id).subscribe(data => {

      this.urlImage = this.url + data.url_imagen;

      if (!data){
        this._router.navigate(["/administrador/paquetes"]);
        return
      }

      this.editarPaqueteForm.controls['id'].setValue(data.id)
      this.editarPaqueteForm.controls['nombre'].setValue(data.nombre)
      this.editarPaqueteForm.controls['descripcion'].setValue(data.descripcion)
      this.editarPaqueteForm.controls['hrs_Video'].setValue(data.hrs_Video)
      this.editarPaqueteForm.controls['no_Fotos_Dig'].setValue(data.no_Fotos_Dig)
      this.editarPaqueteForm.controls['no_Fotos_Fis'].setValue(data.no_Fotos_Fis)
      this.editarPaqueteForm.controls['no_Fotos_Enm'].setValue(data.no_Fotos_Enm)

      this.editarPaqueteForm.controls['marco_id'].setValue(data.marco_id)
      this.editarPaqueteForm.controls['tamano_id'].setValue(data.tamano_id)
      this.editarPaqueteForm.controls['precio'].setValue(data.precio)
      this.editarPaqueteForm.controls['tipo_paquete_id'].setValue(data.tipo_paquete_id)
      this.editarPaqueteForm.controls['usuario_modificacion_id'].setValue(this.user.id)


      this.tamanos.forEach( element => {
        if (element.id == data.tamano_id){
          this.selectedTamano = element.nombre
        }
      })
      this.marcos.forEach( element => {
        if (element.id == data.marco_id){
          this.selectedMarco = element.nombre
        }
      })
      this.tipo_paqutes.forEach( element => {
        if (element.id == data.tipo_paquete_id){
          this.selectedTipoPaquete = element.nombre

        }
      })
    });

  }

  editarPaquetes(){


    var formData: any = new FormData();
    formData.append("nombre", this.editarPaqueteForm.get('nombre')?.value);
    formData.append("descripcion", this.editarPaqueteForm.get('descripcion')?.value);
    formData.append("hrs_Video", this.editarPaqueteForm.get('hrs_Video')?.value);
    formData.append("no_Fotos_Dig", this.editarPaqueteForm.get('no_Fotos_Dig')?.value);
    formData.append("no_Fotos_Fis", this.editarPaqueteForm.get('no_Fotos_Fis')?.value);
    formData.append("no_Fotos_Enm", this.editarPaqueteForm.get('no_Fotos_Enm')?.value);
    formData.append("marco_id", this.editarPaqueteForm.get('marco_id')?.value);
    formData.append("tamano_id", this.editarPaqueteForm.get('tamano_id')?.value);
    formData.append("precio", this.editarPaqueteForm.get('precio')?.value);
    formData.append("tipo_paquete_id", this.editarPaqueteForm.get('tipo_paquete_id')?.value);
    formData.append("usuario_modificacion_id", this.editarPaqueteForm.get('usuario_modificacion_id')?.value);
    formData.append("file", this.editarPaqueteForm.get('file')?.value);


    this.subscription.add(
      this._paqueteService.updatePaquete(this.id, formData).subscribe( data => {
        if (data){
          this._toastr.success("El paquete fue actualizado exitosamente", "Paquete actualizado", {
            positionClass: 'toast-bottom-right'
          });
          this._router.navigate(['/administrador/paquetes'])
        }
      })
    )

  }

  getMarco() {
    this.subscription.add(
      this._marcoService.getMarcos().subscribe(data => {
        this.marcos = data
      })
    );
  }
  getTamanos() {
    this.subscription.add(
      this._tamanoService.getTamanos().subscribe(data => {
        this.tamanos = data;
      })
    );
  }
  getTipoPaquetes() {
    this.subscription.add(
      this._paqueteService.getTipoPaquetes().subscribe(data => {
        this.tipo_paqutes = data;
      })
    );
  }

  getUser(){
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


  onFileSelected(event: any){
    const file = (event.target as HTMLInputElement).files![0];
    this.editarPaqueteForm.patchValue({
      file: file
    });
    this.editarPaqueteForm.get('file')?.updateValueAndValidity()
    var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
			this.urlImage = reader.result;
		}
  }

  changeTamano(value: any) {
    this.tamanos.forEach( element => {
      if (element.nombre == value)
        this.editarPaqueteForm.controls['tamano_id'].setValue(element.id)
    })
  }
  changeTipoPaquete(value: any) {
    this.tipo_paqutes.forEach( element => {
      if (element.nombre == value)
        this.editarPaqueteForm.controls['tipo_paquete_id'].setValue(element.id)
      if (value == "Evento social"){
        this.editarPaqueteForm.controls['marco_id'].setValue(1)
        this.selectedMarco = "Sin Marco";
      }
    })
  }
  changeMarco(value: any) {
    this.marcos.forEach( element => {
      if (element.nombre == value)
        this.editarPaqueteForm.controls['marco_id'].setValue(element.id)
      if (value != "Sin Marco"){
        this.editarPaqueteForm.controls['tipo_paquete_id'].setValue(2)
        this.selectedTipoPaquete = "Sesion fotografica";
      }
    })
  }



  getErrorMessage(field: string): string{
    let message: string = "";
    if(this.editarPaqueteForm.get(field)?.errors?.required){
      message = 'El campo no puede estar vacio';
    }else if (this.editarPaqueteForm.get(field)?.hasError('maxlength')){
      message = 'El campo sobrepasa el tamaño permitido'
    }
    return message;
  }

  isValidField(field: string){
    let campo = this.editarPaqueteForm.get(field)
    return (campo?.touched || campo?.dirty && !campo?.valid);
  }


}


