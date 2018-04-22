import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe((x) => {
      console.log(x);
    });
   }

  login(){
    console.log("OK sunt in serv");
    this.afAuth.auth.signInWithRedirect(
      new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.afAuth.auth.signOut();
  }

}
