import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Employee, EmployeeResponse } from '../shared/models/employee.interface';
import { identifierModuleUrl } from '@angular/compiler';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //private user = new BehaviorSubject<EmployeeResponse>(null);

  private loggedIn = new BehaviorSubject<boolean>(false);

  employeeResponse: EmployeeResponse | undefined;


  constructor( 
    private http: HttpClient,
    private toastr: ToastrService,
    private router : Router
    ) {
      this.getLogin();
    }

  login(authData: Employee) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json')
    headers.append("Access-Control-Allow-Origin", "http://localhost:4200")
    headers.append("Access-Control-Allow-Credentials", "true")
    headers.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
    headers.append("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

    this.http.post('/api/usuarios/loginApp',  {
      correo: authData.correo,
      contrasena: authData.contrasena
    }, {
      withCredentials: true, headers: headers
    }).subscribe((resp: any) => {
      this.employeeResponse = resp;
      console.log(this.employeeResponse)
      this.loggedIn.next(true);
      this.toastr.success(resp && resp.nombre ? `Welcome ${resp.nombre}` : 'Logged in!');
      this.router.navigate(["/paquetes"]).then(() => {
        window.location.reload();
      });
    }, (errorResp) => {
      this.loggedIn.next(false);
      errorResp.error ? this.toastr.error('Incorrect email or password.') : this.toastr.error('An unknown error has occured.');
    });
  }
  

  getLogin() {

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json')
    headers.append("Access-Control-Allow-Origin", "http://localhost:4200")
    headers.append("Access-Control-Allow-Credentials", "true")
    headers.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
    headers.append("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

    this.http.get('/api/usuarios/loginApp', {
      withCredentials: true , headers: headers // <=========== important!
    }).subscribe((resp: any) => {
      this.loggedIn.next(resp.loggedIn);
    }, (errorResp) => {
      this.toastr.error('Oops, something went wrong getting the logged in status')
    })
  }

  logout() {
    this.http.post('/api/usuarios/logout', {}, {
      withCredentials: true
    }).subscribe(() => {
      this.loggedIn.next(false);
      this.router.navigate(["/"])
    });
  }

  get isLogged(): Observable<boolean>{
    return this.loggedIn.asObservable();
  }


}
