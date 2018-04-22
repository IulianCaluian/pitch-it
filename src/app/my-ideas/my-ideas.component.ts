import { Component, OnInit } from '@angular/core';
import { IdeaService } from './../idea.service';

@Component({
  selector: 'app-my-ideas',
  templateUrl: './my-ideas.component.html',
  styleUrls: ['./my-ideas.component.css']
})
export class MyIdeasComponent implements OnInit {
  ideas$;

  constructor(private ideaService:IdeaService) {
    this.ideas$ = this.ideaService.getAll();
  }

  ngOnInit() {
  }

}
