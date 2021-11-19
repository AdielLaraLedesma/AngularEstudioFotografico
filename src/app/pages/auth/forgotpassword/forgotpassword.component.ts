import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  forgotPasswordForm = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.email])
  })


  constructor() { }

  ngOnInit(): void {
  }

  forgotPassword(){

    
    if(this.forgotPasswordForm.invalid){
      return;
    }

    
    //TODO Aqui poner el metodo post para olvidar contraseña.




  }


  getErrorMessage(field: string): string{
    let message: string = "";
    if(this.forgotPasswordForm.get(field)?.errors?.required){
      message = 'You must enter a value';
    }else if (this.forgotPasswordForm.get(field)?.errors?.email){
      message = 'Not a valid email'
    }
    return message;
  }

  isValidField(field: string){
    let campo = this.forgotPasswordForm.get(field)
    return (campo?.touched || campo?.dirty && !campo?.valid);
  }

}
