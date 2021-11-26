import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { PaquetesService } from '../../../../services/paquetes.service'

import { Paquete } from '../../../../shared/models/paquete.interface'

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.css']
})
export class PaquetesComponent implements OnInit {

  public imageSrc = 'http://localhost:3000/'  
  public imageSrcDefault = 'assets/img/image-not-found.png'  


  public paquetes: Paquete[] = [];


  constructor( 
    private paquetesService: PaquetesService,
    private toastr: ToastrService
    ) {
  }

  ngOnInit(): void {
    this.getPaquetes();
  } 

  eliminarPaquete(id: number){
    this.paquetesService.deletePaquete(id).subscribe(data => {
      this.toastr.success("El paquete fue eliminado exitosamente", "Paquete eliminado", {
        positionClass: 'toast-bottom-right'
      });
      this.getPaquetes();
    })
  }


  getPaquetes(){
    this.paquetesService.getPaquetes().subscribe(data => {
      this.paquetes = data;
    });
  }


}
