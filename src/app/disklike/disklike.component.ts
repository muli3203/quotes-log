import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disklike',
  templateUrl: './disklike.component.html',
  styleUrls: ['./disklike.component.css']
})
export class DisklikeComponent implements OnInit {

  NumberOfDislikes: number = 0;
  
  DislikeButton() {
    this.NumberOfDislikes ++;
  }
  constructor() { }

  ngOnInit() {
  }

}
