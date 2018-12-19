import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Scoreboard } from '../model/scoreboard';
import { BoxScore } from '../model/boxScore';

@Injectable({
  providedIn: 'root'
})
export class BaseballService {
  
  private apiUrl = 'http://localhost/baseballcalendar_app/api/'; 

  constructor(private http: HttpClient) { 
  }    


  getGame(gameId: string): Observable<BoxScore> {
    const url = `${this.apiUrl}gamedata/boxscore?gameId=${gameId}`;
    return this.http.get<any>(url);
  }
  

  getGamesByDate(year: number, month: number, day: number ) : Observable<Scoreboard> {
    const url = `${this.apiUrl}gamedata/scoreboard?year=${year}&month=${month}&day=${day}`;

    return this.http.get<Scoreboard>(url);
    // .pipe(
    //   map(res => res )
    // );
    
      // .pipe(
      //   tap(x => console.log(x))
      // );       
  }

}
