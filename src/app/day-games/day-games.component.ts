import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseballService } from '../shared/services/baseball.service';
import { debug } from 'util';
import { Scoreboard } from '../shared/model/scoreboard';


@Component({
  selector: 'app-day-games',
  templateUrl: './day-games.component.html',
  styleUrls: ['./day-games.component.css']
})
export class DayGamesComponent implements OnChanges {

  @Input() selectedDate: Date; 
  @Output() selectedGame = new EventEmitter<string>();

  scoreboard :Scoreboard;

  constructor(private baseballService: BaseballService) { }

  ngOnChanges(changes: SimpleChanges): void {

    if ((changes.selectedDate && changes.selectedDate.previousValue !== changes.selectedDate.currentValue))
    {
      this.getGames();
      console.log(changes.selectedDate);
      }
  } 

  getGames(){
    if(this.selectedDate){
      this.baseballService.getGamesByDate(this.selectedDate.getFullYear(), this.selectedDate.getMonth()+1, this.selectedDate.getDate())
      .subscribe(scoreboard => this.scoreboard = scoreboard );
    }  
  }

  selectGame(item :any): void {
    if (item){
      this.selectedGame.emit(item.game.id);
    }
  } 
}
