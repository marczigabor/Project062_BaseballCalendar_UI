import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  
  viewDate :Date = new Date();
  @Output() selectedDate = new EventEmitter<Date>();

  constructor() {
  }

  ngOnInit() {
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    this.viewDate = date;
    this.selectedDate.emit(this.viewDate);
    console.log(date);
    console.log(events);
  }
}
