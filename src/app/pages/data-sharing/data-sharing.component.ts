import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-data-sharing',
  imports: [FormsModule,MatFormFieldModule, MatInputModule,
    MatButtonModule,],
  templateUrl: './data-sharing.component.html',
  styleUrl: './data-sharing.component.css'
})
export class DataSharingComponent implements OnInit{
  @Output() bookTitleCreated= new EventEmitter<{title:string}>();
  @Input() inputFromParent:string
   bookTitle = '';

  ngOnInit(): void {
    
  }
  
  onAddTitle(){
    this.bookTitleCreated.emit({title:this.bookTitle})
      this.bookTitle = '';
    console.log('test',this.bookTitle);
  }

}
