import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Paquete } from "../shared/models/paquete.interface"
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaquetesService {



  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    ) { 
    //console.log("Is working!")
  }

  getPaquetes(): Observable<Paquete[]>{
    return this.http
      .get<Paquete[]>('/api/paquetes/listarPaquetes')
      .pipe(
        map((paquetes: Paquete[]) => {
          return paquetes;
        }),
        catchError((err: { message: any; }) => this.handlerError(err))
      );
  }

  getPaquete(id: string) {
    return this.http
    .get<Paquete>(`/api/paquetes/listarPaquete/${id}`)
    .pipe(
      map((paquete: Paquete) => {
        return paquete;
      }),
      catchError((err: { message: any; }) => this.handlerError(err))
    );
  }


  /*savePaquete(paquete: Paquete) {
    return this.httpClient.post(`https://jsonplaceholder.typicode.com/posts/`, paquete);
  }
  deletePaquete(id: string) {
    return this.httpClient.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }*/
  updatePaquete(id: string, paquete: Paquete) {
    return this.http
      .put(`/api/paquetes/updatePaquete/${id}`, paquete)
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
