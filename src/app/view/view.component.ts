import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  viewDate: Date = new Date();
  viewGameId: string;
  
  constructor() { }

  ngOnInit() {
  }

  getGame(gameId:string):void {
    this.viewGameId = gameId;
  }

  getGames(date:Date):void {
    this.viewDate = date;
  }

}
