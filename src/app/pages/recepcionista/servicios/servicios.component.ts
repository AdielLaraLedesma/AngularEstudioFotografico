import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecepcionistaService } from 'src/app/services/recepcionista.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit, OnDestroy {

  servicios: any[] = null!;

  private subscription: Subscription = new Subscription();

  constructor(
    private recepcionista: RecepcionistaService
  ) { }

  ngOnInit(): void {

    this.subscription.add(
      this.recepcionista.getServicios().subscribe( data => {
        console.log(data)
        this.servicios = data;
      })
    );


  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  
  }

}
