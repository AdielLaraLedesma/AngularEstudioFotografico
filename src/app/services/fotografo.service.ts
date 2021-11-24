import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ServicioEvento } from '../shared/models/servicioevento.interface';

@Injectable({
  providedIn: 'root'
})
export class FotografoService {

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
  ) { }

  getServicios(): Observable<Paquete[]>{
    return this.http
      .get<Paquete[]>('/api/paquetes/')
      .pipe(
        map((paquetes: Paquete[]) => {
          return paquetes;
        }),
        catchError((err: { message: any; }) => this.handlerError(err))
      );
  }

  getServicio(id: string) {
    return this.http
    .get<Paquete>(`/api/servicios_evento/${id}`)
    .pipe(
      map((paquete: any) => {
        return paquete;
      }),
      catchError((err: { message: any; }) => this.handlerError(err))
    );
  }



  updateImg(id: string, fd: any) {
    return this.http
      .put(`/api/servicios_evento/subir_imagenes/${id}`, fd)
      .pipe(
        map((servicioEvento: any) => {
          return servicioEvento;
        }),
        catchError((err: { message: any; }) => this.handlerError(err))
      );
  }
  updateVideo(id: string, fd: any) {
    return this.http
      .put(`/api/servicios_evento/subir_videos/${id}`, fd)
      .pipe(
        map((servicioEvento: any) => {
          return servicioEvento;
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
