import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentslistComponent } from './components/studentslist/studentslist.component';
import { StudentAdmissionComponent } from './components/student-admission/student-admission.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'studentslist', component: StudentslistComponent },
  { path: 'student/admission', component: StudentAdmissionComponent },
  { path: '**', component: HomeComponent } // If no matching route found, go back to home route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
