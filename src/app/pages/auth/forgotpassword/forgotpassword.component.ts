import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit, OnDestroy {

  forgotPasswordForm = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.email])
  })

  private subscription: Subscription = new Subscription();


  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
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
      this.authService.forgotPassword(this.forgotPasswordForm.value).subscribe( (data) => {
        this.toastr.success(`Se ha enviado un correo a ${this.forgotPasswordForm.controls['correo'].value} para recuperar la contraseña`, "Correo enviado", {
          positionClass: 'toast-bottom-right'
        });
        this.router.navigate(['/login'])
        

      })

    );




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
