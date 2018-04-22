import { Component, OnInit } from '@angular/core';
import { IdeaService } from './../idea.service';
import { Router,ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';


@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.css']
})
export class IdeaFormComponent implements OnInit {
  idea = {};
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ideaService:IdeaService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.ideaService.get(this.id).take(1).subscribe(i => this.idea = i)
  }

  save(idea){
    if(this.id)
      this.ideaService.update(this.id,idea);
    else
      this.ideaService.create(idea);
      
    this.router.navigate(['/my/ideas']);
  }

  ngOnInit() {
  }

}
