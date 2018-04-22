import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { AppUser } from './models/app-user';
import { CanActivate } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class MentorAuthGuardService implements CanActivate{

  constructor(
    private authService:AuthService,
  ) { }

  canActivate() : Observable<boolean>{
    return this.authService.AppUser$
    .map(appUser => appUser.isMentor);
  }

}
