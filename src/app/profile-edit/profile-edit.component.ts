import { Component, OnInit } from '@angular/core';
import { AppUser } from './../models/app-user';
import { UserService } from './../user.service';
import { AuthService } from './../auth.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs/Rx"
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent  {

  appUser: AppUser = {} as AppUser;
  id;

  constructor(
    private router: Router,
    private authService:AuthService,
    private userService:UserService,
    private route: ActivatedRoute
  ) {
    authService.AppUser$.subscribe(appUser => this.appUser = appUser);
    this.id= this.id = this.route.snapshot.paramMap.get('id');
   }


  update(f){
    console.log(f);
    console.log(this.appUser);
    this.userService.update(this.id,this.appUser);
    this.router.navigate(['/profile/'+this.id]);
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
