import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { UserResponse } from '../../models/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public url = environment.url

  isLogged = false;

  private destroy$ = new Subject<any>();
  user: UserResponse = null!;
  private subscription: Subscription = new Subscription();

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }
  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete();
    this.subscription.unsubscribe();

  }

  ngOnInit(): void {
    //this.subscription.add(
      this.authService.user$
        .pipe(takeUntil(this.destroy$))
        .subscribe((user: UserResponse) => {
        if (user) {
          this.isLogged = true;
          this.user = user;
        }
      })
    //);
  }

  onLogout() {
    this.isLogged = false;
    this.authService.logoutJWT();

  }
 
}
