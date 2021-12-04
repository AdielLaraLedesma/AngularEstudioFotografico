import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecepcionistaService } from 'src/app/services/recepcionista.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit, OnDestroy {

  servicios: any[] = null!;

  private subscription: Subscription = new Subscription();

  constructor(private _recepcionista: RecepcionistaService) {}

  ngOnInit(): void {
    this.subscription.add(
      this._recepcionista.getServicios().subscribe((data) => {
        this.servicios = data;
      })
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
