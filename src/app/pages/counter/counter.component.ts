import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from './store/counter.action';
import { selectCount } from './store/counter.selector';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../../services/highlight.directive';

@Component({
  selector: 'app-counter',
  imports: [CommonModule,HighlightDirective],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
count$:Observable<number>
 
constructor(private store:Store) {
  this.count$=this.store.select(selectCount)
}
  increment(){
      this.store.dispatch(increment());
  }
  decrement(){
    this.store.dispatch(decrement());
  }
  reset(){
    this.store.dispatch(reset());
  }

}


