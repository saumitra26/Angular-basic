import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { counterReducer } from './pages/counter/store/counter.reducer';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { departmentReducer } from './store/reducer';
import { DepartmentEffects } from './store/effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({counter:counterReducer, department:departmentReducer}),
    provideEffects([DepartmentEffects]),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(routes),
  ]
};
