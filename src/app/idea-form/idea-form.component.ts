import { Component, OnInit } from '@angular/core';
import { IdeaService } from './../idea.service';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.css']
})
export class IdeaFormComponent implements OnInit {

  constructor(private ideaService:IdeaService) { }

  save(idea){
    this.ideaService.create(idea);
  }

  ngOnInit() {
  }

}
