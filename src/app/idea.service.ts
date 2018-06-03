import { Injectable } from '@angular/core';
import { AngularFireDatabase,FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class IdeaService {

  constructor(private db: AngularFireDatabase) { }

  create(idea){
    return this.db.list('/ideas').push(idea);
  }

  addComment(ideaId,comment){
    return this.db.list('/ideas/'+ideaId+'/comments').push(comment);
  }

  addStory(ideaId,story){
    return this.db.list('/ideas/'+ideaId+'/stories').push(story);
  }

  update(ideaId,idea){
    return this.db.object('/ideas/'+ideaId).update(idea);
  }

  updateStory(ideaId,storyId,story){
    return this.db.object('ideas/'+ideaId+'/stories/'+storyId).update(story);
  }

  delete(ideaId){
    return this.db.object('/ideas/'+ideaId).remove();
  }



  getAll(){
    return this.db.list('/ideas');
  }

  getAllCurent(owner){
    return this.db.list('/ideas', {
    query: {
      orderByChild: 'owner',
      equalTo: owner,
    }
    });
  }

  get(ideaId){
    return this.db.object('/ideas/'+ideaId);
  }

  getComments(ideaId){
    return this.db.list('/ideas/'+ideaId+'/comments');
  }

  getStories(ideaId){
    return this.db.list('/ideas/'+ ideaId+ '/stories');
  }
}
