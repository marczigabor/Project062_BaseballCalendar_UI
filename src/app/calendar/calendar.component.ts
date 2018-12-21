import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  
  viewDate :Date = new Date();
  @Output() selectedDate = new EventEmitter<Date>();
  activeDayIsOpen: boolean = true;
  view: string = 'month';

  constructor() {
  }

  ngOnInit() {
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      this.selectedDate.emit(this.viewDate);
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  // dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
  //   this.viewDate = date;
  //   this.selectedDate.emit(this.viewDate);
  //   console.log(date);
  //   console.log(events);
  // }
}
