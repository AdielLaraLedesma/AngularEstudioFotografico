import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecepcionistaService {

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
  ) { }


    getServicios(){
      return this.http
      .get<any[]>('/api/servicios/')
      .pipe(
        map((servicios: any[]) => {
          return servicios;
        }),
        catchError((err: { message: any; }) => this.handlerError(err))
      );
    }

    addServicio(fd: any){
      return this.http
      .post<any[]>('/api/servicios_impresion/recepcionista_agregar/', fd)
      .pipe(
        map((servicios: any[]) => {
          return servicios;
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
