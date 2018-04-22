import { Component, OnInit } from '@angular/core';
import { IdeaService } from './../idea.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.css']
})
export class IdeaFormComponent implements OnInit {

  constructor(
    private router: Router,
    private ideaService:IdeaService) { }

  save(idea){
    this.ideaService.create(idea);
    this.router.navigate(['/my/ideas']);
  }

  ngOnInit() {
  }

}
