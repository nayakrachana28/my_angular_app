import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-child',
  templateUrl: './card-child.component.html',
  styleUrls: ['./card-child.component.css']
})
export class CardChildComponent implements OnInit {

  constructor() { }

  @Input()product_card:any

  /*prod_id:string='';
view_details(pr_id:string):void{
  this.prod_id=pr_id;
  console.log(pr_id);
}
*/

//toggel card details

t_card=true;
toggel_card()
{

  this.t_card=!this.t_card;
  //used string interpolation for changing + and -

}

symbol_toggel(){
  var symbol='';
  if(this.t_card==true){
    symbol='fa-solid fa-angle-up';
  }
  else{
    symbol='fa-solid fa-angle-down';
  }
  return symbol;
}



sty_array:string[]=['border'];

//calling the instance to style the ngclass
sty:card_styling_content=new card_styling_content();

  ngOnInit(): void {
  }

}
class card_styling_content{
  coloring:boolean=true;
  text:boolean=true;
}