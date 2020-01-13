import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
