import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MarcosService } from 'src/app/services/marcos.service';
import { Marco } from 'src/app/shared/models/marco.interface';

@Component({
  selector: 'app-marcos-form',
  templateUrl: './marcos-form.component.html',
  styleUrls: ['./marcos-form.component.css']
})
export class MarcosFormComponent implements OnInit {
  //@HostBinding('class') classes = "row";


  agregarMarcoForm = new FormGroup({
    id: new FormControl({value:'', disabled:true}, Validators.required),
    nombre: new FormControl('', [Validators.required, Validators.maxLength(20)])
  })

  marco: Marco = {
    id: 0,
    nombre: ""
  };


  constructor(private empleadoService: MarcosService) { }

  ngOnInit(): void {
  }

  agregarMarco(){
    console.log("Hola")
  }


  getErrorMessage(field: string): string{
    let message: string = "";
    if(this.agregarMarcoForm.get(field)?.errors?.required){
      message = 'El campo no puede estar vacio';
    }else if (this.agregarMarcoForm.get(field)?.hasError('maxlength')){
      message = 'El campo sobrepasa el tamaño permitido'
    }
    return message;
  }

  isValidField(field: string){
    let campo = this.agregarMarcoForm.get(field)
    return (campo?.touched || campo?.dirty && !campo?.valid);
  }

}
