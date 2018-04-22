import { environment } from './../environments/environment'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './auth.service';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { IdeasComponent } from './ideas/ideas.component';
import { MentorsComponent } from './mentors/mentors.component';
import { LoginComponent } from './login/login.component';
import { MentoringIdeasComponent } from './mentor/mentoring-ideas/mentoring-ideas.component';
import { HomeComponent } from './home/home.component';
import { MyIdeasComponent } from './my-ideas/my-ideas.component';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    IdeasComponent,
    MentorsComponent,
    LoginComponent,
    MentoringIdeasComponent,
    HomeComponent,
    MyIdeasComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'ideas', component: IdeasComponent },
      { path: 'mentors', component: MentorsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'my/ideas', component: MyIdeasComponent },
      { path: 'mentor/mentoring-ideas', component: MentoringIdeasComponent }
    ])
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
