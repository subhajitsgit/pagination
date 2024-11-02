import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginationService } from './service/pagination.service';
import { PaginationComponent } from './pagination/pagination.component';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PaginationComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular';
  productList:any[] = [];
  currentPage:any;
  itemsPerPage:any;
  items:any;

  constructor(private service:PaginationService){}
  ngOnInit(): void {
    debugger;
    this.currentPage = 1;
    this.itemsPerPage = 5;
    this.service.fetchDetails().subscribe({
      next: response=>{
        this.productList = response;
        console.log(this.productList);
        this.items = this.productList.length; 
      }
    });
  }
  changePage(page:any){
    this.currentPage = page;
  }
  
  get paginatedData(){
      debugger;
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      this.items = this.productList.length;
      return this.productList.slice(start, end);
  }
  
}

