import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarPaqueteComponent implements OnInit, OnDestroy {

  @HostBinding('class') classes = "row justify-content-md-center align-items-center";


  public url: any;
  public imageSrc = 'assets/img/image-not-found.png'

  private destroy$ = new Subject<any>();
  public user: UserResponse = null!;
  private subscription: Subscription = new Subscription();

  public selectedFile: File =  null!;

  public selectedTamano = '';
  tamanos: Tamano[] = null!;

  public selectedTipoPaquete = '';
  tipo_paqutes : TipoPaquete[] = null!;
  /*tipo_paqutes : TipoPaquete[] = [
                  {id: 1, nombre: 'Evento social', descripcion: 'Fiesta de despedida del aviles del tec :c no paso integrador'},
                  {id: 2, nombre: 'Sesion fotografica', descripcion: 'Sesion de fotos de furros'}];*/

  public selectedMarco = '';
  marcos: Marco[] = null!;


  agregarPaqueteForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    descripcion: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    hrs_Video: new FormControl('', [Validators.maxLength(10)]),
    no_Fotos_Dig: new FormControl(0, [Validators.required]),
    no_Fotos_Fis: new FormControl(0, [Validators.required]),
    no_Fotos_Enm: new FormControl(0, [Validators.required]),
    marco_id: new FormControl('', [Validators.required]),
    tamano_id: new FormControl('', [Validators.required]),
    precio: new FormControl('', [Validators.required]),
    tipo_paquete_id: new FormControl('', [Validators.required]),
    file: new FormControl()

  })

  constructor(
    private _paqueteService: PaquetesService,
    private _toastr: ToastrService,
    private _router: Router,
    private _marcoService: MarcosService,
    private _tamanoService: TamanoService,
    private _authService: AuthService
    ) { }

  ngOnInit(): void {
    this.getUser();
    this.getMarcos();
    this.getTipoPaquetes();
    this.getTamanos();

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.destroy$.next({});
    this.destroy$.complete();
  }

  agregarPaquetes(){
    var formData: any = new FormData();
    formData.append("nombre", this.agregarPaqueteForm.get('nombre')?.value);
    formData.append("descripcion", this.agregarPaqueteForm.get('descripcion')?.value);
    formData.append("hrs_Video", this.agregarPaqueteForm.get('hrs_Video')?.value);
    formData.append("no_Fotos_Dig", this.agregarPaqueteForm.get('no_Fotos_Dig')?.value);
    formData.append("no_Fotos_Fis", this.agregarPaqueteForm.get('no_Fotos_Fis')?.value);
    formData.append("no_Fotos_Enm", this.agregarPaqueteForm.get('no_Fotos_Enm')?.value);
    formData.append("marco_id", this.agregarPaqueteForm.get('marco_id')?.value);
    formData.append("tamano_id", this.agregarPaqueteForm.get('tamano_id')?.value);
    formData.append("precio", this.agregarPaqueteForm.get('precio')?.value);
    formData.append("tipo_paquete_id", this.agregarPaqueteForm.get('tipo_paquete_id')?.value);
    formData.append("usuario_registro_id", this.user.id);
    formData.append("file", this.agregarPaqueteForm.get('file')?.value);

    this._paqueteService.savePaquete(formData).subscribe( data => {
      if (data){
        this._toastr.success("El paquete fue agregado exitosamente", "Paquete agregado", {
          positionClass: 'toast-bottom-right'
        });
        this._router.navigate(['/administrador/paquetes'])
      }
    })

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

  changeTamano(value: any) {
    this.tamanos.forEach( element => {
      if (element.nombre == value)
        this.agregarPaqueteForm.controls['tamano_id'].setValue(element.id)
    })
  }


  changeTipoPaquete(value: any) {
    this.tipo_paqutes.forEach( element => {
      if (element.nombre == value)
        this.agregarPaqueteForm.controls['tipo_paquete_id'].setValue(element.id)
      if (value == "Evento social"){
        this.agregarPaqueteForm.controls['marco_id'].setValue(1)
        this.selectedMarco = "Sin Marco";
      }
    })
  }
  changeMarco(value: any) {
    this.marcos.forEach( element => {
      if (element.nombre == value)
        this.agregarPaqueteForm.controls['marco_id'].setValue(element.id)
      if (value != "Sin Marco"){
        this.agregarPaqueteForm.controls['tipo_paquete_id'].setValue(2)
        this.selectedTipoPaquete = "Sesion fotografica";
      }
    })
  }
  getMarcos() {
    this._marcoService.getMarcos().subscribe( data => {
      this.marcos = data
    })
  }

  getTamanos() {
    this.subscription.add(
      this._tamanoService.getTamanos().subscribe((data) => {
        this.tamanos = data;
      })
    );
  }
  getTipoPaquetes() {
    this.subscription.add(
      this._paqueteService.getTipoPaquetes().subscribe((data) => {
        this.tipo_paqutes = data;
      })
    );
  }

  onFileSelected(event: any){
    const file = (event.target as HTMLInputElement).files![0];
    this.agregarPaqueteForm.patchValue({
      file: file
    });
    this.agregarPaqueteForm.get('file')?.updateValueAndValidity()
    //this.url = URL.createObjectURL(event.target.files[0]);

    var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
			this.url = reader.result;
		}




  }




  getErrorMessage(field: string): string{
    let message: string = "";
    if(this.agregarPaqueteForm.get(field)?.errors?.required){
      message = 'El campo no puede estar vacio';
    }else if (this.agregarPaqueteForm.get(field)?.hasError('maxlength')){
      message = 'El campo sobrepasa el tamaño permitido'
    }
    return message;
  }

  isValidField(field: string){
    let campo = this.agregarPaqueteForm.get(field)
    return (campo?.touched || campo?.dirty && !campo?.valid);
  }


}
