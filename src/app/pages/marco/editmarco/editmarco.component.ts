import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editmarco',
  templateUrl: './editmarco.component.html',
  styleUrls: ['./editmarco.component.css']
})
export class EditmarcoComponent implements OnInit {

  id: string =  "";

  editarMarcoForm = new FormGroup({
    id: new FormControl({value:'', disabled:true}, Validators.required),
    nombre: new FormControl('', [Validators.required, Validators.maxLength(20)])
  })


  constructor(
    private rutaActiva: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.rutaActiva.snapshot.params.id;

  }


  editarMarco(){
    const formValue = this.editarMarcoForm.value;
    

  }

  getErrorMessage(field: string): string{
    let message: string = "";
    if(this.editarMarcoForm.get(field)?.errors?.required){
      message = 'El campo no puede estar vacio';
    }else if (this.editarMarcoForm.get(field)?.hasError('maxlength')){
      message = 'El campo sobrepasa el tamaño permitido'
    }else if (this.editarMarcoForm.get(field)?.hasError('minlength')){
      message = 'El campo no alcanza el minimo permitido'
    }else if (this.editarMarcoForm.get(field)?.errors?.email){
      message = 'No es un email valido'
    }
    return message;
  }

  isValidField(field: string){
    let campo = this.editarMarcoForm.get(field)
    return (campo?.touched || campo?.dirty && !campo?.valid);
  }


}
