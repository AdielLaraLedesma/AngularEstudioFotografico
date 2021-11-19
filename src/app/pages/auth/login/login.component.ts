import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Employee } from '../../../shared/models/employee.interface';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit, OnDestroy {
  public hide = true;
  private subscription: Subscription = new Subscription();

  loginForm = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.email]),
    contrasena: new FormControl('', [Validators.required, Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')])
  })

  isLogged = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { 
    //this.authService.isLogged.subscribe(res => {
    //  this.isLogged = res;
    //});
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /*onLogin() {

    if(this.loginForm.invalid){
      return;
    }

    const formValue = this.loginForm.value
    this.authService.login(formValue);
    
  }*/
  onLogin(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const formValue = this.loginForm.value;
    this.subscription.add(
      this.authService.login(formValue).subscribe((res) => {
        if (res) {
          this.router.navigate(['']).then(() => {
            window.location.reload();
          });
          this.toastr.success(res && res.nombre ? `Welcome ${res.nombre}` : 'Logged in!');
        }
      })
    );
  }

  /*doLogout() {
    this.authService.logout();
  }*/




  getErrorMessage(field: string): string{
    let message: string = "";
    if(this.loginForm.get(field)?.errors?.required){
      message = 'You must enter a value';
    }else if (this.loginForm.get(field)?.hasError('pattern')){
      message = 'Not a valid password at least one uppercase, one lowercase and one number'
    }else if (this.loginForm.get(field)?.errors?.email){
      message = 'Not a valid email'
    }
    return message;
  }

  isValidField(field: string){
    let campo = this.loginForm.get(field)
    return (campo?.touched || campo?.dirty && !campo?.valid);
  }

}
