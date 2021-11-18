import { Component, HostBinding, OnInit } from '@angular/core';
import { Paquete } from 'src/app/interfaces/paquete';

import { PaquetesService } from '../../services/paquetes.service'

@Component({
  selector: 'app-paquete-form',
  templateUrl: './paquete-form.component.html',
  styleUrls: ['./paquete-form.component.css']
})
export class PaqueteFormComponent implements OnInit {

  @HostBinding('class') classes = "row";

  paquete: Paquete = {
    userId: 0,
    id: 0,
    title: "",
    body: ""
  };

  constructor(private paqueteService: PaquetesService) { }

  ngOnInit(): void {
  }

  savePaquete(){
    console.log("Hola")
  }

}
