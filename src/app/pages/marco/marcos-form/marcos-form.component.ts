import { Component, HostBinding, OnInit } from '@angular/core';
import { MarcosService } from 'src/app/services/marcos.service';
import { Marco } from 'src/app/shared/models/marco.interface';

@Component({
  selector: 'app-marcos-form',
  templateUrl: './marcos-form.component.html',
  styleUrls: ['./marcos-form.component.css']
})
export class MarcosFormComponent implements OnInit {

  @HostBinding('class') classes = "row";

  marco: Marco = {
    id: 0,
    nombre: ""
  };


  constructor(private empleadoService: MarcosService) { }

  ngOnInit(): void {
  }

  saveMarco(){
    console.log("Hola")
  }
}
