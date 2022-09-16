import { Component, OnInit } from '@angular/core';
import * as pant from "../pants.json";
@Component({
  selector: 'app-pants',
  templateUrl: './pants.component.html',
  styleUrls: ['./pants.component.css']
})
export class PantsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  d_pants:any=(pant as any).default;



}
