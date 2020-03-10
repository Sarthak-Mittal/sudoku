import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{
  // solutionData;
  name = "Sudoku";
  difficultyCells = 10;
  // x = "";
  // y = "";
  // isFinished : boolean = false;

  setDifficulty(difficulty){

    alert(difficulty)
    switch (difficulty)
    {
      case "easy":
        this.difficultyCells = 50;
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
    // this.solutionData = this.data;
    //  this.generateSudoku()
    // this.randomizeDisableCells(this.numberOfCellsDisabled);
    // this.solutionData = this.data;
    // this.removeData();
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


  // removeData(){
  //   for(var j = 0; j < 9; j++) {
  //     for(var i = 0; i < 9; i++) {
  //       if(this.data[j][i].s == true)
  //         this.data[j][i].v = null
  //     }
  //   }
  // }


  ngOnInit() {
   
    // this.data[0][0].v = 10;
  }


// START || functions to generate sudoku 
  // generateSudoku(){
  //   var data = [1,2,3,4,5,6,7,8,9];
  //   var r1,r2,temp ; 

  //   for(var i = 0; i < 6; i++) {
  //     r1 = this.getRandomInt(9); r2 = this.getRandomInt(9)
  //     temp = data[r1]; data[r1] = data[r2];data[r2] = temp;
  //   }

  //   this.fillRow(data, 0)    
  //   this.fillRow(this.shiftArrayByPlaces(data, 3), 1)
  //   this.fillRow(this.shiftArrayByPlaces(data, 3), 2)    
  //   this.fillRow(this.shiftArrayByPlaces(data, 1), 3)    
  //   this.fillRow(this.shiftArrayByPlaces(data, 3), 4)    
  //   this.fillRow(this.shiftArrayByPlaces(data, 3), 5)    
  //   this.fillRow(this.shiftArrayByPlaces(data, 1), 6)
  //   this.fillRow(this.shiftArrayByPlaces(data, 3), 7)
  //   this.fillRow(this.shiftArrayByPlaces(data, 3), 8)
      
  // }

  // //this fills in data to Nth row with passed in data
  // fillRow(rowData, rowNum){
  //   for(var j = 0; j < 9; j++)
  //     this.data[rowNum][j].v = rowData[j]
  // }

  //Shift array to left by Nth places
  // shiftArrayByPlaces(data,numOfPlaces){
  //   for(let i=0; i<numOfPlaces; i++)
  //     data = this.shiftArray(data);

  //   return data;     // alert(JSON.stringify(data));
  // }

  //   //Shift Array by one place to left
  // shiftArray(data){
  //   let temp = data[0];

  //   for(var i = 0; i < data.length-1; i++) 
  //     data[i] = data[i+1]
    
  //   data[data.length-1] = temp
    
  //   return data
  // }

// END || functions to generate sudoku 

// START || functions to disable random cells 
  // Randomly disable cell as per input parameter 
  // randomizeDisableCells(noOfCells) {
  //   var xRan, yRan, counter = 0;

  //   while (counter < noOfCells) {
  //     xRan = this.getRandomInt(9);
  //     yRan = this.getRandomInt(9);  
  //     if(this.data[xRan][yRan].s){
  //       this.data[xRan][yRan].s = false;
  //       counter++;
  //     }else{
  //       continue;
  //     }
  //   }
  // }

  // get Random number between 0 and 'max'
//   getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
//   }

// // END || functions to disable random cells 

//   delay(ms: number) {
//       return new Promise( resolve => setTimeout(resolve, ms) );
//   }
//   recieveValue($event) {
//     this.data[this.x][this.y].v = $event;

//     //    (async () => { 
//     //     // Do something before delay
//     //     // alert('before delay')
//     //     this.isSolved()

//     //     await this.delay(1000);
//     //      if(this.isFinished){
//     //       alert('FINISHED::'+this.isFinished) 
//     //      }else{
//     //       alert('else::'+this.isFinished) 
//     //      }
//     //     // Do something after
//     // })();
//   }

//   open(x, y, comp) {
//     this.x = x;
//     this.y = y;
//     this.modalService.open(comp, { centered: true, size: "sm" });
//   }




  // data = [
  //   [
  //     { v: 1, s: true },{ v: 2, s: true },{ v: 3, s: true },
  //     { v: 1, s: true },{ v: 5, s: true },{ v: 6, s: true },
  //     { v: 1, s: true },{ v: 8, s: true },{ v: 9, s: true }
  //   ],
  //   [
  //     { v: 1, s: true },{ v: 2, s: true },{ v: 3, s: true },
  //     { v: 4, s: true },{ v: 5, s: true },{ v: 6, s: true },
  //     { v: 7, s: true },{ v: 8, s: true },{ v: 9, s: true }
  //   ],
  //   [
  //     { v: 1, s: true },{ v: 2, s: true },{ v: 3, s: true },
  //     { v: 4, s: true },{ v: 5, s: true },{ v: 6, s: true },
  //     { v: 7, s: true },{ v: 8, s: true },{ v: 9, s: true }
  //   ],
  //   [
  //     { v: 1, s: true },{ v: 2, s: true },{ v: 3, s: true },
  //     { v: 4, s: true },{ v: 5, s: true },{ v: 6, s: true },
  //     { v: 7, s: true },{ v: 8, s: true },{ v: 9, s: true }
  //   ],
  //   [
  //     { v: 1, s: true },{ v: 2, s: true },{ v: 3, s: true },
  //     { v: 4, s: true },{ v: 5, s: true },{ v: 6, s: true },
  //     { v: 7, s: true },{ v: 8, s: true },{ v: 9, s: true }
  //   ],
  //   [
  //     { v: 1, s: true },{ v: 2, s: true },{ v: 3, s: true },
  //     { v: 4, s: true },{ v: 5, s: true },{ v: 6, s: true },
  //     { v: 7, s: true },{ v: 8, s: true },{ v: 9, s: true }
  //   ],
  //   [
  //     { v: 1, s: true },{ v: 2, s: true },{ v: 3, s: true },
  //     { v: 4, s: true },{ v: 5, s: true },{ v: 6, s: true },
  //     { v: 7, s: true },{ v: 8, s: true },{ v: 9, s: true }
  //   ],
  //   [
  //     { v: 1, s: true },{ v: 2, s: true },{ v: 3, s: true },
  //     { v: 4, s: true },{ v: 5, s: true },{ v: 6, s: true },
  //     { v: 7, s: true },{ v: 8, s: true },{ v: 9, s: true }
  //   ],
  //   [
  //     { v: 1, s: true },{ v: 2, s: true },{ v: 3, s: true },
  //     { v: 4, s: true },{ v: 5, s: true },{ v: 6, s: true },
  //     { v: 7, s: true },{ v: 8, s: true },{ v: 9, s: true }
  //   ]
  // ];
}
