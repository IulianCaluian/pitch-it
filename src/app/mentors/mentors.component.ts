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
  brutMentors : any[];
  subscription: ISubscription;

  constructor(private userService:UserService) {
   this.subscription = this.userService.getMentors()
   .subscribe(mentors => {
     this.mentors = mentors;
     console.log(this.mentors);
   });
   // this.brutMentors= new Array();
   // this.subscription= this.userService.getMentors().subscribe(
   //     response => {
   //       var nr = 0;
   //       this.mentors = new Array();
   //       console.log("----AICI-----\n\n");
   //    this.brutMentors =     response.json();
   //
   //
   //    for(var i=0; i< this.brutMentors.length; i++){
   //      if(this.brutMentors[i].nume){
   //        this.brutMentors[i].name = this.brutMentors[i].nume;
   //      }
   //      if(this.brutMentors[i].email){
   //        this.brutMentors[i].email_address = this.brutMentors[i].email;
   //      }
   //
   //      if(this.brutMentors[i].mentor){
   //        this.brutMentors[i].isMentor = this.brutMentors[i].mentor;
   //      }
   //
   //      if(this.brutMentors[i].phone){
   //        this.brutMentors[i].phone_number = this.brutMentors[i].phone;
   //      }
   //
   //      if(this.brutMentors[i].isMentor == true){
   //        this.mentors.push(this.brutMentors[i]);
   //      }
   //    }
   //    //this.mentors = this.brutMentors;
   //    console.log(this.mentors);
   //
   //     }
   //   );


  }


  ngOnInit() {
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
