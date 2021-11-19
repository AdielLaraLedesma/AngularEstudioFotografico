import { Component, OnInit } from '@angular/core';
import { MarcosService } from 'src/app/services/marcos.service';
import { Marco } from 'src/app/shared/models/marco.interface';

@Component({
  selector: 'app-marcos',
  templateUrl: './marcos.component.html',
  styleUrls: ['./marcos.component.css']
})
export class MarcosComponent implements OnInit {

  public marcos: Marco[] = [];

  
  constructor( private marcosService: MarcosService ) {
    this.marcosService.getMarcos().subscribe(data => {
      this.marcos = data;
    });

  }

  ngOnInit(): void {
  }

}
