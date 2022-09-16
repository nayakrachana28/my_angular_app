import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
  public logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6bG65rM5lr5sXogjdaT0PlxoykDZdqFqafQ&usqp=CAU";

//Stayling the dropdowm menu
  drop_sty:any[]=['hovering'];
  ngOnInit(): void {
  }

}
