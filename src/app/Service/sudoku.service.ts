import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class SudokuService {

  constructor() { }

  
  getSudoku(): Observable<any> {
    this.generateSudoku()
    return of(this.data);
  }

  generateSudoku(){
  
    var data = [1,2,3,4,5,6,7,8,9];
    
    var r1,r2,temp ; 

    for(var i = 0; i < 6; i++) {
      r1 = this.getRandomInt(9); r2 = this.getRandomInt(9)
      temp = data[r1]; data[r1] = data[r2];data[r2] = temp;
    }

    this.fillRow(data, 0)    
    this.fillRow(this.shiftArrayByPlaces(data, 3), 1)
    this.fillRow(this.shiftArrayByPlaces(data, 3), 2)    
    this.fillRow(this.shiftArrayByPlaces(data, 1), 3)    
    this.fillRow(this.shiftArrayByPlaces(data, 3), 4)    
    this.fillRow(this.shiftArrayByPlaces(data, 3), 5)    
    this.fillRow(this.shiftArrayByPlaces(data, 1), 6)
    this.fillRow(this.shiftArrayByPlaces(data, 3), 7)
    this.fillRow(this.shiftArrayByPlaces(data, 3), 8)
      
  }

  //this fills in data to Nth row with passed in data
  fillRow(rowData, rowNum){
    for(var j = 0; j < 9; j++)
      this.data[rowNum][j].v = rowData[j]
  }

  // get Random number between 0 and 'max'
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  //Shift array to left by Nth places
  shiftArrayByPlaces(data,numOfPlaces){
    for(let i=0; i<numOfPlaces; i++)
      data = this.shiftArray(data);

    return data;     // alert(JSON.stringify(data));
  }

  //Shift Array by one place to left
  shiftArray(data){
    let temp = data[0];

    for(var i = 0; i < data.length-1; i++) 
      data[i] = data[i+1]
    
    data[data.length-1] = temp
    
    return data
  }

  data = [
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
    ],
    [
      { v: 1, s: true },{ v: 2, s: true },{ v: 3, s: true },
      { v: 4, s: true },{ v: 5, s: true },{ v: 6, s: true },
      { v: 7, s: true },{ v: 8, s: true },{ v: 9, s: true }
    ]
  ];
}