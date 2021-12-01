import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { UserResponse } from '../../models/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public urlPreffix = 'http://localhost:3000/'

  private subscription: Subscription = new Subscription();

  isLogged = false;

  private destroy$ = new Subject<any>();
  user: UserResponse = null!;



  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }
  ngOnDestroy(): void {
    //this.subscription.unsubscribe();
    this.destroy$.next({});
    this.destroy$.complete();
    this.subscription.unsubscribe();

  }

  ngOnInit(): void {
    this.subscription.add(
      this.authService.user$
        .pipe(takeUntil(this.destroy$))
        .subscribe((user: UserResponse) => {
        if (user) {
          this.isLogged = true;
          this.user = user;
          console.log(user)
        }
      })
    );
  }

  onLogout() {
    this.isLogged = false;
    const nombre = this.user.nombre;
    this.authService.logoutJWT();

    /*this.subscription.add(
      this.authService.logout().subscribe((res) => {
        if (res) {
          this.router.navigate(['/login']);
          this.toastr.warning(`Nos vemos pronto ${nombre}`, "Acabas de cerrar sesión", {
            positionClass: 'toast-bottom-right'
          });
        }
      })
    );*/
    

  }

 


}
