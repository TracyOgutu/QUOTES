import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Quote} from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input()quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  @Output() yesUpvote = new EventEmitter<boolean>();
  @Output() yesDownvote=new EventEmitter<boolean>();


  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  // quoteUpvote(upvote:boolean){
  //   this.yesUpvote.emit(upvote);

  // }
  
  // quoteDownvote(downvote:boolean){
  //   this.yesDownvote.emit(downvote);


  // }

  constructor() { }

  ngOnInit() {
  }

}
