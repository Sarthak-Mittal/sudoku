import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges  } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { SudokuService } from  '../Service/sudoku.service';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit,OnChanges  {

  data;

  name = "Sudoku";
  x = "";
  y = "";
  @Input('init') numberOfCellsDisabled ;
  @Output() difficulty = new EventEmitter();

  isFinished : boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    this.randomizeDisableCells(this.numberOfCellsDisabled);
  }

  constructor(  private modalService : NgbModal, 
                private sudokuService : SudokuService ) 
  {

  }
  ngOnInit() {


  }



  // isSolved(){
  //    alert(JSON.stringify(this.data));
  //    alert(JSON.stringify(this.solutionData));
  //   alert('start is solved'+this.isFinished)
  //   for(var j = 0; j < 9; j++) {
  //     for(var i = 0; i < 9; i++) {
  //       if( this.data[j][i].v == this.solutionData[j][i].v ){
  //         this.isFinished = true
  //         return;
  //       }
  //       else
  //         this.isFinished = false
  //     }
  //   }
  //   alert('end is solved'+this.isFinished)
  // }

// START || functions to disable random cells 
  // Randomly disable cell as per input parameter 
  randomizeDisableCells(noOfCells) {
    var xRan, yRan, counter = 0;

    this.data = null;

    this.sudokuService.getSudoku()
        .subscribe(heroes => this.data = heroes);

    const solutionData = this.data;

    for(var j = 0; j < 9; j++) {
        for(var i = 0; i < 9; i++) {
          this.data[j][i].s == true
        }

      }
        
      while (counter < noOfCells) {
        xRan = this.getRandomInt(9);
        yRan = this.getRandomInt(9);  
        if(this.data[xRan][yRan].s){
          this.data[xRan][yRan].s = false;
          counter++;
        }else{
          continue;
        }
      }


      for(var j = 0; j < 9; j++) {
        for(var i = 0; i < 9; i++) {
          if(this.data[j][i].s == true)
          this.data[j][i].v = " "
        }
      }

  }

  // get Random number between 0 and 'max'
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

// END || functions to disable random cells 

  delay(ms: number) {
      return new Promise( resolve => setTimeout(resolve, ms) );
  }
  recieveValue($event) {
    this.data[this.x][this.y].v = $event;

    //    (async () => { 
    //     // Do something before delay
    //     // alert('before delay')
    //     this.isSolved()

    //     await this.delay(1000);
    //      if(this.isFinished){
    //       alert('FINISHED::'+this.isFinished) 
    //      }else{
    //       alert('else::'+this.isFinished) 
    //      }
    //     // Do something after
    // })();
  }

  open(x, y, comp) {
    this.x = x;
    this.y = y;
    this.modalService.open(comp, { centered: true, size: "sm" });
  
  }

}