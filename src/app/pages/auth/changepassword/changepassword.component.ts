import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  public hidePassword = true;
  public hideNewPassword = true;
  public hideConfirmPassword = true;


  changeForm = new FormGroup({
    contrasena: new FormControl('', [Validators.required, Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]),
    nuevaContrasena: new FormControl('', [Validators.required, Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]),
    confirmarContrasena: new FormControl('', [Validators.required, Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')])
  })


  constructor() { }

  ngOnInit(): void {
  }

  changePassword(){

    
    if(this.changeForm.invalid){
      return;
    }

    
    //TODO Aqui poner el metodo post para cambiar la contraseña




  }


  getErrorMessage(field: string): string{
    let message: string = "";
    if(this.changeForm.get(field)?.errors?.required){
      message = 'You must enter a value';
    }else if (this.changeForm.get(field)?.hasError('pattern')){
      message = 'Not a valid password at least one uppercase, one lowercase and one number'
    }
    return message;
  }

  isValidField(field: string){
    let campo = this.changeForm.get(field)
    return (campo?.touched || campo?.dirty && !campo?.valid);
  }

  isEqualsPasswords(field1: string, field2: string){
    let campo = this.changeForm.get(field1)
    let campo2 = this.changeForm.get(field2)
    //if (campo?.value == campo2?.value)
    

    return (campo?.value == campo2?.value);
  }

}