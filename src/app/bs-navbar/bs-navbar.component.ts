import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
  }

}
