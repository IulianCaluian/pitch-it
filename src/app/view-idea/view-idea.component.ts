import { Component, OnInit } from '@angular/core';
import { IdeaService } from './../idea.service';
import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { UserService } from './../user.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs/Rx"
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-view-idea',
  templateUrl: './view-idea.component.html',
  styleUrls: ['./view-idea.component.css']
})
export class ViewIdeaComponent implements OnInit {
  idea = <any>{};
  follow = false;
  comments$ ;
  stories$;
  id;
  mySubscription;
  appUser: AppUser = null;
  user;
  key;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ideaService:IdeaService,
    private authService:AuthService,
    private userService:UserService
  ) {
    authService.AppUser$.subscribe(appUser => {console.log(appUser);this.key = appUser.$key;  this.appUser=appUser; });
    this.authService.user$.subscribe(user => {
      if (user) {
          this.user = user;
      }});

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.ideaService.get(this.id).take(1).subscribe(i => this.idea = i);
    if (this.id) this.comments$ = this.ideaService.getComments(this.id);
    if (this.id) this.stories$ = this.ideaService.getStories(this.id);




  }

  saveComment(comment){
    comment.user = this.appUser.name;// TODO: nu ar trebui salvat complet - de modificat ulterior REDUNDAN
  //  idea.owner2 = this.user;
  console.log(comment);
  if(this.id)
     this.ideaService.addComment(this.id,comment);

  }

  upExecute(story){
    story.ups = story.ups + 1;
    this.ideaService.updateStory(this.id,story.$key,story);
  }

  downExecute(story){
    story.downs = story.downs + 1;
    this.ideaService.updateStory(this.id,story.$key,story);
  }

  followS(){
    if(this.mySubscription)
      this.mySubscription.unsubscribe();
    this.follow=true;
    this.userService.pushFollow(this.key,this.id);
  }

  unfollowS(){
    this.follow=false;

    this.mySubscription = this.userService.getFollows(this.key).subscribe(
      lista => {
        for(let i=0;i<lista.length;i++){
            if(lista[i].$value == this.id){
                this.userService.deleteFollow(this.key,lista[i].$key);
                break;
              }
        }
      }
    );

  //  this.userService.deleteFollow(this.key,this.id);

  }


  ngOnInit() {
    this.userService.getFollows(this.key).subscribe(
      lista => {
        for(let i=0;i<lista.length;i++){
            if(lista[i].$value == this.id){
                this.follow = true;
                break;
              }
        }
      }
    );
  }


}
