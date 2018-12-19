import { Component, OnInit } from '@angular/core';
import { CalendarView, CalendarEvent } from 'angular-calendar';
import { BaseballService } from '../shared/services/baseball.service';
import { BoxScore } from '../shared/model/boxScore';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  
  // view: CalendarView = CalendarView.Month;

  // CalendarView = CalendarView;

  viewDate: Date = new Date();
  viewGameId: string;
  boxScore: BoxScore;

  // modalData: {
  //   action: string;
  //   event: CalendarEvent;
  // };  
  constructor(private baseballService : BaseballService) { }

  ngOnInit() {
  }

  getGame(gameId:string):void {
    this.viewGameId = gameId;
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    this.viewDate = date;
    console.log(date);
    console.log(events);
  }

}
