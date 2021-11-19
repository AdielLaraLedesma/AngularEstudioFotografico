import { Component, HostBinding, OnInit } from '@angular/core';
import { PaquetesService } from 'src/app/services/paquetes.service';
import { Paquete } from 'src/app/shared/models/paquete.interface';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-editpaquete',
  templateUrl: './editpaquete.component.html',
  styleUrls: ['./editpaquete.component.css']
})
export class EditpaqueteComponent implements OnInit {

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

  constructor(
    private paqueteService: PaquetesService,
    private rutaActiva: ActivatedRoute
    ) { }

  ngOnInit(): void {
    let id = this.rutaActiva.snapshot.params.id;

    console.log(id)
  }

  editarPaquetes(){
    console.log("Hola")
  }
}
