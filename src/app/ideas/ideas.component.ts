import { Component, OnInit } from '@angular/core';
import { IdeaService } from './../idea.service';
import { AuthService } from './../auth.service';
import { AppUser } from './../models/app-user';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit {

  ideas: any[];

  constructor(private ideaService:IdeaService,
  ) {
     this.ideaService.getAll().subscribe(ideas => {
       this.ideas = ideas;

     })
  }

  ngOnInit() {
  }

}
