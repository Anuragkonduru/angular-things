import { Routes } from '@angular/router';
import { NotfoundComponent } from './core/components/notfound/notfound.component';
import { LandingComponent } from './things/components/landing/landing.component';

export const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: '**', component: NotfoundComponent },
];
