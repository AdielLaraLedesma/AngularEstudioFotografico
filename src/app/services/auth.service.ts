import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { User, UserResponse } from '../shared/models/user.interface';
import { identifierModuleUrl } from '@angular/compiler';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user = new BehaviorSubject<UserResponse>(null!);
  //private user2 = new BehaviorSubject<EmployeeResponse>;

  //private loggedIn = new BehaviorSubject<boolean>(false);



  constructor( 
    private http: HttpClient,
    private toastr: ToastrService,
    private router : Router
    ) {
      //this.getLogin();
      this.checkLogin();
    }

  /*login(authData: Employee) {
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
  }*/
  login(authData: User): Observable<UserResponse | void> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json')
    headers.append("Access-Control-Allow-Origin", "http://localhost:4200")
    headers.append("Access-Control-Allow-Credentials", "true")
    headers.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
    headers.append("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    return this.http
      .post<UserResponse>('/api/usuarios/loginApp', {
        correo: authData.correo,
        contrasena: authData.contrasena
      }, {
        /*withCredentials: true,*/ headers
      })
      .pipe(
        map((user: UserResponse) => {
          this.user.next(user);
          return user;
        }),
        catchError((err) => this.handlerError(err))
      );
  }
  private handlerError(err: { message: any; }): Observable<never> {
    let errorMessage = 'An errror occured retrienving data';
    if (err) {
      errorMessage = `Error: code ${err.message}`;
    }
    //window.alert(errorMessage);
    this.toastr.error(errorMessage);
    return throwError(errorMessage);
  }

  
  

  /*getLogin() {

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
  }*/

  checkLogin(){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json')
    headers.append("Access-Control-Allow-Origin", "http://localhost:4200")
    headers.append("Access-Control-Allow-Credentials", "true")
    headers.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
    headers.append("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

    this.http.get('/api/usuarios/loginApp', {
      /*withCredentials: true,*/ headers: headers
    }).subscribe((res: any) => {
      console.log('hola desde el login')
      this.user.next(res);
    }, (errorResp) => {
      //console.log('no ha iniciado sesión')
      //console.log(errorResp);
      this.user.next(null!);
    });

  }


  /*logout() {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json')
    headers.append("Access-Control-Allow-Origin", "http://localhost:4200")
    headers.append("Access-Control-Allow-Credentials", "true")
    headers.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
    headers.append("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    this.http.post('/api/usuarios/logout', {}, {
      headers: headers
    }).subscribe(() => {
      this.user.next(null!);
      this.router.navigate(["/login"])
    });
  }*/
  /*logout(): void {
    this.user.next(null!);
    this.router.navigate(['/login']);
  }*/
  logout(): Observable<UserResponse | void> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json')
    headers.append("Access-Control-Allow-Origin", "http://localhost:4200")
    headers.append("Access-Control-Allow-Credentials", "true")
    headers.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
    headers.append("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    return this.http
      .post<UserResponse>('/api/usuarios/logout',{
        headers: headers
      })
      .pipe(
        map((res: any) => {
          console.log('hola desde el logout')
          this.user.next(null!);
          return res;
        }),
        catchError((err) => this.handlerError(err))
      );

  }

  /*get isLogged(): Observable<boolean>{
    return this.loggedIn.asObservable();
  }*/

  get user$(): Observable<UserResponse> {
    return this.user.asObservable();
  }

  get userValue(): UserResponse {
    return this.user.getValue();
  }


}
