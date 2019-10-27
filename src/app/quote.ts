export class Quote {

showDescription: boolean;
constructor(public id: number,public description: string, public completeDate:Date,public author:string,public user:string){
    this.showDescription=false;
  }
}
