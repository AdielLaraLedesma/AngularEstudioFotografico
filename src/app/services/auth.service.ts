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

  constructor( 
    private http: HttpClient,
    private toastr: ToastrService,
    private router : Router
    ) {
      this.checkLogin();
    }


  login(authData: User): Observable<UserResponse | void> {
    return this.http
      .post<UserResponse>('/api/usuarios/loginApp', {
        correo: authData.correo,
        contrasena: authData.contrasena
      })
      .pipe(
        map((user: any) => {
          this.user.next(user);
          console.log(user)
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

  
  checkLogin(){
    this.http.get('/api/usuarios/loginApp').subscribe((res: any) => {
      this.user.next(res);
    }, (errorResp) => {
      console.log('no ha iniciado sesión')
      this.user.next(null!);
    });

  }

  logout(): Observable<UserResponse | void> {
    return this.http
      .post<UserResponse>('/api/usuarios/logout',{})
      .pipe(
        map((res: any) => {
          this.user.next(null!);
          return res;
        }),
        catchError((err) => this.handlerError(err))
      );

  }

  changePassword(user: any, id: number): any{
    return this.http
      .put<any>(`/api/usuarios/cambiarContrasena/${id}`, user)
      .pipe(
        map((res: any) => {
        return res;
      }),
      catchError((err) => this.handlerError(err))
    );
  }

  forgotPassword(form: any){
    return this.http
      .put<any>(`/api/usuarios/forgot-password`, form)
      .pipe(
        map((res: any) => {
        return res;
      }),
      catchError((err) => this.handlerError(err))
    );
  }

  newPassword(form: any, headers: any){
    return this.http
      .put<any>(`/api/usuarios/new-password`, form, {headers})
      .pipe(
        map((res: any) => {
        return res;
      }),
      catchError((err) => this.handlerError(err))
    );
  }


 

  get user$(): Observable<UserResponse> {
    return this.user.asObservable();
  }

  get userValue(): UserResponse {
    return this.user.getValue();
  }


}
