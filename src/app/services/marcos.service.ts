import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
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

  getMarcos(): Observable<Marco[]>{
    return this.http
      .get<Marco[]>('/api/marcos')
      .pipe(
        map((marco: Marco[]) => {
          return marco;
        }),
        catchError((err: { message: any; }) => this.handlerError(err))
      );
  }


  deleteMarco(id: number) {
    return this.http.delete(`/api/marcos/eliminar/${id}`)
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
