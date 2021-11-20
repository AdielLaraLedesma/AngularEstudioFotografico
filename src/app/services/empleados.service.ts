import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from "../shared/models/employee.interface"
import { Observable } from 'rxjs/internal/Observable';
import { ToastrService } from 'ngx-toastr';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,) { 
    
  }

  getEmpleados(): Observable<Employee[]>{
    return this.http
      .get<Employee[]>('/api/usuarios/')
      .pipe(
        map((empleados: Employee[]) => {
          return empleados;
        }),
        catchError((err: { message: any; }) => this.handlerError(err))
      );
  }

  getEmpleado(id: string) {
    return this.http
    .get<Employee>(`/api/usuarios/listarUsuario/${id}`)
    .pipe(
      map((empleado: any) => {
        return empleado;
      }),
      catchError((err: { message: any; }) => this.handlerError(err))
    );
  }
/*
  saveEmpleado(empleado: Employee) {
    return this.httpClient.post(`https://jsonplaceholder.typicode.com/posts/`, empleado);
  }*/


  deleteEmpleado(id: string) {
    return this.http.delete(`/api/usuarios/actualizarDatos/borrarUsuario/${id}`)
    .pipe(
      map((empleado: any) => {
        return empleado;
      }),
      catchError((err: { message: any; }) => this.handlerError(err))
    );
  }


  updateEmpleado(id: string, empleado: Employee) {
    return this.http
      .put(`/api/usuarios/actualizarDatos/${id}`, empleado)
      .pipe(
        map((empleado: any) => {
          return empleado;
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