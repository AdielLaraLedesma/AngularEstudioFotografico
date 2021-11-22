import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { PaquetesService } from '../../../services/paquetes.service'

import { Paquete } from '../../../shared/models/paquete.interface'

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.css']
})
export class PaquetesComponent implements OnInit {

  public imageSrc = 'http://localhost:3000/'  
  public imageSrcDefault = 'assets/img/image-not-found.png'  


  public paquetes: Paquete[] = [];

  displayedColumns: string[] = ['id', 'userId', 'title', 'body'];

  constructor( 
    private paquetesService: PaquetesService,
    //private router: Router,
    private toastr: ToastrService
    ) {
  }

  ngOnInit(): void {
    this.getPaquetes();
  } 

  eliminarPaquete(id: number){
    this.paquetesService.deletePaquete(id).subscribe(data => {
      //this.paquetes = data;
      this.toastr.success("El paquete ha sido eliminado con exito");
      this.getPaquetes();
    })
    //TODO Implementar http request para eliminar paquete

  }


  getPaquetes(){
    this.paquetesService.getPaquetes().subscribe(data => {
      this.paquetes = data;
      console.log(data)
    });
  }


}
