import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-header',
  imports: [MatButtonModule,MatSlideToggleModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
