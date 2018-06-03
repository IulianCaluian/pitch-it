import { AppUser } from './models/app-user';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase,FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class UserService {

  constructor(
    private db: AngularFireDatabase,
    private http: Http
  ) {

   }

  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  update(userId,user){
    return this.db.object('/users/'+userId).update(user);
  }

  get(uid: string): FirebaseObjectObservable<AppUser>{

    let x = this.db.object('/users/' + uid);
    return x;

  }

  getMentors() {
    //lista = null;
  return this.http.get('http://localhost:8080/pitch-it/users');

  // let x =  this.db.list('/users');
  //   return x;
  }

}
