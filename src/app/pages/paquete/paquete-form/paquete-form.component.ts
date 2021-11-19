import { Component, HostBinding, OnInit } from '@angular/core';
import { Paquete } from 'src/app/shared/models/paquete.interface';

import { PaquetesService } from '../../../services/paquetes.service'

@Component({
  selector: 'app-paquete-form',
  templateUrl: './paquete-form.component.html',
  styleUrls: ['./paquete-form.component.css']
})
export class PaqueteFormComponent implements OnInit {

  @HostBinding('class') classes = "row";

  paquete: Paquete = {
    id: 0,
    nombre: "",
    descripcion: "",
    hrs_video: 0,
    no_fotos_dig: 0,
    no_fotos_fis: 0,
    marco_id: 0,
    tamano_id: 0,
    precio: 0,
    tipo_paquete_id: 0,
    url_imagen: "" 
  };

  constructor(private paqueteService: PaquetesService) { }

  ngOnInit(): void {
  }

  savePaquete(){
    console.log("Hola")
  }

}
