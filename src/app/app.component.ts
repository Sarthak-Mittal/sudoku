import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{

  name = "Sudoku";
  difficultyCells = 30;

  setDifficulty(difficulty){

    alert(difficulty)
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
  constructor(private modalService: NgbModal) {
   
    }


  ngOnInit() {

  }

}
