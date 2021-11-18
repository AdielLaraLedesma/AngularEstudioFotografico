import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from "../interfaces/empleado"
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  API_URL = "http://localhost:9000/api"

  constructor(private httpClient: HttpClient) { 
    console.log("Is working!")
  }

  getEmpleados(): Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>('https://jsonplaceholder.typicode.com/posts')
  }

  getEmpleado(id: string) {
    return this.httpClient.get<Empleado>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  saveEmpleado(empleado: Empleado) {
    return this.httpClient.post(`https://jsonplaceholder.typicode.com/posts/`, empleado);
  }
  deleteEmpleado(id: string) {
    return this.httpClient.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
  updateEmpleado(id: string, empleado: Empleado) {
    return this.httpClient.put(`https://jsonplaceholder.typicode.com/posts/${id}`, empleado);
  }
}
