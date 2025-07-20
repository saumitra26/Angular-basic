import { Routes } from '@angular/router';
import { MediaComponent } from './pages/media/media.component';
import { HeaderComponent } from './core/header/header.component';
import { FormComponentComponent } from './pages/form-component/form-component.component';
import { DataSharingComponent } from './pages/data-sharing/data-sharing.component';
import { CounterComponent } from './pages/counter/counter.component';


export const routes: Routes = [
  {
    path: '',
    component: MediaComponent,
  },
  {
    path: 'form',
    component: FormComponentComponent,
  },
  {
    path: 'sharing',
    component: DataSharingComponent,
  },
  {
    path: 'counter',
    component: CounterComponent,
  },
   
];