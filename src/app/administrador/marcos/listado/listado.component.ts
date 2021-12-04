import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MarcosService } from 'src/app/services/marcos.service';
import { Marco } from 'src/app/shared/models/marco.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoMarcosComponent implements OnInit {

  public marcos: Marco[] = [];

   
  constructor( 
    private marcosService: MarcosService,
    private toastr: ToastrService
    ) {
  }

  ngOnInit(): void {
    this.getMarcos();
  } 

  eliminarMarco(id: number, iControl:any){
    this.marcosService.deleteMarco(id).subscribe(data => {
      this.toastr.success("El marco fue eliminado exitosamente", "Marco eliminado", {
        positionClass: 'toast-bottom-right'
      });
      this.marcos.splice(iControl, 1);
    })

  }


  getMarcos(){
    this.marcosService.getMarcos().subscribe(data => {
      this.marcos = data;
    });
  }

}
