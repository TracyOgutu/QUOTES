import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

import{Quote} from '../quote';


@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  @Input() quote: Quote;
  
  // upVote():boolean{
  //   this.quote.upvote +=1;
  //   return false;
  // }numberOfUpvotes:number=0;
  // // numberOfDownvotes:number=0;

  // downVote():boolean{
  //   this.quote.downvote +=1;
  //   return false;
  // }

  voting(index:number){

    // this.quotes[index].votes+=1;

  }

  devoting(index:number){
     // this.quotes[index].votes-=1;
    //  if (this.quotes[index].votes<0){
    //   this.quotes[index].votes=0;
    //  }
  }
  highestVoted(){
    
  }
  
  // numberOfUpvotes:any =new Quote(0,"",new Date(),"","",0,0);
  
  // @Output()makeVote=new EventEmitter<Quote>();

  
  

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
