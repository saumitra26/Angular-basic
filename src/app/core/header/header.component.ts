import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import { JupitarService } from '../../services/jupitar.service';
@Component({
  selector: 'app-header',
  imports: [MatButtonModule,MatSlideToggleModule,MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  currentrole:string=''
 constructor(private jupitarService: JupitarService) {
  
 }
  ngOnInit(): void {
    
  }
}
