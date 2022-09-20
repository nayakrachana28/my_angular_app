import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

productdetails:any=[
  {
    "pid":"001",
    "pimage":"https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer.jpg",
    "pname":"Laptops",
    "pdescrption":"A portable microcomputer having its main components (such as processor, keyboard, and display screen).",
    //"pstatus":"Instock",
    "ptypes":[{
      "typespimage":"https://cdn.mos.cms.futurecdn.net/aHq2mRpFe8PNjasu8SGFtY-1200-80.jpg",
      "typesname":"Lenovo Yoga 9i 14 (Gen 7)"
    },{
      "typespimage":"https://cdn.mos.cms.futurecdn.net/8QoWDQrU7NCgyADGKEcR6R-1200-80.jpg",
      "typesname":"HP Spectre x360 13.5"
    }
  ]
},
  {
    "pid":"002",
    "pimage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuFdVngkG5TS0fuQDFjgjnnGlSiALJJ2x9-Q&usqp=CAU",
    "pname":"Smart phone",
    "pdescrption":"a mobile phone that performs many of the functions of a computer, typically having a touchscreen interface, internet access, and an operating system capable of running downloaded apps."
    //"pstatus":"OutofStock"

  },
  {
    "pid":"003",
    "pimage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zeSgpzOqjE8PUEfkVBS0SkoQyEoT0V3yzQ&usqp=CAU",
    "pname":"Headphone",
    "pdescrption":"A pair of small speakers used for listening to sound from a computer, music player or other such device."
    //"pstatus":"Instock"

  },
  {
    "pid":"004",
    "pimage":"https://www.hazoorilaljewellers.com/wp-content/uploads/2022/02/03-1.jpg",
    "pname":"Jewellery",
    "pdescrption":"A pair of small speakers used for listening to sound from a computer, music player or other such electronic device."
    //"pstatus":"OutofStock"

  },
  {
    "pid":"005",
    "pimage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQORq0suv1TmEUu09WEdPcpANYIdYMR0vgfKw&usqp=CAU",
    "pname":"Womens wear",
    "pdescrption":"The fashion and trend for new women's wear have changed. Here is some new trendy different types of women's wear.A pair of small speakers used for listening to sound from a computer, music player or other such electronic device."
    //"pstatus":"OutofStock"

  },
  {
    "pid":"006",
    "pimage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa7TjZRBtLpRgUvcRUmWqGLTnTaU0fLnaQQg&usqp=CAU",
    "pname":"Footwears",
    "pdescrption":"A pair of small speakers used for listening to sound from a computer, music player or other such electronic device."
    //"pstatus":"Instock"

  },
  {
    "pid":"007",
    "pimage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEwgdW-fwH4FaIkXsKu-soMAoaC8OBB7bmgQ&usqp=CAU",
    "pname":"Means Wear",
    "pdescrption":"The fashion and trend for new men's wear have changed. Here is some new trendy different types of men's wear"
    //"pstatus":"Instock"

  }

]

prod_id:string='';
view_details(pr_id:string):void{
  this.prod_id=pr_id;
  console.log(pr_id);
}


//toggel card details

t_card=true;
symbol:any='+';
toggel_card()
{
  this.t_card=!this.t_card;
  //used string interpolation for changing + and -
  if(this.t_card){
    this.symbol='+';
  }
  else{
    this.symbol='-';
  }
}


 //used ngClass for changing + and -


 /*
 t_card=false;
 
 toggel_card(){
  this.t_card=!this.t_card;
 }
 toggleContent(){
  var symbol:any='';
  if(this.t_card){
    symbol='fa-solid fa-arrow-up';
  }
  else{
     symbol='fa-solid fa-arrow-down';
  }
  return symbol;
}

*/
  ngOnInit(): void {
  }
//style using the array and making that in the .css
sty_array:string[]=['border'];

//calling the instance to style the ngclass
sty:card_styling_content=new card_styling_content();


}
//style using ngclass
class card_styling_content{
  coloring:boolean=true;
  text:boolean=true;
}