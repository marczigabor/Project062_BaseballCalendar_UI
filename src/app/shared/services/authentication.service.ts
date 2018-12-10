import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoggedInUser } from '../Model/LoggedInUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IAuthenticationService } from './IAuthenticationService';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements IAuthenticationService {
  private currentUserSubject: BehaviorSubject<LoggedInUser>;
  public currentUser: Observable<LoggedInUser>;  

  private kjkUrl = 'http://localhost/baseballcalendar_app/api/'; 

  constructor(
    private http: HttpClient) { 
      this.currentUserSubject = new BehaviorSubject<LoggedInUser>(JSON.parse(localStorage.getItem('jwtToken')));
      this.currentUser = this.currentUserSubject.asObservable();
    }    

    public get currentUserValue(): LoggedInUser {
      return this.currentUserSubject.value;
    }

    logout() {
      localStorage.removeItem('jwtToken');
      this.currentUserSubject.next(null);
    }  
  
    login(userName: string, password: string): Observable<string> {
        
      const url = `${this.kjkUrl}auth/login`;
        let body = JSON.stringify({ userName, password });
   
        return this.http.post<any>(url, body).pipe(
          tap(jwtToken => {
            localStorage.setItem('jwtToken', JSON.stringify(jwtToken));
            let user: LoggedInUser = new LoggedInUser(jwtToken.id, jwtToken.auth_token, jwtToken.expires_in, jwtToken.userName);
            this.currentUserSubject.next(user);
            })
          //catchError(this.handleError('Err'))
        );
    }     
  }

