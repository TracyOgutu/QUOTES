import { Component, OnInit, Input } from '@angular/core';

import{Quote} from '../quote'


@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  @Input() quote:Quote;
  vote =0;

  upVote():boolean{
    this.quote.upvote +=1;
    return false;
  }

  downVote():boolean{
    this.quote.downvote +=1;
    return false;
  }
  // numberOfUpvotes:number=0;
  // numberOfDownvotes:number=0;

  // upvoteButtonClick(){
  //  this.numberOfUpvotes++;

  // }

  // downvoteButtonClick(){
  //   this.numberOfDownvotes++;
  // }

  constructor() { }

  ngOnInit() {
  }

}
