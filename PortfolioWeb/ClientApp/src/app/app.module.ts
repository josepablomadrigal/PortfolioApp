import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AboutMeComponent } from "./about-me/about-me.component";
import { ContactMeComponent } from "./contact-me/contact-me.component";
import { ProjectsComponent } from "./projects/projects.component";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: AboutMeComponent, pathMatch: 'full' },
      { path: 'projects', component: ProjectsComponent },
      { path: 'contact-me', component: ContactMeComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
