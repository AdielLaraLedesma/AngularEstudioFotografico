import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Marco } from '../shared/models/marco.interface';
import { Tamano } from '../shared/models/tamano.interface';

@Injectable({
  providedIn: 'root'
})
export class TamanoService {

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
  ) { }

  getTamano(id: string): Observable<Tamano>{
    return this.http
    //.get<Tamano>(`api/tamanos/${id}`)
    .get<Tamano>(`${environment.baseUrl}/tamanos/${id}`)
    .pipe(
      map((marco: any) => {
        return marco[0];
      }),
      catchError((err: { message: any; }) => this.handlerError(err))
    );
  }

  getTamanos(): Observable<Tamano[]>{
    return this.http
      //.get<Tamano[]>(`api/tamanos`)
      .get<Tamano[]>(`${environment.baseUrl}/tamanos`)
      .pipe(
        map((marcos: Tamano[]) => {
          return marcos;
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
