import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { MarcosService } from 'src/app/services/marcos.service';
import { Marco } from 'src/app/shared/models/marco.interface';
import { Tamano } from 'src/app/shared/models/tamanio.interface';
import { TipoPaquete } from 'src/app/shared/models/tipo-paquetes.interface';

@Component({
  selector: 'app-agregarservicios',
  templateUrl: './agregarservicios.component.html',
  styleUrls: ['./agregarservicios.component.css']
})
export class AgregarserviciosComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();


  public url: any;
  public imageSrc = 'assets/img/image-not-found.png' 

  agregarDetalleImagenForm = new FormGroup({
    marco_id: new FormControl('', [Validators.required]), 
    tamano_id: new FormControl('', [Validators.required]),
    no_Fotos: new FormControl(0, [Validators.required]),
  })

  agregarServicioForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    ape_pat: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    ape_mat: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    descripcion: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    hrs_Video: new FormControl('', [Validators.maxLength(10)]),
    no_Fotos_Dig: new FormControl(0, [Validators.required]),
    no_Fotos_Fis: new FormControl(0, [Validators.required]),
    no_Fotos_Enm: new FormControl(0, [Validators.required]),
    marco_id: new FormControl('', [Validators.required]), 
    tamano_id: new FormControl('', [Validators.required]),
    precio: new FormControl(123, [Validators.required]), 
    tipo_paquete_id: new FormControl('', [Validators.required]),   
    file: new FormControl()

  })

  public selectedTamano = '';
  tamanos: Tamano[]=[{id: 1,nombre: '9 x 13'},{id: 2, nombre: '13 x 18'},{id: 3, nombre: '15 x 20'}];

  public selectedTipoPaquete = '';
  tipo_paqutes : TipoPaquete[] = [
                  {id: 1, nombre: 'Evento social', descripcion: 'Fiesta de despedida del aviles del tec :c no paso integrador'},
                  {id: 2, nombre: 'Sesion fotografica', descripcion: 'Sesion de fotos de furros'}];

  public selectedMarco = '';
  marcos: Marco[] = null!;

  closeResult: string | undefined;

  constructor(
    private modalService: NgbModal,
    private marcoService: MarcosService
  ) { }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription.add(
    this.marcoService.getMarcos().subscribe( data => {
      this.marcos = data
    })
    );
  }

  agregarServicio(){

  }
  agregarDetalleImagen(){
    console.log("Hola")
  }


  onFileSelected(event: any){
    const file = (event.target as HTMLInputElement).files![0];
    this.agregarServicioForm.patchValue({
      file: file
    });
    this.agregarServicioForm.get('file')?.updateValueAndValidity()
    var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
			this.url = reader.result; 
		}
  }


  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  changeTamano(value: any) {
    console.log("hola")
    this.tamanos.forEach( element => {
      if (element.nombre == value)
        this.agregarServicioForm.controls['tamano_id'].setValue(element.id)
    })
  }
  changeTipoPaquete(value: any) {
    console.log(value)
    this.tipo_paqutes.forEach( element => {
      if (element.nombre == value)
        this.agregarServicioForm.controls['tipo_paquete_id'].setValue(element.id)
      if (value == "Evento social"){
        this.agregarServicioForm.controls['marco_id'].setValue(1)
        this.selectedMarco = "Sin Marco";
        //this.agregarPaqueteForm.get('marco_id')?.disable
        //TODO
        //Inhabilitar Marco
      }else{
        //TODO
        //Habilitar Marco formGroup
      }
    })
  }
  changeMarco(value: any) {
    this.marcos.forEach( element => {
      if (element.nombre == value)
        this.agregarServicioForm.controls['marco_id'].setValue(element.id)
      if (value != "Sin Marco"){
        this.agregarServicioForm.controls['tipo_paquete_id'].setValue(2)
        this.selectedTipoPaquete = "Sesion fotografica";
      }
    })
  }



  getErrorMessage(field: string): string{
    let message: string = "";
    if(this.agregarServicioForm.get(field)?.errors?.required){
      message = 'El campo no puede estar vacio';
    }else if (this.agregarServicioForm.get(field)?.hasError('maxlength')){
      message = 'El campo sobrepasa el tamaño permitido'
    }
    return message;
  }

  isValidField(field: string){
    let campo = this.agregarServicioForm.get(field)
    return (campo?.touched || campo?.dirty && !campo?.valid);
  }


}
