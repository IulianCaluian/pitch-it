import { Component, OnInit } from '@angular/core';
import { IdeaService } from './../idea.service';
import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
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
  comments$ ;
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
  }

  saveComment(comment){
    comment.user = this.appUser.name;// TODO: nu ar trebui salvat complet - de modificat ulterior REDUNDAN
  //  idea.owner2 = this.user;
  console.log(comment);
  if(this.id)
     this.ideaService.addComment(this.id,comment);

  }


  ngOnInit() {
  }


}