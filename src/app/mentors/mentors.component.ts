import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.css']
})
export class MentorsComponent implements OnInit {
  mentors$;

  constructor(private userService:UserService) {
    this.mentors$ = this.userService.getMentors();
  }

  ngOnInit() {
  }

}
