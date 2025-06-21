import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './components/forms/forms.component';
import { HttpComponent } from './components/http/http.component';
import { InputOutputComponent } from './components/input-output/input-output.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { ObservableComponent } from './components/observable/observable.component';
import { PromisesComponent } from './components/promises/promises.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { MiscComponent } from './misc.component';

const routes: Routes = [
  { path: '', redirectTo: 'misc-landing', pathMatch: 'full' },
  { path: 'misc-landing', component: MiscComponent },
  { path: 'observables', component: ObservableComponent },
  { path: 'promises', component: PromisesComponent },
  { path: 'inputoutput', component: InputOutputComponent },
  { path: 'http', component: HttpComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'lifecycle', component: LifecycleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiscRoutingModule {}
