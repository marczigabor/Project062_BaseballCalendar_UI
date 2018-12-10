import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { LoggedInUser } from '../Model/LoggedInUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IAuthenticationService } from './IAuthenticationService';

@Injectable({
  providedIn: 'root'
})
export class BaseballService {

  private kjkUrl = 'http://localhost/baseballcalendar_app/api/'; 

  constructor(
    private http: HttpClient) { 
    }    
  }
