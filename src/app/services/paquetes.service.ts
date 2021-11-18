import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Paquete } from "../interfaces/paquete"
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PaquetesService {


  API_URL = "http://localhost:9000/api"

  constructor(private httpClient: HttpClient) { 
    console.log("Is working!")
  }

  getPaquetes(): Observable<Paquete[]>{
    return this.httpClient.get<Paquete[]>('https://jsonplaceholder.typicode.com/posts')
  }

  getPaquete(id: string) {
    return this.httpClient.get<Paquete>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  savePaquete(paquete: Paquete) {
    return this.httpClient.post(`https://jsonplaceholder.typicode.com/posts/`, paquete);
  }
  deletePaquete(id: string) {
    return this.httpClient.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
  updatePaquete(id: string, paquete: Paquete) {
    return this.httpClient.put(`https://jsonplaceholder.typicode.com/posts/${id}`, paquete);
  }

}
