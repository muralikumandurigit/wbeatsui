import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentslistComponent } from './studentslist/studentslist.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: 'studentslist', component: StudentslistComponent },
  { path: '**', component: AppComponent } // If no matching route found, go back to home route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
