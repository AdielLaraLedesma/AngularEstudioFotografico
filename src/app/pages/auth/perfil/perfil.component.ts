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

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.user$
      .pipe(takeUntil(this.destroy$))
      .subscribe((user: UserResponse) => {
        if (user) {
          this.user = user;
          console.log(this.user)
        }
      });
  }

  ngOnDestroy(): void {
    //this.subscription.unsubscribe();
    this.destroy$.next({});
    this.destroy$.complete();

  }

  formularioEditar(){
    console.log("hola")

  }

}
