import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { PaquetesService } from 'src/app/services/paquetes.service';
import { Paquete } from 'src/app/shared/models/paquete.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoPaquetesComponent implements OnInit, OnDestroy {
  public url = environment.url;

  public imageSrcDefault = 'assets/img/image-not-found.png';

  private subscription: Subscription = new Subscription();

  public paquetes: Paquete[] = [];

  constructor(
    private paquetesService: PaquetesService,
    private toastr: ToastrService
  ) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.getPaquetes();
  }

  eliminarPaquete(id: number) {
    this.subscription.add(
      this.paquetesService.deletePaquete(id).subscribe((data) => {
        this.toastr.success(
          'El paquete fue eliminado exitosamente',
          'Paquete eliminado',
          {
            positionClass: 'toast-bottom-right',
          }
        );
        this.getPaquetes();
      })
    );
  }

  getPaquetes() {
    this.paquetesService.getPaquetes().subscribe((data) => {
      this.paquetes = data;
    });
  }
}
