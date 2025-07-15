import { Routes } from '@angular/router';
import { MediaComponent } from './pages/media/media.component';
import { HeaderComponent } from './core/header/header.component';
import { FormComponentComponent } from './pages/form-component/form-component.component';


export const routes: Routes = [
  {
    path: '',
    component: MediaComponent,
  },
   {
    path: 'form',
    component: FormComponentComponent,
  },
   
];