import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quntity',
  templateUrl: './quntity.component.html',
  styleUrls: ['./quntity.component.css']
})
export class QuntityComponent implements OnInit {

  constructor() { }

  count:number=1;

  receiveValue($event:number){
    this.count=$event;
  }


  ngOnInit(): void {
  }

}
