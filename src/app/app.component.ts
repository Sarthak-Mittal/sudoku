import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

// import {GridData} from './utils/GridData'

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Sudoku";
  x = "";
  y = "";

  constructor(private modalService: NgbModal) {}

  ngOnInit() {

  }

  recieveValue($event) {
    this.data[this.x][this.y].v = $event;
  }

  open(x, y, comp) {
    this.x = x;
    this.y = y;
    this.modalService.open(comp, { centered: true, size: "sm" });
  }




  data = [
    [
      { v: 1, s: true },{ v: 2, s: true },{ v: 3, s: true },
      { v: 1, s: true },{ v: 5, s: true },{ v: 6, s: true },
      { v: 1, s: true },{ v: 8, s: true },{ v: 9, s: true }
    ],
    [
      { v: 1, s: true },{ v: 2, s: true },{ v: 3, s: true },
      { v: 4, s: true },{ v: 5, s: true },{ v: 6, s: true },
      { v: 7, s: true },{ v: 8, s: true },{ v: 9, s: true }
    ],
    [
      { v: 1, s: true },{ v: 2, s: true },{ v: 3, s: true },
      { v: 4, s: true },{ v: 5, s: true },{ v: 6, s: true },
      { v: 7, s: true },{ v: 8, s: true },{ v: 9, s: true }
    ],
    [
      { v: 1, s: true },{ v: 2, s: true },{ v: 3, s: true },
      { v: 4, s: true },{ v: 5, s: true },{ v: 6, s: true },
      { v: 7, s: true },{ v: 8, s: true },{ v: 9, s: true }
    ],
    [
      { v: 1, s: true },{ v: 2, s: true },{ v: 3, s: true },
      { v: 4, s: true },{ v: 5, s: true },{ v: 6, s: true },
      { v: 7, s: true },{ v: 8, s: true },{ v: 9, s: true }
    ],
    [
      { v: 1, s: true },{ v: 2, s: true },{ v: 3, s: true },
      { v: 4, s: true },{ v: 5, s: true },{ v: 6, s: true },
      { v: 7, s: true },{ v: 8, s: true },{ v: 9, s: true }
    ],
    [
      { v: 1, s: true },{ v: 2, s: true },{ v: 3, s: true },
      { v: 4, s: true },{ v: 5, s: true },{ v: 6, s: true },
      { v: 7, s: true },{ v: 8, s: true },{ v: 9, s: true }
    ],
    [
      { v: 1, s: true },{ v: 2, s: true },{ v: 3, s: true },
      { v: 4, s: true },{ v: 5, s: true },{ v: 6, s: true },
      { v: 7, s: true },{ v: 8, s: true },{ v: 9, s: true }
    ],
    [
      { v: 1, s: true },{ v: 2, s: true },{ v: 3, s: true },
      { v: 4, s: true },{ v: 5, s: true },{ v: 6, s: true },
      { v: 7, s: true },{ v: 8, s: true },{ v: 9, s: true }
    ]
  ];
}
