import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common_components/header/header.component';
import { FooterComponent } from './common_components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdmissionsComponent } from './pages/admissions/admissions.component';
import { CareersComponent } from './pages/careers/careers.component';
import { ImageScrollComponent } from './common_components/image-scroll/image-scroll.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClickableCircleComponent } from './common_components/clickable-circle/clickable-circle.component';
import { FloatingCircleComponent } from './common_components/floating-circle/floating-circle.component';
import { MovingCircleComponent } from './common_components/moving-circle/moving-circle.component';
import { BalloonComponent } from './common_components/balloon/balloon.component';
import { HomeAnimationComponent } from './common_components/home-animation/home-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProgramsComponent,
    ContactComponent,
    AdmissionsComponent,
    CareersComponent,
    ImageScrollComponent,
    ClickableCircleComponent,
    FloatingCircleComponent,
    MovingCircleComponent,
    BalloonComponent,
    HomeAnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
