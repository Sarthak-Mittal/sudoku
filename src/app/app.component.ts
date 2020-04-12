import { Component } from '@angular/core';

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
constructor() {
 
}


ngOnInit() {

}

}
