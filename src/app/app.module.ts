import { ReplacePipe } from './pipe/replace.pipe';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { StarComponent } from './star/star.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { Error404Componet } from './error-404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "", redirectTo: "courses", pathMatch: "full"
    },
    {
      path: "courses", component: CoursesComponent
    },
    {
      path: '**', component: Error404Componet
    }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
