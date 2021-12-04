import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { MarcosService } from 'src/app/services/marcos.service';
import { Marco } from 'src/app/shared/models/marco.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoMarcosComponent implements OnInit {
  public marcos: Marco[] = [];

  private subscription: Subscription = new Subscription();

  constructor(
    private _marcosService: MarcosService,
    private _toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getMarcos();
  }

  eliminarMarco(id: number, iControl: any) {
    this._marcosService.deleteMarco(id).subscribe((data) => {
      this._toastr.success(
        'El marco fue eliminado exitosamente',
        'Marco eliminado',
        {
          positionClass: 'toast-bottom-right',
        }
      );
      this.marcos.splice(iControl, 1);
    });
  }

  getMarcos() {
    this.subscription.add(
      this._marcosService.getMarcos().subscribe((data) => {
        this.marcos = data;
      })
    );
  }
}
