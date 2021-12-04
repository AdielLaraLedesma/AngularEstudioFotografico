import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.email])
  })

  private subscription: Subscription = new Subscription();


  constructor(
    private _authService: AuthService,
    private _toastr: ToastrService,
    private _router: Router,
  ) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
  }

  forgotPassword(){


    if(this.forgotPasswordForm.invalid){
      return;
    }


    //TODO Aqui poner el metodo post para olvidar contraseña.
    this.subscription.add(
      this._authService.forgotPassword(this.forgotPasswordForm.value).subscribe( (data) => {
        this._toastr.success(`Se ha enviado un correo a ${this.forgotPasswordForm.controls['correo'].value} para recuperar la contraseña`, "Correo enviado", {
          positionClass: 'toast-bottom-right'
        });
        this._router.navigate(['/auth/login'])
      })
    );

  }


  getErrorMessage(field: string): string{
    let message: string = "";
    if(this.forgotPasswordForm.get(field)?.errors?.required){
      message = 'El campo no puede estar vacio';
    }else if (this.forgotPasswordForm.get(field)?.errors?.email){
      message = 'Correo electronico no valido'
    }
    return message;
  }

  isValidField(field: string){
    let campo = this.forgotPasswordForm.get(field)
    return (campo?.touched || campo?.dirty && !campo?.valid);
  }

}
