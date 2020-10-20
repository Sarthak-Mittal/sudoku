import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

name = "Sudoku";
difficultyCells = 35;

setDifficulty(difficulty){

  console.log("from parent:"+difficulty)
  switch (difficulty)
  {
    case "easy":
      this.difficultyCells = 42;
        break;
    case "medium":
      this.difficultyCells = 35;
        break;
    case "advanced": 
      this.difficultyCells = 20;
        break;
  }
}

constructor(updates: SwUpdate) {
  updates.available.subscribe(event => {
    updates.activateUpdate().then(() => document.location.reload());
  })
}


ngOnInit() {

}

}
