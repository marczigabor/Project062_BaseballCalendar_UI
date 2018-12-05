import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-day-games',
  templateUrl: './day-games.component.html',
  styleUrls: ['./day-games.component.css']
})
export class DayGamesComponent implements OnInit {

  @Input() selectedDate: Date; 

  constructor() { }

  ngOnInit() {
  }

}
