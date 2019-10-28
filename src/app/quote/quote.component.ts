import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title = 'quotes';
  
  quotes:Quote[]=[
    new Quote(1,'There is only one happiness in life - to love and to be loved.',new Date(2019,3,27),'George Sand','Rita',0,0),
    new Quote(2,'Only a life lived for others is a life worthwhile',new Date(2019,1,27),'Albert Einstein','Zoey',0,0),
    new Quote(3,'Expect nothing, live frugally on surprise',new Date(2019,6,27),'Alice Walker','Shivan',0,0),
    // new Quote(4,'Everything has beauty, but not everyone sees it.',new Date(2019,1,18),'Confucius','Abe'),
    // new Quote(5,'Where there is love there is life.',new Date(2019,1,18),'Mahatma Gandhi','Gabriel'),
    // new Quote(6,'The only way to have a friend is to be one.',new Date(2019,1,18),'Ralph Waldo Emerson','Earl'),
    // new Quote(7,'He is not a lover who does not love forever.',new Date(2019,1,18),'Euripides','Maya'),
    // new Quote(8,'What great thing would you attempt if you knew you could not fail?',new Date(2019,1,18),'Robert H. Schuller','Tyler'),
    

  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  
  deleteQuote(isComplete, index){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].description}?`)
      
    
    if(toDelete){
      this.quotes.splice(index,1)
    }
  }
  
  }


  // makeUpvote(yesUpvote,index){

  //   if(yesUpvote){
  //     index = 0;
  //     index+1;
  //     return index;
  //   }
    
  // }
  // makeDownvote(yesDownvote,index){

  //   if(yesDownvote){
  //     let count = 0;
  //     count+1;
  //     return count;
  //   }
    
  // }

  // highlightQuote(){
  //   let upvoteArr:number[]=[];
  //   for(let i of this.quotes){
  //     upvoteArr.push(i.upvote);
  //   }
  //   let maxvote = Math.max(...upvoteArr);
  //   let highestQuotedVote = this.quotes.find(quote=>quote.upvote===maxvote);
  //   return highestQuotedVote;
  // }

//  upVote():boolean{
//     this.upvote +=1;
//     return false;
//   }numberOfUpvotes:number=0;
//   // numberOfDownvotes:number=0;

//   downVote():boolean{
//     downvote +=1;
//     return false;
//   }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit() {
  }

}
