import { Injectable } from '@angular/core';
import { AngularFireDatabase,FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class IdeaService {

  constructor(private db: AngularFireDatabase) { }

  create(idea){
    return this.db.list('/ideas').push(idea);
  }

  update(ideaId,idea){
    return this.db.object('/ideas/'+ideaId).update(idea);
  }

  delete(ideaId){
    return this.db.object('/ideas/'+ideaId).remove();
  }



  getAll(){
    return this.db.list('/ideas');
  }

  get(ideaId){
    return this.db.object('/ideas/'+ideaId);
  }
}
