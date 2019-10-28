import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  numberOfVotes:number;

  upvoteButtonClick(){
   this.numberOfVotes++;
  }

  downvoteButtonClick(){
    this.numberOfVotes--;
  }

  constructor() { }

  ngOnInit() {
  }

}
