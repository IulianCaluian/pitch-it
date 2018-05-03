import { Component, OnInit } from '@angular/core';
import { AppUser } from './../models/app-user';
import { UserService } from './../user.service';
import { AuthService } from './../auth.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs/Rx"
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  appUser: AppUser = {} as AppUser;
  pathUser: AppUser = {} as AppUser;
  id;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService:UserService,
    private authService:AuthService
  ) {

    authService.AppUser$.subscribe(appUser => this.appUser = appUser);

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.userService.get(this.id).take(1).subscribe(i => this.pathUser = i);


   }

  ngOnInit() {
    console.log(this.appUser);
    console.log(this.pathUser);
  }

}

  // saveComment(comment){
  //   comment.user = this.appUser.name;// TODO: nu ar trebui salvat complet - de modificat ulterior REDUNDAN
  // //  idea.owner2 = this.user;
  // console.log(comment);
  // if(this.id)
  //    this.ideaService.addComment(this.id,comment);
  //
  // }
