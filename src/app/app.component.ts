import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/header/header.component";
import { MediaComponent } from './pages/media/media.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,MediaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'all-basic';
}
