import { Injectable } from '@angular/core';
import { AngularFireDatabase,FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class IdeaService {

  constructor(private db: AngularFireDatabase) { }

  create(idea){
    this.db.list('/ideas').push(idea);
  }
}
