import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public hide = true;
  private subscription: Subscription = new Subscription();

  loginForm = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.email]),
    contrasena: new FormControl('', [
      Validators.required /*, Validators.pattern("/^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/")*/,


    ]),
    frontLogin: new FormControl(true, [Validators.required])
  });

  isLogged = false;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _toastr: ToastrService
  ) {}

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onLogin(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const formValue = this.loginForm.value;
    this.subscription.add(
      this._authService.loginJWT(formValue).subscribe((res) => {
        if (res) {
          this._router.navigate(['/auth/home']).then(() => {
            window.location.reload();
          });
          this._toastr.success(`Bienvenido`, "Inicio de sesión", {
            positionClass: 'toast-bottom-right'
          });

        }
      })
    );
  }

  getErrorMessage(field: string): string {
    let message: string = '';
    if (this.loginForm.get(field)?.errors?.required) {
      message = 'El campo no puede estar vacio';
    } else if (this.loginForm.get(field)?.hasError('pattern')) {
      message ='La contraseña no es valida, debe ser al menos un caracter en mayuscula, uno en minuscula y un numero';
    } else if (this.loginForm.get(field)?.errors?.email) {
      message = 'Correo electronico no valido';
    }
    return message;
  }

  isValidField(field: string) {
    let campo = this.loginForm.get(field);
    return campo?.touched || (campo?.dirty && !campo?.valid);
  }
}
