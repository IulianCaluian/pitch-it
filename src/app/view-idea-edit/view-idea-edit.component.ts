import { Component, OnInit } from '@angular/core';
import { IdeaService } from './../idea.service';
import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs/Rx"
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-view-idea-edit',
  templateUrl: './view-idea-edit.component.html',
  styleUrls: ['./view-idea-edit.component.css']
})
export class ViewIdeaEditComponent implements OnInit {
  idea = <any>{};
  comments$ ;
  stories$;
  id;
  appUser: AppUser = null;
  user;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ideaService:IdeaService,
    private authService:AuthService
  ) {
    authService.AppUser$.subscribe(appUser => this.appUser=appUser);
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

ngOnInit() {
}


}
