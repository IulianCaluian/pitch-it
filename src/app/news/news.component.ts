import { Component, OnInit,OnDestroy } from '@angular/core';
import { IdeaService } from './../idea.service';
import { AppUser } from './../models/app-user';
import { AppStory } from './../models/app-story';
import { AuthService } from './../auth.service';
import { UserService } from './../user.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs/Rx"
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit,OnDestroy {
idea = <any>{};
itemList$:Observable<any[]>;
newItem$:Observable<any[]>;
stories;
follow = false;
stories$;
appUser: AppUser = null;
user;
mySubscription

constructor(
  private router: Router,
  private route: ActivatedRoute,
  private ideaService:IdeaService,
  private authService:AuthService,
  private userService:UserService
) {
  authService.AppUser$.subscribe(appUser => this.appUser=appUser);
  this.authService.user$.subscribe(user => {
    if (user) {
        this.user = user;
    }});
}


upExecute(story){
  story.ups = story.ups + 1;
  this.ideaService.updateStory(story.ideaId,story.$key,story);
}

downExecute(story){
  story.downs = story.downs + 1;
  this.ideaService.updateStory(story.ideaId,story.$key,story);
}

ngOnDestroy(){
  this.mySubscription.unsubscribe();
}

ngOnInit() {

  this.mySubscription = this.userService.getFollows(this.appUser.$key).subscribe(

    ideas => {
      this.stories = new Array();
      for(let i=0; i<ideas.length ;i++){

         //  console.log(ideas[i].$value);
         //  this.newItem$ = this.ideaService.getStories(ideas[i].$value);
         //  console.log(this.newItem$);
         //  if(this.itemList$){
         //     this.itemList$ = Observable.merge(this.newItem$,this.itemList$);
         //     this.itemList$.subscribe(
         //
         //       lista => {
         //         console.log("merge 1------------------ ");
         //         console.log(lista);
         //         console.log("merge ------------------2 ");}
         //     )
         //   }
         // else {console.log("ELSE");
         //   this.itemList$ = this.newItem$;
         //
         // }
        this.ideaService.getStories(ideas[i].$value).subscribe(
        lista => {
        //    console.log("Asta este");
            //console.log(lista);
          //  console.log(lista);
          if(lista!=null && lista.length>0){
            let idIde = lista[0].ideaId;
            let newArray = this.stories.filter( ( el ) => !(el.ideaId == idIde));
            this.stories = newArray.concat(lista);
          //  console.log(newArray);
            //this.stories = newArray;
            this.stories.sort(this.compare);
          }

        });
      }

      //this.itemList$.subscribe( storis => console.log(storis));
    }
  );
}

compare(a,b) {
  console.log(a.date + " --- " + b.date);
  let lista = a.date.split("/");
  let listb = b.date.split("/");
  let ya = Number(lista[2]);
  let yb = Number(listb[2]);
  if (ya!=yb)return yb-ya;
  ya = Number(lista[1]);
  yb = Number(listb[1]);
  if (ya!=yb)return yb-ya;
  ya = Number(lista[0]);
  yb = Number(listb[0]);
  if (ya!=yb)return yb-ya;

  lista = a.time.split(":");
  listb = b.time.split(":");
  ya = Number(lista[0]);
  yb = Number(listb[0]);
  if(ya!=yb)return yb-ya;
  ya = Number(lista[1]);
  yb = Number(listb[1]);
  if(ya!=yb)return yb-ya;




  return -1;
}

}
