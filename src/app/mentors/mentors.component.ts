import { Component, OnInit,OnDestroy } from '@angular/core';
import { UserService } from './../user.service';
import { ISubscription } from "rxjs/Subscription";
import { AppUser } from './../models/app-user';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.css']
})
export class MentorsComponent implements OnInit, OnDestroy {
  mentors: AppUser[];
  subscription: ISubscription;
  constructor(private userService:UserService) {
   this.subscription = this.userService.getMentors()
   .subscribe(mentors => {this.mentors = mentors;});

  }


  ngOnInit() {
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
