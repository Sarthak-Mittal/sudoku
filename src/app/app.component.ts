import { Component } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {

  name = 'Sudoku';
  x = "";
  y = "";
  constructor(private modalService: NgbModal) {}

  
  recieveValue($event){
    this.data[this.x][this.y].value = $event;
  }

   open( x, y, comp) {
     this.x = x;
     this.y = y;
    this.modalService.open(comp, { centered: true , size: 'sm' });
  }


  data = [
  [ 
    {"value":1, "clickable": true}, {"value":2, "clickable": false},{"value":3, "clickable": true},
    {"value":1, "clickable": true}, {"value":5, "clickable": false},{"value":6, "clickable": true},
    {"value":1, "clickable": false}, {"value":8, "clickable": true},{"value":9, "clickable": false}
  ],
  [
      {"value":1, "clickable": true}, {"value":2, "clickable": false},{"value":3, "clickable": true},
      {"value":4, "clickable": false}, {"value":5, "clickable": true},{"value":6, "clickable": true},
      {"value":7, "clickable": true}, {"value":8, "clickable": true},{"value":9, "clickable": false}
  ],
  [ 
    {"value":1, "clickable": true}, {"value":2, "clickable": false},{"value":3, "clickable": true},
    {"value":4, "clickable": false}, {"value":5, "clickable": true},{"value":6, "clickable": true},
    {"value":7, "clickable": true}, {"value":8, "clickable": true},{"value":9, "clickable": true}
  ],
  [
      {"value":1, "clickable": false}, {"value":2, "clickable": false},{"value":3, "clickable": true},
      {"value":4, "clickable": true}, {"value":5, "clickable": false},{"value":6, "clickable": true},
      {"value":7, "clickable": true}, {"value":8, "clickable": true},{"value":9, "clickable": false}
  ],
  [ 
    {"value":1, "clickable": true}, {"value":2, "clickable": false},{"value":3, "clickable": true},
    {"value":4, "clickable": true}, {"value":5, "clickable": true},{"value":6, "clickable": false},
    {"value":7, "clickable": false}, {"value":8, "clickable": false},{"value":9, "clickable": true}
  ],
  [
      {"value":1, "clickable": true}, {"value":2, "clickable": false},{"value":3, "clickable": true},
      {"value":4, "clickable": false}, {"value":5, "clickable": true},{"value":6, "clickable": false},
      {"value":7, "clickable": true}, {"value":8, "clickable": false},{"value":9, "clickable": true}
  ],
  [ 
    {"value":1, "clickable": true}, {"value":2, "clickable": false},{"value":3, "clickable": true},
    {"value":4, "clickable": true}, {"value":5, "clickable": true},{"value":6, "clickable": true},
    {"value":7, "clickable": true}, {"value":8, "clickable": true},{"value":9, "clickable": true}
  ],
  [
      {"value":1, "clickable": true}, {"value":2, "clickable": false},{"value":3, "clickable": true},
      {"value":4, "clickable": true}, {"value":5, "clickable": true},{"value":6, "clickable": true},
      {"value":7, "clickable": true}, {"value":8, "clickable": true},{"value":9, "clickable": true}
  ],
  [ 
    {"value":1, "clickable": true}, {"value":2, "clickable": false},{"value":3, "clickable": true},
    {"value":4, "clickable": false}, {"value":5, "clickable": false},{"value":6, "clickable": true},
    {"value":7, "clickable": true}, {"value":8, "clickable": true},{"value":9, "clickable": false}
  ]
];

}
