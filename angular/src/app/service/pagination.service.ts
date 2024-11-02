import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor(private http: HttpClient) { }

  fetchDetails():Observable<any>{
    debugger;
    var val = this.http.get<any>('https://localhost:7207/api/admin').pipe(map(response => response));
    console.log('value= ' + val);
    return this.http.get<any>('https://localhost:7207/api/admin').pipe(map(response => response));
  }
}
