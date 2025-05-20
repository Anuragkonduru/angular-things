import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './components/observable/observable.component';
import { MiscComponent } from './misc.component';

const routes: Routes = [
  { path: '', redirectTo: 'misc-landing', pathMatch: 'full' },
  { path: 'misc-landing', component: MiscComponent },
  { path: 'observables', component: ObservableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiscRoutingModule {}
