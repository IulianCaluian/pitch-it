import { Component, OnInit } from '@angular/core';
import { IdeaService } from './../idea.service';
import { AuthService } from './../auth.service';
import { AppUser } from './../models/app-user';

@Component({
  selector: 'app-my-ideas',
  templateUrl: './my-ideas.component.html',
  styleUrls: ['./my-ideas.component.css']
})
export class MyIdeasComponent implements OnInit {
  ideas: any[];
  appUser: AppUser;
  filters= {};

  constructor(private ideaService:IdeaService,
      private authService:AuthService
  ) {
    authService.AppUser$.subscribe(appUser => this.appUser=appUser);
     this.ideaService.getAll().subscribe(ideas => {
       this.ideas = ideas;
       this.applyFilters();
     })
  }

  private applyFilters(){
    this.ideas = this.ideas.filter(p => (p.owner.email == this.appUser.email));
    console.log(this.ideas);
    console.log(this.appUser.email);
  }

  ngOnInit() {
  }

}
