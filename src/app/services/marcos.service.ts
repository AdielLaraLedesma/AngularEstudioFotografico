import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Marco } from '../shared/models/marco.interface'

@Injectable({
  providedIn: 'root'
})
export class MarcosService {

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    ) { 
    //console.log("Is working!")
  }

  getMarco(id: string): Observable<Marco>{
    return this.http
    //.get<Marco>(`api/marcos/${id}`)
    .get<Marco>(`${environment.apiUrl}/marcos/${id}`)
    .pipe(
      map((marco: any) => {
        return marco[0];
      }),
      catchError((err: { message: any; }) => this.handlerError(err))
    );
  }

  getMarcos(): Observable<Marco[]>{
    return this.http
      //.get<Marco[]>(`api/marcos`)
      .get<Marco[]>(`${environment.apiUrl}/marcos`)
      .pipe(
        map((marcos: Marco[]) => {
          return marcos;
        }),
        catchError((err: { message: any; }) => this.handlerError(err))
      );
  }

  saveMarco(fd: any) {
    return this.http
    //.post(`api/marcos/agregar`, fd).pipe(
    .post(`${environment.apiUrl}/marcos/agregar`, fd).pipe(
      map((marco: any) => {
        return marco;
      }),
      catchError((err: { message: any; }) => this.handlerError(err))
    );
  }
  updateMarco(id: string, marco: Marco) {
    return this.http
      .put(`${environment.apiUrl}/marcos/actualizar/${id}`, marco)
      .pipe(
        map((marco: any) => {
          return marco;
        }),
        catchError((err: { message: any; }) => this.handlerError(err))
      );
  }


  deleteMarco(id: number) {
    return this.http
    //.delete(`api/marcos/eliminar/${id}`)
    .delete(`${environment.apiUrl}/marcos/eliminar/${id}`)
    .pipe(
      map((marco: any) => {
        return marco;
      }),
      catchError((err: { message: any; }) => this.handlerError(err))
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




}
