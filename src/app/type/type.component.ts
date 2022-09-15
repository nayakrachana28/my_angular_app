import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  constructor() { }

  //Try to access the parent child in cards
  types_names:any | undefined;
  @Input('product')

  set types_n(types_n:any)
{
  this.types_names=types_n;

}
get types_n():string
{
  return this.types_names;
}





  ngOnInit(): void {
  }



}
