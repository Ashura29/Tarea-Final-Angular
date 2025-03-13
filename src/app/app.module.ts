import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
    declarations: [
      // Remove all standalone components from here
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      // Add your standalone components here instead
      AppComponent,
      HomeComponent,
      TasksComponent,
      ProfileComponent,
      NavBarComponent
    ],
    providers: [],
    bootstrap: []
  })
  export class AppModule { }