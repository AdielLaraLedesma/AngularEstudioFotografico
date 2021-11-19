import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { UserResponse } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class CheckNotAdminGuard implements CanActivate {

  constructor(
    private authService: AuthService
  ){}

  canActivate(): Observable<boolean> {
    return this.authService.user$.pipe(
      take(1),
      map((user: UserResponse) => (user.rol_id == 1 ? true : false))
    );
  }
  
}
