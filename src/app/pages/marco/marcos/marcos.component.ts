import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MarcosService } from 'src/app/services/marcos.service';
import { Marco } from 'src/app/shared/models/marco.interface';

@Component({
  selector: 'app-marcos',
  templateUrl: './marcos.component.html',
  styleUrls: ['./marcos.component.css']
})
export class MarcosComponent implements OnInit {

  public marcos: Marco[] = [];

  
  constructor( 
    private marcosService: MarcosService,
    private toastr: ToastrService
    ) {
  }

  ngOnInit(): void {
    this.getMarcos();
  } 

  eliminarMarco(id: number){
    this.marcosService.deleteMarco(id).subscribe(data => {
      this.toastr.success("El marco fue eliminado exitosamente", "Marco eliminado", {
        positionClass: 'toast-bottom-right'
      });
      this.getMarcos();
    })
    //TODO Implementar http request para eliminar paquete

  }


  getMarcos(){
    this.marcosService.getMarcos().subscribe(data => {
      this.marcos = data;
    });
  }

}
