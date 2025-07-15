import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-component',
  imports: [ReactiveFormsModule,FormsModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatSelectModule,CommonModule],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css'
})
export class FormComponentComponent implements OnInit {
  constructor(private fb: FormBuilder){

  }
  reactiveFormExample!:FormGroup
  ngOnInit(): void {
     this.reactiveFormExample = new FormGroup({
      input: new FormControl('', Validators.required),
      selection: new FormControl('', Validators.required),
      textareaField: new FormControl('')
    });
  }
  

 submitForm(formValue:any){
  console.log('value',formValue.value)
 }
 submitReactiveForm(formDirective: FormGroupDirective) {
  console.log(this.reactiveFormExample.value);
  formDirective.resetForm();
  this.reactiveFormExample.reset();
  
}
}
