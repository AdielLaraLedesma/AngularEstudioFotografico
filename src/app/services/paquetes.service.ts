import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Paquete } from "../shared/models/paquete.interface"
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TipoPaquete } from '../shared/models/tipo-paquetes.interface';

@Injectable({
  providedIn: 'root'
})
export class PaquetesService {



  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    ) {
  }

  getPaquetes(): Observable<Paquete[]>{
    return this.http
      //.get<Paquete[]>(`api/paquetes/`)
      .get<Paquete[]>(`${environment.baseUrl}/paquetes/`)
      .pipe(
        map((paquetes: Paquete[]) => {
          return paquetes;
        }),
        catchError((err: { message: any; }) => this.handlerError(err))
      );
  }
  getTipoPaquetes() {
    return this.http
    //.get<Paquete>(`api/paquetes/tipos_paquete`)
    .get<TipoPaquete[]>(`${environment.baseUrl}/paquetes/tipos_paquete`)
    .pipe(
      map((paquete: any) => {
        return paquete;
      }),
      catchError((err: { message: any; }) => this.handlerError(err))
    );
  }

  getPaquete(id: string) {
    return this.http
    //.get<Paquete>(`api/paquetes/${id}`)
    .get<Paquete>(`${environment.baseUrl}/paquetes/${id}`)
    .pipe(
      map((paquete: any) => {
        return paquete;
      }),
      catchError((err: { message: any; }) => this.handlerError(err))
    );
  }

  savePaquete(fd: any) {
    return this.http
    //.post(`api/paquetes/agregar`, fd).pipe(
    .post(`${environment.baseUrl}/paquetes/agregar`, fd).pipe(
      map((paquete: any) => {
        return paquete;
      }),
      catchError((err: { message: any; }) => this.handlerError(err))
    );
  }

  deletePaquete(id: any) {
    return this.http
    //.delete(`api/paquetes/eliminar/${id}`).pipe(
    .delete(`${environment.baseUrl}/paquetes/eliminar/${id}`).pipe(
      map((paquete: any) => {
        return paquete;
      }),
      catchError((err: { message: any; }) => this.handlerError(err))
    );
  }

  updatePaquete(id: string, paquete: Paquete) {
    return this.http
      //.put(`api/paquetes/actualizar/${id}`, paquete)
      .put(`${environment.baseUrl}/paquetes/actualizar/${id}`, paquete)
      .pipe(
        map((paquete: any) => {
          return paquete;
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
