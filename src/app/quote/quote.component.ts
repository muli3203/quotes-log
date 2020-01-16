import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Either get busy living or get busy dying', '-S.K',new Date(1964,0,14),0),
    new Quote(2,'Remember, Hope is a good thing, maybe the best of things, and no good thing ever dies','-S.K',new Date(2019,6,9),0),
    new Quote(3,'You can not deny laughter;when it comes,it plops down in your favourite chair and stays as long as it wants','-S.K',new Date(2020,0,14),0),
    
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
    this.quotes[index].showCreatedDate = !this.quotes[index].showCreatedDate;
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  countClick(quote) {
    quote.clickCounter = quote.clickCounter + 1;
  }

  clickCounter = 0;

  highestCounter = 0;
  bestQuote:string;

  findHighestVotes(){
    this.highestCounter = 0;
    for(let i=0; i < this.quotes.length; i++){
      if(this.quotes[i].clickCounter>this.highestCounter){
        this.highestCounter = this.quotes[i].clickCounter;
        this.bestQuote = this.quotes[i].name;
      }
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
