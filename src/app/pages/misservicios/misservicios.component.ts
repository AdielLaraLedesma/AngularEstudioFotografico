import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { UserResponse } from '../../shared/models/user.interface';

@Component({
  selector: 'app-misservicios',
  templateUrl: './misservicios.component.html',
  styleUrls: ['./misservicios.component.css']
})
export class MisserviciosComponent implements OnInit, OnDestroy {

  id: string =  "";

  private destroy$ = new Subject<any>();
  public user: UserResponse = null!;
  private subscription: Subscription = new Subscription();

  constructor(
    private rutaActiva: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
  ) { }
  ngOnInit(): void {
    this.getUsuario();
    this.id = this.rutaActiva.snapshot.params.id;

    if(this.user.id.toString() != this.id){
      this.router.navigate(["/"]);
        return
    }

    


  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getUsuario() {
    this.subscription.add(
      this.authService.user$
        .pipe(takeUntil(this.destroy$))
        .subscribe((user: UserResponse) => {
        if (user) {
          this.user = user;
        }
      })
    );
  }

}
