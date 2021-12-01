import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

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
      .get<any[]>(`api/servicios/`)
      //.get<any[]>(`${environment.apiUrl}/servicios/`)
      .pipe(
        map((servicios: any[]) => {
          return servicios;
        }),
        catchError((err: { message: any; }) => this.handlerError(err))
      );
    }

    addServicioImpresion(fd: any){
      return this.http
      .post<any[]>(`${environment.apiUrl}/servicios_impresion/recepcionista_agregar/`, fd)
      .pipe(
        map((servicios: any[]) => {
          return servicios;
        }),
        catchError((err: { message: any; }) => this.handlerError(err))
      );
    }
    addServicioSesion(fd: any){
      return this.http
      .post<any[]>(`${environment.apiUrl}/servicios_sesion/recepcionista_agregar`, fd)
      .pipe(
        map((servicios: any[]) => {
          return servicios;
        }),
        catchError((err: { message: any; }) => this.handlerError(err))
      );
    }

    getServicioImpresion(id: string){
      return this.http
      .get<any[]>(`api/servicios_impresion/${id}`,)
      //.get<any[]>(`${environment.apiUrl}/servicios_impresion/${id}`,)
      .pipe(
        map((servicios: any[]) => {
          return servicios;
        }),
        catchError((err: { message: any; }) => this.handlerError(err))
      );
    }
    getServicioEvento(id: string){
      return this.http
      .get<any[]>(`${environment.apiUrl}/servicios_evento/${id}`,)
      .pipe(
        map((servicios: any[]) => {
          return servicios;
        }),
        catchError((err: { message: any; }) => this.handlerError(err))
      );
    }
    getServicioSesion(id: string){
      return this.http
      .get<any[]>(`${environment.apiUrl}/servicios_sesion/${id}`,)
      .pipe(
        map((servicios: any[]) => {
          return servicios;
        }),
        catchError((err: { message: any; }) => this.handlerError(err))
      );
    }
    getVideos(id: string){
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json')
      headers.append("Access-Control-Allow-Headers", "application/json")
  
      return this.http
      .get<any>(`${environment.apiUrl}/servicios_evento/videos/${id}`, { headers })
      .pipe(
        map((videos: any) => {
          return videos;
        }),
        catchError((err: { message: any; }) => this.handlerError(err))
      );
    }

    getImagesEvento(id: string){
      return this.http
      .get<any>(`${environment.apiUrl}/servicios_evento/imagenes/${id}`)
      .pipe(
        map((images: any) => {
          return images;
        }),
        catchError((err: { message: any; }) => this.handlerError(err))
      );
    }
    getImagesImpresion(id: string){
      return this.http
      .get<any>(`${environment.apiUrl}/servicios_impresion/imagenes/${id}`)
      .pipe(
        map((images: any) => {
          return images;
        }),
        catchError((err: { message: any; }) => this.handlerError(err))
      );
    }

    updateServicioImpresion(fd: any){
      /*return this.http
      .post<any[]>(`${environment.apiUrl}/servicios_sesion/recepcionista_agregar`, fd)
      .pipe(
        map((servicios: any[]) => {
          return servicios;
        }),
        catchError((err: { message: any; }) => this.handlerError(err))
      );*/
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
