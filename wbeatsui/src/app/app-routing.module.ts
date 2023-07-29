import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AdmissionsComponent } from './pages/admissions/admissions.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { CareersComponent } from './pages/careers/careers.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'programs', component: ProgramsComponent},
  {path: 'admissions', component: AdmissionsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'careers', component: CareersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
