import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse } from '../shared/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    const user: UserResponse = JSON.parse(localStorage.getItem('user')!);

    if(user == null || user == undefined)
      return next.handle( req )

    const token = user.accessToken;

    console.log(token)

    const headers = new HttpHeaders({
      'accessToken': token
    })
    const reqClone = req.clone({headers})

    return next.handle( reqClone )

  }
}
