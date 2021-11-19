import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Paquete } from 'src/app/shared/models/paquete.interface';

import { PaquetesService } from '../../../services/paquetes.service'

@Component({
  selector: 'app-paquete-form',
  templateUrl: './paquete-form.component.html',
  styleUrls: ['./paquete-form.component.css']
})
export class PaqueteFormComponent implements OnInit {

  @HostBinding('class') classes = "row";

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
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
  }

  agregarPaquetes(){
    
    const formValue = this.agregarPaqueteForm.value;
    /*this.paqueteService.updatePaquete(this.id, formValue).subscribe( data => {
      if (data){
        this.toastr.success("Paquete actualizado correctamente!!!!");
      }
    })*/

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
