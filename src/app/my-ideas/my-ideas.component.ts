import { Component, OnInit,OnDestroy } from '@angular/core';
import { IdeaService } from './../idea.service';
import { AuthService } from './../auth.service';
import { UserService } from './../user.service';
import { AppUser } from './../models/app-user';
import { ISubscription } from "rxjs/Subscription";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-my-ideas',
  templateUrl: './my-ideas.component.html',
  styleUrls: ['./my-ideas.component.css']
})
export class MyIdeasComponent implements OnInit ,OnDestroy{
  ideas: any[] ;
   myIdeas: any[] ;
  appUser: AppUser;
  filters= {};
  subscription: ISubscription;
  email;

  constructor(private ideaService:IdeaService,
      private authService:AuthService,
      private userService:UserService
  ) {
  //  this.subscription = a uthService.AppUser$.subscribe(appUser =>
  //     this.appUser=appUser);

       authService.user$.switchMap(user => {
        console.log("User auth: ");
        console.log(user);
        return this.userService.get(user.uid);
      //  console.log("User db: " );
        //console.log(this.appUser);
      }).subscribe(x => {
        console.log(x);
        this.email=x.email;
        console.log(this.email);
      });

      // .subscribe(appUser => {
      //   console.log("User application:");
      //   console.log(appUser);
      //   this.appUser = appUser;
      // });



  }

  private applyFilters(){
    console.log("Mailul este : ----><----------");
    console.log(this.email);
    this.myIdeas = new Array();
    for(var i=0;i<this.ideas.length;i++){

      if(this.ideas[i].owner.email == this.email){
        //  console.log(this.ideas[i]);
          this.myIdeas.push(this.ideas[i]);
      }
    }

    console.log(this.ideas);
    console.log(this.myIdeas);
    console.log(this.email);
  }

  ngOnInit() {
    this.ideaService.getAll().subscribe(ideas => {
      this.ideas = ideas;
      console.log(ideas);
      this.applyFilters();
    });

  }

  ngOnDestroy() {
  //  this.subscription.unsubscribe();
  }


}
