import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recoverpassword',
  templateUrl: './recoverpassword.component.html',
  styleUrls: ['./recoverpassword.component.css']
})
export class RecoverpasswordComponent implements OnInit {

  recoverPasswordForm = new FormGroup({
    contrasena: new FormControl('', [Validators.required, Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]),
    confirmarContrasena: new FormControl('', [Validators.required, Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]),
    codigo: new FormControl('', [Validators.required])
  })


  constructor() { }

  ngOnInit(): void {
  }

  recoverPassword(){

    
    if(this.recoverPasswordForm.invalid){
      return;
    }

    
    //TODO Aqui poner el metodo post para recuperar contraseña




  }



  getErrorMessage(field: string): string{
    let message: string = "";
    if(this.recoverPasswordForm.get(field)?.errors?.required){
      message = 'You must enter a value';
    }else if (this.recoverPasswordForm.get(field)?.errors?.email){
      message = 'Not a valid email'
    }
    return message;
  }

  isValidField(field: string){
    let campo = this.recoverPasswordForm.get(field)
    return (campo?.touched || campo?.dirty && !campo?.valid);
  }

}
