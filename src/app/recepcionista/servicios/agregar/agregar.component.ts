import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

/** BOOTSTRAP **/
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

import { Marco } from 'src/app/shared/models/marco.interface';
import { Paquete } from 'src/app/shared/models/paquete.interface';
import { Tamano } from 'src/app/shared/models/tamano.interface';
import { TipoPaquete } from 'src/app/shared/models/tipo-paquetes.interface';

import { MarcosService } from 'src/app/services/marcos.service';
import { PaquetesService } from 'src/app/services/paquetes.service';
import { RecepcionistaService } from 'src/app/services/recepcionista.service';
import { TamanoService } from 'src/app/services/tamano.service';
import { ThrowStmt } from '@angular/compiler';
//import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  private subscription: Subscription = new Subscription();

  public url: any;
  public imageSrc = 'assets/img/image-not-found.png';

  showBtnAgregarImagenesyPrecio = false;
  showSeleccionarPaquetes = false;

  images: imageStructure[] = [];
  imagesHtml: string[] = [];
  imageSelected: string = '';

  agregarDetalleImagenForm = new FormGroup({
    marco_id: new FormControl('', [Validators.required]),
    tamano_id: new FormControl('', [Validators.required]),
    no_Fotos: new FormControl(0, [Validators.required]),
  });

  agregarServicioForm = new FormGroup({
    nombre: new FormControl('', [Validators.required,Validators.maxLength(20),]),
    ape_pat: new FormControl('', [Validators.required,Validators.maxLength(20),]),
    ape_mat: new FormControl('', [Validators.required,Validators.maxLength(20),]),
    celular: new FormControl('', [Validators.maxLength(10)]),
    total: new FormControl(0, [Validators.required]),
    tipo_paquete_id: new FormControl('', [Validators.required]),
    paquete_id: new FormControl(0),
    fecha_agendada: new FormControl(''),
    files: new FormControl([Validators.required]),
  });

  public selectedTamano = '';
  tamanos: Tamano[] = [];

  public selectedTipoPaquete = '';
  tipo_paqutes: TipoPaquete[] = [
    { id: 1, nombre: 'Impresion fotografica',  descripcion: 'Impresion fotografica'     },
    { id: 2, nombre: 'Sesion fotografica',     descripcion: 'Sesion de fotos de furros' },
  ];

  public selectedMarco = '';
  marcos: Marco[] = null!;

  public selectedPaquete = '';
  paquetes: Paquete[] = [];

  closeResult: string | undefined;

  constructor(
    private _modalService: NgbModal,
    private _marcoService: MarcosService,
    private _tamanoService: TamanoService,
    private _recepcionistaService: RecepcionistaService,
    private _toastr: ToastrService,
    private _router: Router,
    private _paqueteService: PaquetesService
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.getMarcos();
    this.getTamanos();
    this.getPaquetes();
  }
  agregarServicio() {
    if (this.agregarServicioForm.controls['tipo_paquete_id'].value == 1) {
      //Si selecciono impresion fotografica
      const formServicioImpresion = new FormData();
      formServicioImpresion.append('nombre',this.agregarServicioForm.get('nombre')?.value);
      formServicioImpresion.append('ape_pat',this.agregarServicioForm.get('ape_pat')?.value);
      formServicioImpresion.append('ape_mat',this.agregarServicioForm.get('ape_mat')?.value);
      formServicioImpresion.append('celular',this.agregarServicioForm.get('celular')?.value);
      formServicioImpresion.append('total',this.agregarServicioForm.get('total')?.value);
      formServicioImpresion.append('tipo_paquete_id',this.agregarServicioForm.get('tipo_paquete_id')?.value);

      for (var i = 0; i < this.images.length; i++) {
        formServicioImpresion.append(`files`, this.images[i].file);
      }
      for (var i = 0; i < this.images.length; i++) {
        formServicioImpresion.append(`imagenes_impresion[${i}][tamano_id]`,this.images[i].tamano_id);
        formServicioImpresion.append(`imagenes_impresion[${i}][cantidad_copias]`,this.images[i].fotos);
        formServicioImpresion.append(`imagenes_impresion[${i}][marco_id]`,this.images[i].marco_id);
      }

      this.subscription.add(
        this._recepcionistaService
          .addServicioImpresion(formServicioImpresion)
          .subscribe((data) => {
            this._toastr.success(
              'Se ha agregado el paquete correctamente',
              'Paquetes agregadas',
              {
                positionClass: 'toast-bottom-right',
              }
            );
            this._router.navigate([`/recepcionista/servicios`]);
          })
      );
    } else {
      const formValue = this.agregarServicioForm.value;
      this.subscription.add(
        this._recepcionistaService
          .addServicioSesion(formValue)
          .subscribe((data) => {
            this._toastr.success(
              'Se ha agregado el paquete correctamente',
              'Paquetes agregadas',
              {
                positionClass: 'toast-bottom-right',
              }
            );
            this._router.navigate([`/recepcionista/servicios`]);
          })
      );
    }
  }
  agregarDetalleImagen() {
    //Una vez que el usuario haya seleccionado las opciones que desea

    for (var i = 0; i < this.imagesHtml.length; i++) {
      if (this.imagesHtml[i] === this.imageSelected) {
        this.images[i].fotos =this.agregarDetalleImagenForm.controls['no_Fotos'].value;
        this.images[i].marco_id =this.agregarDetalleImagenForm.controls['marco_id'].value;
        this.marcos.forEach((element) => {
          if (
            this.agregarDetalleImagenForm.controls['marco_id'].value == element.id
          )
          this.images[i].marco_nombre = element.nombre;
        });

        this.images[i].tamano_id =this.agregarDetalleImagenForm.controls['tamano_id'].value;

        this.tamanos.forEach((element) => {
          if (
            this.agregarDetalleImagenForm.controls['tamano_id'].value == element.id
          )
            this.images[i].tamano_nombre = element.nombre;
        });
      }
    }

    let total = 0;

      this.images.forEach((imagen) => {

        let totalMarco = 0;
        let totalTamano = 0;

        this.marcos.forEach((marco) => {
          if (imagen.marco_nombre == marco.nombre)    totalMarco = marco.precio;
        });
        this.tamanos.forEach((tamano) => {
          if (imagen.tamano_nombre == tamano.nombre)  totalTamano = tamano.precio;
        });
        let temp =+ imagen.fotos
        total += (totalMarco+ totalTamano) * temp;
      });

      this.agregarServicioForm.controls['total'].setValue(total)


  }

  getPaquetes() {
    this.subscription.add(
      this._paqueteService.getPaquetes().subscribe((data) => {
        data.forEach((element) => {
          if (element.tipo_paquete_id == 2) this.paquetes.push(element);
        });
      })
    );
  }

  getMarcos() {
    this.subscription.add(
      this._marcoService.getMarcos().subscribe((data) => {
        this.marcos = data;
      })
    );
  }
  getTamanos() {
    this.subscription.add(
      this._tamanoService.getTamanos().subscribe((data) => {
        this.tamanos = data;
      })
    );
  }

  onImageSelected(event: any) {
    for (var i = 0; i < event.target.files.length; i++) {
      //this.images.push(event.target.files[i]);

      var test: imageStructure = {
        file: event.target.files[i],
        marco_id: '',
        tamano_id: '',
        fotos: '',
        marco_nombre: '',
        tamano_nombre: '',
      };
      this.images.push(test);

      const readerImage = new FileReader();
      readerImage.onload = (event: any) => {
        this.imagesHtml.push(event.target.result);
      };
      readerImage.readAsDataURL(event.target.files[i]);
    }
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

    for (var i = 0; i < this.imagesHtml.length; i++) {
      if (this.imagesHtml[i] === this.imageSelected) {
        if (this.images[i].marco_id == '') {
          this.agregarDetalleImagenForm.controls['marco_id'].setValue('');
          this.selectedMarco = '';
        } else {
          this.agregarDetalleImagenForm.controls['marco_id'].setValue(
            this.images[i].marco_id
          );
          this.selectedMarco = this.images[i].marco_nombre;
        }

        if (this.images[i].tamano_id == '') {
          this.agregarDetalleImagenForm.controls['tamano_id'].setValue('');
          this.selectedTamano = '';
        } else {
          this.agregarDetalleImagenForm.controls['tamano_id'].setValue(
            this.images[i].tamano_id
          );
          this.selectedTamano = '';
        }

        if (this.images[i].fotos == '')
          this.agregarDetalleImagenForm.controls['no_Fotos'].setValue(0);
        else
          this.agregarDetalleImagenForm.controls['no_Fotos'].setValue(
            this.images[i].fotos
          );
      }
    }

    this._modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  changeTamano(value: any) {
    this.tamanos.forEach((element) => {
      if (element.nombre == value)
        this.agregarDetalleImagenForm.controls['tamano_id'].setValue(
          element.id
        );
    });
  }
  changeTipoPaquete(value: any) {
    this.tipo_paqutes.forEach((element) => {
      if (element.nombre == value)
        this.agregarServicioForm.controls['tipo_paquete_id'].setValue(
          element.id
        );
    });
    if (this.agregarServicioForm.controls['tipo_paquete_id'].value == 1) {
      this.showBtnAgregarImagenesyPrecio = true;
      this.showSeleccionarPaquetes = false;
    } else {
      this.showBtnAgregarImagenesyPrecio = false;
      this.showSeleccionarPaquetes = true;
    }
  }

  changePaquete(value: any) {
    this.tipo_paqutes.forEach((element) => {
      if (element.nombre == value)
        this.agregarServicioForm.controls['paquete_id'].setValue(element.id);
    });
  }
  changeMarco(value: any) {
    this.marcos.forEach((element) => {
      if (element.nombre == value)
        this.agregarDetalleImagenForm.controls['marco_id'].setValue(element.id);
    });
  }

  getErrorMessage(field: string): string {
    let message: string = '';
    if (this.agregarServicioForm.get(field)?.errors?.required) {
      message = 'El campo no puede estar vacio';
    } else if (this.agregarServicioForm.get(field)?.hasError('maxlength')) {
      message = 'El campo sobrepasa el tamaño permitido';
    }
    return message;
  }

  isValidField(field: string) {
    let campo = this.agregarServicioForm.get(field);
    return campo?.touched || (campo?.dirty && !campo?.valid);
  }
}
interface imageStructure {
  file: File;
  marco_id: string;
  marco_nombre: string;
  tamano_id: string;
  tamano_nombre: string;
  fotos: string;
}
