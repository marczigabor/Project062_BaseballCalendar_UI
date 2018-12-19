import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { BaseballService } from '../shared/services/baseball.service';
import { BoxScore } from '../shared/model/boxScore';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnChanges {

  @Input() gameId: string; 
  boxScore: BoxScore; 

  constructor(private baseballService : BaseballService) { }

  ngOnChanges(changes: SimpleChanges): void {

    if ((changes.gameId && changes.gameId.previousValue !== changes.gameId.currentValue))
    {
      this.getGame();
    }
  } 

  getGame():void {
    if (this.gameId){
      this.baseballService.getGame(this.gameId).subscribe(boxScore => 
      {
        this.boxScore = boxScore;
      });
    }
  } 

}
