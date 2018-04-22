import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { AppUser } from './models/app-user';
import { CanActivate,Router,RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class MentorAuthGuardService implements CanActivate{

  constructor(
    private authService:AuthService,
    private router:Router,
    private userService:UserService
  ) { }

  canActivate(route, state: RouterStateSnapshot) : Observable<boolean>{
    return this.authService.user$
    .switchMap(user => this.userService.get(user.uid))
    .map(appUser => appUser.isMentor);
  }

}
