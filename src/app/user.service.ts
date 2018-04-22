import { AppUser } from './models/app-user';
import { Injectable } from '@angular/core';
import { AngularFireDatabase,FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  get(uid: string): FirebaseObjectObservable<AppUser>{
    return this.db.object('/users/' + uid);
  }

  getMentors() {
    return this.db.list('/users');

  //   let users: AppUser[];
  //   users = this.db.list('/users');
  //   let mentors: AppUser[] = {};
  //
  //   for(let i=0; i < users.length; i++)
  //     if(users[i].isMentor)
  //       mentors.add(users[i]);
  //   return mentors;
  }

}
