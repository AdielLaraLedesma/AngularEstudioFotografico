import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { UserResponse } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class CheckLoginGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  /*canActivate(): Observable<boolean> {
      return this.authService.isLogged.pipe(
        take(1),
        map( (isLogged : boolean) => !isLogged )
      )
  }*/
  canActivate(): Observable<boolean> {
    return this.authService.user$.pipe(
      take(1),
      map((user: UserResponse) => (!user ? true : false))
    );
  }



  

}
