import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NumPickerComponent } from './num-picker/num-picker.component';
import { GridComponent } from './grid/grid.component';
import { SudokuService } from './Service/sudoku.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, NgbModule ],
  declarations: [ AppComponent, NumPickerComponent, GridComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SudokuService]
})
export class AppModule { }
