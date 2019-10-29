export class Quote {

showDescription: boolean;

constructor(public id: number,public description: string, public completeDate:Date,public author:string,public user:string,public upvote:number,public downvote:number){
    this.showDescription=false;
    this.upvote=0;
    this.downvote=0;
  }
}