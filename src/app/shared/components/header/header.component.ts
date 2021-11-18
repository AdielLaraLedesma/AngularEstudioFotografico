import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription;

  //isAdmin = false;
  isLogged = false;


  constructor(
    private authService: AuthService
  ) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription.add(
      this.authService.isLogged.subscribe( (res) => (this.isLogged = res))
    );
  }

  onLogout() {
    this.authService.logout();
  }


}
