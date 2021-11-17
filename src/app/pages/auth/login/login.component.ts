import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Empleado } from '../../../interfaces/empleado';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})'))
  })

  isLogged = false;

  empleado: Empleado = {
    email: "",
    password: ""
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { 
    this.authService.isLogged.subscribe(res => {
      this.isLogged = res;
    });
  }

  ngOnInit(): void {
  }

  onLogin() {
    const formValue = this.loginForm.value
    this.authService.login(formValue);
    
  }

  doLogout() {
    this.authService.logout();
  }

}
