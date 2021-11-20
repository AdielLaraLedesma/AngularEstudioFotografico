import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MarcosService } from 'src/app/services/marcos.service';
import { Marco } from 'src/app/shared/models/marco.interface';
import { Paquete } from 'src/app/shared/models/paquete.interface';
import { Tamano } from 'src/app/shared/models/tamanio.interface';
import { TipoPaquete } from 'src/app/shared/models/tipo-paquetes.interface';

import { PaquetesService } from '../../../services/paquetes.service'

@Component({
  selector: 'app-paquete-form',
  templateUrl: './paquete-form.component.html',
  styleUrls: ['./paquete-form.component.css']
})
export class PaqueteFormComponent implements OnInit {
  @HostBinding('class') classes = "row";


  public selectedTamano = 0;
  tamanos: Tamano[]=[{id: 1,nombre: '9 x 13'},{id: 2, nombre: '13 x 18'},{id: 3, nombre: '15 x 20'}];

  public selectedTipoPaquete = 0;
  tipo_paqutes : TipoPaquete[] = [
                  {id: 1, nombre: 'Evento social', descripcion: 'Fiesta de despedida del aviles del tec :c no paso integrador'},
                  {id: 2, nombre: 'Sesion fotografica', descripcion: 'Sesion de fotos de furros'},
                  {id: 3, nombre: 'Impresion fotografica', descripcion: 'Impresion fotografica'}];

  public selectedMarco = 0;
  marcos: Marco[] = null!;



  agregarPaqueteForm = new FormGroup({
    id: new FormControl({value:'', disabled:true}, Validators.required),
    nombre: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    descripcion: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    hrs_video: new FormControl('', [Validators.maxLength(10)]),
    no_fotos_dig: new FormControl('', [Validators.required]),
    no_fotos_fis: new FormControl('', [Validators.required]),
    marco_id: new FormControl('', [Validators.required]), 
    tamano_id: new FormControl('', [Validators.required]),
    precio: new FormControl('', [Validators.required]), 
    tipo_paquete_id: new FormControl('', [Validators.required]), 
    url_imagen: new FormControl('', [Validators.maxLength(300)])     

  })

  constructor(
    private paqueteService: PaquetesService,
    private toastr: ToastrService,
    private marcoService: MarcosService
    ) { }

  ngOnInit(): void {

    this.marcoService.getMarcos().subscribe( data => {
      this.marcos = data
    })


  }

  agregarPaquetes(){
    
    const formValue = this.agregarPaqueteForm.value;
    /*this.paqueteService.updatePaquete(this.id, formValue).subscribe( data => {
      if (data){
        this.toastr.success("Paquete actualizado correctamente!!!!");
      }
    })*/

  }

  changeTamano(value: any) {
    this.agregarPaqueteForm.controls['tamano_id'].setValue(value)
  }
  changeTipoPaquete(value: any) {
    this.agregarPaqueteForm.controls['tipo_paquete_id'].setValue(value)
  }
  changeMarco(value: any) {
    this.agregarPaqueteForm.controls['marco_id'].setValue(value)
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
