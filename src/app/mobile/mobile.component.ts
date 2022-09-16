import { Component, OnInit } from '@angular/core';
import * as Mobiles from "../data/Mobile.json"

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  p_mobile:any=(Mobiles as any).default;

}
