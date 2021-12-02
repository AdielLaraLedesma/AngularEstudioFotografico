import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { User, UserResponse } from '../shared/models/user.interface';
import { identifierModuleUrl } from '@angular/compiler';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user = new BehaviorSubject<UserResponse>(null!);

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.checkToken();
  }

  loginJWT(authData: User): Observable<UserResponse | void> {
    return (
      this.http
        .post<UserResponse>(`api/usuarios/loginJWT`, authData)
        //.post<UserResponse>(`${environment.apiUrl}/usuarios/loginJWT`, authData)
        .pipe(
          map((user: UserResponse) => {
            this.user.next(user);
            console.log(user);
            this.saveLocalStorage(user);
            return user;
          }),
          catchError((err) => this.handlerError(err))
        )
    );
  }

  checkToken() {
    const user: UserResponse = JSON.parse(localStorage.getItem('user')!);

    if (user == null) {
      //this.router.navigate(["/login"])
      return;
    }

    const headers = new HttpHeaders().set('accessToken', user.accessToken);
    this.http
      .post(`api/usuarios/checkLogin`, {}, { headers })
      .subscribe((res: any) => {
      //this.http.post(`${environment.apiUrl}/usuarios/checkLogin`, {}, {headers}).subscribe( (res: any) => {

        if (res && res.isLogged == false) this.router.navigate(['/login']);
        else this.user.next(user);
      });
  }

  /*checkLogin(){
    this.http.get('/api/usuarios/loginApp').subscribe((res: any) => {
      this.user.next(res);
    }, (errorResp) => {
      this.user.next(null!);
    });
  }*/

  /*logout(): Observable<UserResponse | void> {
    return this.http
      .post<UserResponse>('/api/usuarios/logout',{})
      .pipe(
        map((res: any) => {
          this.user.next(null!);
          return res;
        }),
        catchError((err) => this.handlerError(err))
      );

  }*/

  logoutJWT() {
    localStorage.removeItem('user');
    this.user.next(null!);
    this.router.navigate(['/login']);
    this.toastr.warning(`Nos vemos pronto`, 'Acabas de cerrar sesión', {
      positionClass: 'toast-bottom-right',
    });
  }

  changePassword(user: any, id: number): any {
    return (
      this.http
        .put<any>(`api/usuarios/cambiarContrasena/${id}`, user)
        //.put<any>(`${environment.apiUrl}/usuarios/cambiarContrasena/${id}`, user)
        .pipe(
          map((res: any) => {
            return res;
          }),
          catchError((err) => this.handlerError(err))
        )
    );
  }

  forgotPassword(form: any) {
    return (
      this.http
        .put<any>(`api/usuarios/forgot-password`, form)
        //.put<any>(`${environment.apiUrl}/usuarios/forgot-password`, form)
        .pipe(
          map((res: any) => {
            return res;
          }),
          catchError((err) => this.handlerError(err))
        )
    );
  }

  newPassword(form: any, headers: any) {
    return (
      this.http
        .put<any>(`api/usuarios/new-password`, form, { headers })
        //.put<any>(`${environment.apiUrl}/usuarios/new-password`, form, {headers})
        .pipe(
          map((res: any) => {
            return res;
          }),
          catchError((err) => this.handlerError(err))
        )
    );
  }

  getUser(): UserResponse {
    const user: UserResponse = JSON.parse(localStorage.getItem('user')!);
    return user;
  }

  get user$(): Observable<UserResponse> {
    return this.user.asObservable();
  }

  get userValue(): UserResponse {
    return this.user.getValue();
  }

  private saveLocalStorage(user: UserResponse): void {
    const {
      activo,
      usuario_registrado_id,
      usuario_modificacion_id,
      fecha_registro,
      contrasena,
      fecha_modificacion,
      ...rest
    } = user;
    localStorage.setItem('user', JSON.stringify(rest));
  }
  private handlerError(err: { message: any }): Observable<never> {
    let errorMessage = 'An errror occured retrienving data';
    if (err) {
      errorMessage = `Error: code ${err.message}`;
    }
    //window.alert(errorMessage);
    this.toastr.error(errorMessage);
    return throwError(errorMessage);
  }
}
