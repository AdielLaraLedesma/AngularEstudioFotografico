import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from "../shared/models/employee.interface"
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  API_URL = "http://localhost:9000/api"

  constructor(private httpClient: HttpClient) { 
    console.log("Is working!")
  }

  getEmpleados(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>('https://jsonplaceholder.typicode.com/posts')
  }

  getEmpleado(id: string) {
    return this.httpClient.get<Employee>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  saveEmpleado(empleado: Employee) {
    return this.httpClient.post(`https://jsonplaceholder.typicode.com/posts/`, empleado);
  }
  deleteEmpleado(id: string) {
    return this.httpClient.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
  updateEmpleado(id: string, empleado: Employee) {
    return this.httpClient.put(`https://jsonplaceholder.typicode.com/posts/${id}`, empleado);
  }
}
