import { Component, OnInit } from '@angular/core';
import { IdeaService } from './../idea.service';
import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { Router,ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-story-edit',
  templateUrl: './story-edit.component.html',
  styleUrls: ['./story-edit.component.css']
})
export class StoryEditComponent implements OnInit {
  idea = <any>{};
  id;
  appUser: AppUser;
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
      if (this.id) this.ideaService.get(this.id).take(1).subscribe(i => this.idea = i)
    }


    save(story){
    story.user = this.appUser.name;

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1; //January is 0!
let yyyy = today.getFullYear();
let dds,mms;
if(dd<10) {dds = '0'+dd}
if(mm<10) {mms = '0'+mm}
let todayS = dds + '/' + mms + '/' + yyyy;
console.log(todayS);


    story.date = today;
    story.ups = 0;
    story.downs = 0;

    console.log(story);
    if(this.id){
       this.ideaService.addStory(this.id,story);
       this.router.navigate(['/ideas/edit-view/'+this.id]);
     }
    }




    ngOnInit() {
    }

  }
