import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  isLogged = false;

  rol: string;

  constructor(
    private authService : AuthService
  ){
    this.rol = "SECRETARIA";
  }
  ngOnInit(): void {
    this.authService.isLogged.subscribe( (res) => this.isLogged = res);
  }


  doLogout() {
    this.authService.logout();
  }


}
