import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { SudokuService } from '../Service/sudoku.service';


@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit, OnChanges {

    data;

    name = "Sudoku";
    x = "";
    y = "";
    @Input('init') numberOfCellsDisabled;
    @Output() difficulty = new EventEmitter();

    isFinished: boolean = false;
    sudokuSubmitted: boolean = false;

    ngOnChanges(changes: SimpleChanges) {
        console.log('called ng on changes')
        this.randomizeDisableCells(this.numberOfCellsDisabled);
    }

    constructor(private modalService: NgbModal,
        private sudokuService: SudokuService) {

    }
    ngOnInit() {


    }

    checkSolution() {

        console.log('in chcek solo')
        if (this.isSolved() == true) {
            this.isFinished = true
        } else {
            this.isFinished = false
        }
        this.sudokuSubmitted = true

    }

    changeDifficulty(difficultyType) {
        this.sudokuSubmitted = false
        this.isFinished = null

        console.log(difficultyType)
        this.difficulty.emit(difficultyType)
    }

    isSolved() {
        for (var j = 0; j < 9; j++) {
            for (var i = 0; i < 9; i++) {
                if (this.data[j][i].v == this.SolData[j][i].v) {
                    // this.isFinished = true
                    continue;
                }
                else {
                    // this.isFinished = false
                    console.log('in chcek solo::False')
                    return false;
                }
            }
        }
        return true;
    }

    // START || functions to disable random cells 
    // Randomly disable cell as per input parameter 
    randomizeDisableCells(noOfCells) {
        var xRan, yRan, counter = 0;
        this.data = null;

        this.sudokuService.getSudoku()
            .subscribe(returnedData => this.data = returnedData);

        // const solutionData = this.data;
        for (var j = 0; j < 9; j++) {
            for (var i = 0; i < 9; i++) {
                this.SolData[j][i].v = this.data[j][i].v
            }
        }
        console.log('solData:', this.SolData)
        console.log('solData:', this.data)

        for (var j = 0; j < 9; j++) {
            for (var i = 0; i < 9; i++) {
                this.data[j][i].s = true
            }
        }

        while (counter < noOfCells) {
            xRan = this.getRandomInt(9);
            yRan = this.getRandomInt(9);
            if (this.data[xRan][yRan].s) {
                this.data[xRan][yRan].s = false;
                counter++;
            }
        }


        for (var j = 0; j < 9; j++) {
            for (var i = 0; i < 9; i++) {
                if (this.data[j][i].s == true)
                    this.data[j][i].v = 0
            }
        }

    }

    // get Random number between 0 and 'max'
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    // END || functions to disable random cells 

    recieveValue($event) {
        this.data[this.x][this.y].v = $event;
    }

    open(x, y, comp, cssClass) {
        this.x = x;
        this.y = y;
        this.modalService.open(comp, { centered: true, size: "sm", windowClass: cssClass });
    }

    SolData = [
        [
            { v: 1, s: true }, { v: 2, s: true }, { v: 3, s: true },
            { v: 4, s: true }, { v: 5, s: true }, { v: 6, s: true },
            { v: 7, s: true }, { v: 8, s: true }, { v: 9, s: true }
        ],
        [
            { v: 1, s: true }, { v: 2, s: true }, { v: 3, s: true },
            { v: 4, s: true }, { v: 5, s: true }, { v: 6, s: true },
            { v: 7, s: true }, { v: 8, s: true }, { v: 9, s: true }
        ],
        [
            { v: 1, s: true }, { v: 2, s: true }, { v: 3, s: true },
            { v: 4, s: true }, { v: 5, s: true }, { v: 6, s: true },
            { v: 7, s: true }, { v: 8, s: true }, { v: 9, s: true }
        ],
        [
            { v: 1, s: true }, { v: 2, s: true }, { v: 3, s: true },
            { v: 4, s: true }, { v: 5, s: true }, { v: 6, s: true },
            { v: 7, s: true }, { v: 8, s: true }, { v: 9, s: true }
        ],
        [
            { v: 1, s: true }, { v: 2, s: true }, { v: 3, s: true },
            { v: 4, s: true }, { v: 5, s: true }, { v: 6, s: true },
            { v: 7, s: true }, { v: 8, s: true }, { v: 9, s: true }
        ],
        [
            { v: 1, s: true }, { v: 2, s: true }, { v: 3, s: true },
            { v: 4, s: true }, { v: 5, s: true }, { v: 6, s: true },
            { v: 7, s: true }, { v: 8, s: true }, { v: 9, s: true }
        ],
        [
            { v: 1, s: true }, { v: 2, s: true }, { v: 3, s: true },
            { v: 4, s: true }, { v: 5, s: true }, { v: 6, s: true },
            { v: 7, s: true }, { v: 8, s: true }, { v: 9, s: true }
        ],
        [
            { v: 1, s: true }, { v: 2, s: true }, { v: 3, s: true },
            { v: 4, s: true }, { v: 5, s: true }, { v: 6, s: true },
            { v: 7, s: true }, { v: 8, s: true }, { v: 9, s: true }
        ],
        [
            { v: 1, s: true }, { v: 2, s: true }, { v: 3, s: true },
            { v: 4, s: true }, { v: 5, s: true }, { v: 6, s: true },
            { v: 7, s: true }, { v: 8, s: true }, { v: 9, s: true }
        ]
    ];

}