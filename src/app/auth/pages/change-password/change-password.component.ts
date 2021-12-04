import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { UserResponse } from 'src/app/shared/models/user.interface';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public hidePassword = true;
  public hideNewPassword = true;
  public hideConfirmPassword = true;

  private destroy$ = new Subject<any>();
  public user: UserResponse = null!;
  private subscription: Subscription = new Subscription();


  changeForm = new FormGroup({
    contrasena: new FormControl('', [Validators.required/*, Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')*/]),
    nuevaContrasena: new FormControl('', [Validators.required/*, Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')*/]),
    confirmarContrasena: new FormControl('', [Validators.required/*, Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')*/])
  })


  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  changePassword(){

    this.getUser();

    //TODO Aqui poner el metodo post para cambiar la contraseña
    const formValue = this.changeForm.value;
    this._authService.changePassword(formValue, this.user.id).subscribe( (data: { message: string; }) => {
      if (data.message == "Se ha modificado la contraseña"){
        this._toastr.success('El cambio de contraseña fue realizado exitosamente', "Cambio de contraseña", {
          positionClass: 'toast-bottom-right'
        });
        this._router.navigate(['/auth/login'])
      }
    })



  }
  getUser(){
    this.subscription.add(
      this._authService.user$
        .pipe(takeUntil(this.destroy$))
        .subscribe((user: UserResponse) => {
        if (user) {
          this.user = user;
        }
      })
    );
  }


  getErrorMessage(field: string): string{
    let message: string = "";
    if(this.changeForm.get(field)?.errors?.required){
      message = 'El campo no puede estar vacio';
    }else if (this.changeForm.get(field)?.hasError('pattern')){
      message = 'La contraseña no es valida, debe ser al menos un caracter en mayuscula, uno en minuscula y un numero'
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
    return (campo?.value == campo2?.value);
  }

}
