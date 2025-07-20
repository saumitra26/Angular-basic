import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectDeparments, selectLoad } from './store/selector';
import { loadDepartment } from './store/action';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  private store= inject(Store)
  department$=this.store.select(selectDeparments);
  loading$=this.store.select(selectLoad);
  title = 'all-basic';
   data: string = 'Some input from parent';
  receivedTitle:string
 ngOnInit(): void {
  this.store.dispatch(loadDepartment())
 }
  onBookTitleReceived(event: any){
    this.receivedTitle=event.title;
    console.log('value',event.title);
  }
}
