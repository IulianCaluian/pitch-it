import { Component, OnInit } from '@angular/core';
import { IdeaService } from './../idea.service';
import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { Router,ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.css']
})
export class IdeaFormComponent implements OnInit {
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

  save(idea){
    idea.owner = this.appUser;// TODO: nu ar trebui salvat complet - de modificat ulterior REDUNDAN
  //  idea.owner2 = this.user;
  console.log(idea);
    if(this.id)
      this.ideaService.update(this.id,idea);
    else
      this.ideaService.create(idea);

    this.router.navigate(['/my/ideas']);
  }

  delete(){
    if(confirm('Delete this idea?')) {
      this.ideaService.delete(this.id);
      this.router.navigate(['/my/ideas']);
    }
  }

  ngOnInit() {
  }

}
