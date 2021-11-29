import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { MarcosService } from 'src/app/services/marcos.service';
import { PaquetesService } from 'src/app/services/paquetes.service';
import { RecepcionistaService } from 'src/app/services/recepcionista.service';
import { Marco } from 'src/app/shared/models/marco.interface';
import { Paquete } from 'src/app/shared/models/paquete.interface';
import { Tamano } from 'src/app/shared/models/tamanio.interface';
import { TipoPaquete } from 'src/app/shared/models/tipo-paquetes.interface';

@Component({
  selector: 'app-agregarservicios',
  templateUrl: './agregarservicios.component.html',
  styleUrls: ['./agregarservicios.component.css'],
})
export class AgregarserviciosComponent implements OnInit, OnDestroy {
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
    nombre: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
    ape_pat: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
    ape_mat: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
    celular: new FormControl('', [Validators.maxLength(10)]),
    total: new FormControl(123, [Validators.required]),
    tipo_paquete_id: new FormControl('', [Validators.required]),
    paquete_id: new FormControl(0),
    fecha_agendada: new FormControl(''),
    files: new FormControl([Validators.required]),
  });

  public selectedTamano = '';
  tamanos: Tamano[] = [
    { id: 1, nombre: '9 x 13' },
    { id: 2, nombre: '13 x 18' },
    { id: 3, nombre: '15 x 20' },
  ];

  public selectedTipoPaquete = '';
  tipo_paqutes: TipoPaquete[] = [
    {
      id: 1,
      nombre: 'Impresion fotografica',
      descripcion: 'Impresion fotografica',
    },
    {
      id: 2,
      nombre: 'Sesion fotografica',
      descripcion: 'Sesion de fotos de furros',
    },
  ];

  public selectedMarco = '';
  marcos: Marco[] = null!;

  public selectedPaquete = '';
  paquetes: Paquete[] = [];

  closeResult: string | undefined;

  constructor(
    private modalService: NgbModal,
    private marcoService: MarcosService,
    private recepcionistaService: RecepcionistaService,
    private toastr: ToastrService,
    private router: Router,
    private paqueteService: PaquetesService,
    private http: HttpClient,
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    console.log(this.imagesHtml.length);

    this.getMarcos();
    this.getPaquetes();
  }

  agregarServicio() {
    if (this.agregarServicioForm.controls['tipo_paquete_id'].value == 1) {
      //Si selecciono impresion fotografica
      const formServicioImpresion = new FormData();
      formServicioImpresion.append(
        'nombre',
        this.agregarServicioForm.get('nombre')?.value
      );
      formServicioImpresion.append(
        'ape_pat',
        this.agregarServicioForm.get('ape_pat')?.value
      );
      formServicioImpresion.append(
        'ape_mat',
        this.agregarServicioForm.get('ape_mat')?.value
      );
      formServicioImpresion.append(
        'celular',
        this.agregarServicioForm.get('celular')?.value
      );
      formServicioImpresion.append(
        'total',
        this.agregarServicioForm.get('precio')?.value
      );

      formServicioImpresion.append(
        'tipo_paquete_id',
        this.agregarServicioForm.get('tipo_paquete_id')?.value
      );

      for (var i = 0; i < this.images.length; i++) {
        formServicioImpresion.append(`files`, this.images[i].file);
      }
      for (var i = 0; i < this.images.length; i++) {
        formServicioImpresion.append(
          `imagenes_impresion[${i}][tamano_id]`,
          this.images[i].tamano_id
        );
        formServicioImpresion.append(
          `imagenes_impresion[${i}][cantidad_copias]`,
          this.images[i].fotos
        );
        formServicioImpresion.append(
          `imagenes_impresion[${i}][marco_id]`,
          this.images[i].marco_id
        );
      }

      this.subscription.add(
        this.recepcionistaService
          .addServicioImpresion(formServicioImpresion)
          .subscribe((data) => {
            this.toastr.success(
              'Se ha agregado el paquete correctamente',
              'Paquetes agregadas',
              {
                positionClass: 'toast-bottom-right',
              }
            );
            this.router.navigate([`/servicios`]);
          })
      );
    } else {
      const formServicioSesion = new FormData();
      formServicioSesion.append(
        'nombre',
        this.agregarServicioForm.get('nombre')?.value
      );
      formServicioSesion.append(
        'ape_pat',
        this.agregarServicioForm.get('ape_pat')?.value
      );
      formServicioSesion.append(
        'ape_mat',
        this.agregarServicioForm.get('ape_mat')?.value
      );
      formServicioSesion.append(
        'celular',
        this.agregarServicioForm.get('celular')?.value
      );
      formServicioSesion.append(
        'total',
        this.agregarServicioForm.get('precio')?.value
      );
      //Si selecciono sesion fotografica
      formServicioSesion.append(
        'paquete_id',
        this.agregarServicioForm.get('paquete_id')?.value
      );
      formServicioSesion.append(
        'fecha_agendada',
        this.agregarServicioForm.get('fecha_agendada')?.value
      );

      console.log(formServicioSesion.get('nombre'));
      console.log(formServicioSesion.get('ape_pat'));
      console.log(formServicioSesion.get('ape_mat'));
      console.log(formServicioSesion.get('celular'));
      console.log(formServicioSesion.get('total'));
      console.log(formServicioSesion.get('paquete_id'));
      console.log(formServicioSesion.get('fecha_agendada'));


      const formValue = this.agregarServicioForm.value;
      this.subscription.add(
        this.recepcionistaService
          .addServicioSesion(formValue)
          .subscribe((data) => {
            this.toastr.success(
              'Se ha agregado el paquete correctamente',
              'Paquetes agregadas',
              {
                positionClass: 'toast-bottom-right',
              }
            );
            this.router.navigate([`/servicios`]);
          })
      )
    }
  }
  agregarDetalleImagen() {
    //Una vez que el usuario haya seleccionado las opciones que desea

    for (var i = 0; i < this.imagesHtml.length; i++) {
      if (this.imagesHtml[i] === this.imageSelected) {
        this.images[i].fotos =
          this.agregarDetalleImagenForm.controls['no_Fotos'].value;
        this.images[i].marco_id =
          this.agregarDetalleImagenForm.controls['marco_id'].value;
        this.images[i].tamano_id =
          this.agregarDetalleImagenForm.controls['tamano_id'].value;
      }
    }
  }

  getPaquetes() {
    this.subscription.add(
      this.paqueteService.getPaquetes().subscribe((data) => {
        data.forEach((element) => {
          if (element.tipo_paquete_id == 2) this.paquetes.push(element);
        });
      })
    );
  }

  getMarcos() {
    this.subscription.add(
      this.marcoService.getMarcos().subscribe((data) => {
        this.marcos = data;
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
    this.modalService
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
  tamano_id: string;
  fotos: string;
}
