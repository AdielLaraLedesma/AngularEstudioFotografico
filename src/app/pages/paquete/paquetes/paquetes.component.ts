import { Component, OnInit } from '@angular/core';

import { PaquetesService } from '../../../services/paquetes.service'

import { Paquete } from '../../../shared/models/paquete.interface'

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.css']
})
export class PaquetesComponent implements OnInit {

  public paquetes: Paquete[] = [];

  displayedColumns: string[] = ['id', 'userId', 'title', 'body'];

  constructor( private paquetesService: PaquetesService ) {
    this.paquetesService.getPaquetes().subscribe(data => {
      this.paquetes = data;
    });

  }

  ngOnInit(): void {
  }

  eliminarPaquete(id: number){
    //console.log(id)
    this.paquetesService.deletePaquete(id).subscribe(data => {
      this.paquetes = data;
    })
    //TODO Implementar http request para eliminar paquete


  }



}
