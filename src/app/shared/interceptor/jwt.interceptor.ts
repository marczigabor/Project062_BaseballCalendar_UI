import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BaseballService } from '../services/baseball.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    
    constructor(private baseballService: BaseballService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = this.baseballService.currentUserValue;

        if (currentUser && currentUser.auth_token) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${currentUser.auth_token}`
                }
            });
        }

        return next.handle(request);
    }
}