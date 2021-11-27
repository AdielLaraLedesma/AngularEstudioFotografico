import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { MarcosService } from 'src/app/services/marcos.service';
import { RecepcionistaService } from 'src/app/services/recepcionista.service';
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


  


  images: imageStructure[] = [];
  imagesHtml: string[] = [];
  imageSelected: string = "";


  agregarDetalleImagenForm = new FormGroup({
    marco_id: new FormControl('', [Validators.required]), 
    tamano_id: new FormControl('', [Validators.required]),
    no_Fotos: new FormControl(0, [Validators.required]),
  })

  agregarServicioForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    ape_pat: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    ape_mat: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    celular: new FormControl('', [Validators.maxLength(10)]),
    precio: new FormControl(123, [Validators.required]), 
    tipo_paquete_id: new FormControl('', [Validators.required]),   
    files: new FormControl([Validators.required]),
  })

  public selectedTamano = '';
  tamanos: Tamano[]=[{id: 1,nombre: '9 x 13'},{id: 2, nombre: '13 x 18'},{id: 3, nombre: '15 x 20'}];

  public selectedTipoPaquete = '';
  tipo_paqutes : TipoPaquete[] = [
                  {id: 1, nombre: 'Impresion fotografica', descripcion: 'Impresion fotografica'},
                  {id: 2, nombre: 'Sesion fotografica', descripcion: 'Sesion de fotos de furros'}];

  public selectedMarco = '';
  marcos: Marco[] = null!;

  closeResult: string | undefined;

  constructor(
    private modalService: NgbModal,
    private marcoService: MarcosService,
    private recepcionistaService: RecepcionistaService
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
    const form = new FormData();

    form.append('nombre',this.agregarServicioForm.get('nombre')?.value);
    form.append('ape_pat',this.agregarServicioForm.get('ape_pat')?.value);
    form.append('ape_mat',this.agregarServicioForm.get('ape_mat')?.value);
    form.append('nombre',this.agregarServicioForm.get('nombre')?.value);
    form.append('celular',this.agregarServicioForm.get('celular')?.value);
    form.append('precio',this.agregarServicioForm.get('precio')?.value);
    form.append('tipo_paquete_id',this.agregarServicioForm.get('tipo_paquete_id')?.value);
    for (var i = 0; i < this.images.length; i++) {
      form.append(`file[${i}]`, this.images[i].file);
      form.append(`file[${i}].tamano_id`, this.images[i].tamano_id);
      form.append(`file[${i}].fotos`, this.images[i].fotos);
      form.append(`file[${i}].marco_id`, this.images[i].marco_id);

    }

    console.log(form.get('file[0]'))
    console.log(form.get('file[1]'))
    console.log(form.get('file[2]'))

    //TODO Para enviar peticion al back
    this.subscription.add(
      this.recepcionistaService.addServicio(form).subscribe( data => {
        console.log(data)
      })
    )


  }
  agregarDetalleImagen(){
    //Una vez que el usuario haya seleccionado las opciones que desea

    for (var i = 0; i < this.imagesHtml.length; i++) {
      if (this.imagesHtml[i] === this.imageSelected) {
        this.images[i].fotos = this.agregarDetalleImagenForm.controls['no_Fotos'].value;
        this.images[i].marco_id = this.agregarDetalleImagenForm.controls['marco_id'].value;
        this.images[i].tamano_id = this.agregarDetalleImagenForm.controls['tamano_id'].value;

      }

    }
    console.log(this.images)


  }


  onImageSelected(event: any) {
    for (var i = 0; i < event.target.files.length; i++) {
      //this.images.push(event.target.files[i]);

      var test: imageStructure = {file: event.target.files[i], marco_id: "", tamano_id: "", fotos: ""};
      console.log(test)
      this.images.push(test)

      const readerImage = new FileReader();
      readerImage.onload = (event: any) => {
        this.imagesHtml.push(event.target.result);
      };
      readerImage.readAsDataURL(event.target.files[i]);
    }
    console.log(this.images)
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


  open(content: any, element: string) {
    this.imageSelected = element;
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
        this.agregarDetalleImagenForm.controls['tamano_id'].setValue(element.id)
        
    })
  }
  changeTipoPaquete(value: any) {
    console.log(value)
    this.tipo_paqutes.forEach( element => {
      if (element.nombre == value)
        this.agregarServicioForm.controls['tipo_paquete_id'].setValue(element.id)
    })
  }
  changeMarco(value: any) {
    this.marcos.forEach( element => {
      if (element.nombre == value)
        this.agregarDetalleImagenForm.controls['marco_id'].setValue(element.id)
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
interface imageStructure {
  file: File;
  marco_id: string;
  tamano_id: string;
  fotos: string;
}
