import { Component, OnInit, Input, Output, input, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaginationService } from '../service/pagination.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [NgFor, FormsModule, CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnInit {
@Input() totalI:any;
@Input() currentPage:any;
@Input() itemsPP:any;
@Output() onClick: EventEmitter<any> = new EventEmitter();
totalPages = 0;
pages:number[] = [];



constructor(){

}

  ngOnInit(){
  debugger;
  console.log("T"+ this.totalI);
  this.totalPages = Math.ceil(this.totalI / this.itemsPP);
  this.pages = Array.from({length: this.totalPages},(_,i) => i+1);
}

ngOnChanges(){
  debugger;
  console.log("T"+ this.totalI);
  this.totalPages = Math.ceil(this.totalI / this.itemsPP);
  this.pages = Array.from({length: this.totalPages},(_,i) => i+1);
}

changePage(page:number){
  this.currentPage = page;
}

pageClicked(pagi:number){
  this.onClick.emit(pagi);
  if(pagi < this.totalPages) this.currentPage = pagi;
}

}
