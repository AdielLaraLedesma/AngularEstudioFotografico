import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {

  public hidePassword = true;
  public hideConfirm = true;
  resetToken = ""

  //headers = new HttpHeaders();

  private subscription: Subscription = new Subscription();

  recoverPasswordForm = new FormGroup({
    newPassword: new FormControl('', [Validators.required/*, Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')*/]),
    confirmPassword: new FormControl('', [Validators.required/*, Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')*/])
  })


  constructor(
    private _rutaActiva: ActivatedRoute,
    private _authService: AuthService,
    private _toastr: ToastrService,
    private _router: Router,
  ) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {

    this.resetToken = this._rutaActiva.snapshot.params.id;


  }

  recoverPassword(){
    if(this.recoverPasswordForm.invalid){
      return;
    }

    const headers = new HttpHeaders().set('reset', this.resetToken);

    this.subscription.add(
      this._authService.newPassword(this.recoverPasswordForm.value, headers).subscribe( (data) => {
        this._toastr.success(`Se ha cambiado la contraseña exitosamente`, "Contraseña cambiada", {
          positionClass: 'toast-bottom-right'
        });
        this._router.navigate(['/auth/login'])
      })

    );

  }



  getErrorMessage(field: string): string{
    let message: string = "";
    if(this.recoverPasswordForm.get(field)?.errors?.required){
      message = 'El campo no puede estar vacio';
    }else if (this.recoverPasswordForm.get(field)?.errors?.email){
      message = 'Correo electronico no valido'
    }
    return message;
  }

  isValidField(field: string){
    let campo = this.recoverPasswordForm.get(field)
    return (campo?.touched || campo?.dirty && !campo?.valid);
  }


  isEqualsPasswords(field1: string, field2: string){
    let campo = this.recoverPasswordForm.get(field1)
    let campo2 = this.recoverPasswordForm.get(field2)
    return (campo?.value == campo2?.value);
  }

}
