import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  numberOfUpvotes:number=0;
  numberOfDownvotes:number=0;

  upvoteButtonClick(){
   this.numberOfUpvotes++;
  }

  downvoteButtonClick(){
    this.numberOfDownvotes++;
  }

  constructor() { }

  ngOnInit() {
  }

}
