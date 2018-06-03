import { environment } from './../environments/environment';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { MentorAuthGuardService } from './mentor-auth-guard.service';
import { UserService } from './user.service';
import { IdeaService } from './idea.service';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { IdeasComponent } from './ideas/ideas.component';
import { MentorsComponent } from './mentors/mentors.component';
import { LoginComponent } from './login/login.component';
import { MentoringIdeasComponent } from './mentor/mentoring-ideas/mentoring-ideas.component';
import { HomeComponent } from './home/home.component';
import { MyIdeasComponent } from './my-ideas/my-ideas.component';
import { IdeaFormComponent } from './idea-form/idea-form.component';
import { SummaryPipe } from './summary.pipe';
import { ViewIdeaComponent } from './view-idea/view-idea.component';
import { ReversePipe } from './reverse.pipe';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { NewsComponent } from './news/news.component';
import { StoryComponent } from './story/story.component';
import { ViewIdeaEditComponent } from './view-idea-edit/view-idea-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    IdeasComponent,
    MentorsComponent,
    LoginComponent,
    MentoringIdeasComponent,
    HomeComponent,
    MyIdeasComponent,
    IdeaFormComponent,
    SummaryPipe,
    ViewIdeaComponent,
    ReversePipe,
    RegisterComponent,
    ProfileComponent,
    ProfileEditComponent,
    NewsComponent,
    StoryComponent,
    ViewIdeaEditComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'ideas', component: IdeasComponent },
      { path: 'mentors', component: MentorsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent},
      { path: 'story/:id', component: StoryComponent},
      { path: 'profile/:id', component: ProfileComponent },
      { path: 'edit-profile/:id', component: ProfileEditComponent },
      {
        path: 'ideas/new',
        component: IdeaFormComponent ,
        canActivate: [AuthGuardService]
      },
      {
        path: 'news',
        component: NewsComponent ,
        canActivate: [AuthGuardService]
      },
      {
        path: 'ideas/edit-view/:id',
        component: ViewIdeaEditComponent ,
        canActivate: [AuthGuardService]
      }
      {
        path: 'ideas/edit/:id',
        component: IdeaFormComponent ,
        canActivate: [AuthGuardService]
      },
      {
        path: 'ideas/:id',
        component: ViewIdeaComponent
      },

      {
        path: 'my/ideas',
        component: MyIdeasComponent ,
        canActivate: [AuthGuardService]
      },
      {
        path: 'mentor/mentoring-ideas',
        component: MentoringIdeasComponent,
        canActivate: [AuthGuardService,MentorAuthGuardService]
      }
    ])
  ],
  providers: [
    AuthService,
    AuthGuardService,
    MentorAuthGuardService,
    UserService,
    IdeaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
