import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-child',
  templateUrl: './mobile-child.component.html',
  styleUrls: ['./mobile-child.component.css']
})
export class MobileChildComponent implements OnInit {

  constructor() { }

  //input from parent
  @Input()mobile_product:any
  //Toggel the containtent
  Toggel_mob=true;

  Toggel_mobile()
  {
    this.Toggel_mob=!this.Toggel_mob;
  }

  Symbol_toggel_mobile(){
    var symbol_mobile='';
    if(this.Toggel_mob==true){
      symbol_mobile='fa-solid fa-angle-up';
    }
    else{
      symbol_mobile='fa-solid fa-angle-down';
    }
    return symbol_mobile;
  }

  ngOnInit(): void {
  }

}
