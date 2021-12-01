import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { UserResponse } from 'src/app/shared/models/user.interface';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public botonEditarDisabled = true;

  private destroy$ = new Subject<any>();

  public user: UserResponse = null!;
  subscription: any;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {




   this.getUser();
  }

  ngOnDestroy(): void {
    //this.subscription.unsubscribe();
    this.destroy$.next({});
    this.destroy$.complete();

  }

  getUser() {
    this.user = this.authService.getUser();
    if (this.user == null)
      this.subscription.add(
        this.authService.user$
          .pipe(takeUntil(this.destroy$))
          .subscribe((user: UserResponse) => {
            if (user) {
              this.user = user;
            }
          })
      );
      console.log(this.user)
  }

  formularioEditar(){
    console.log("hola")

  }

}
