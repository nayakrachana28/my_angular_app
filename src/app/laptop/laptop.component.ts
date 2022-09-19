import { Component, OnInit, Input } from '@angular/core';
import { retry } from 'rxjs';
//importing the laptop class and service
import { Laptop } from '../laptop';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {


  constructor() { }
   
 
  ngOnInit(): void {
   
  }

//Input Class Decorator
@Input()product:any

  //Toggle the containent

  Toggel_lap=true;

  Toggel_laptop()
  {
    this.Toggel_lap=!this.Toggel_lap;
  }

  Symbol_toggel_laptop(){
    var symbol_laptop='';
    if(this.Toggel_lap==true){
      symbol_laptop='fa-solid fa-angle-up';
    }
    else{
      symbol_laptop='fa-solid fa-angle-down';
    }
    return symbol_laptop;
  }




}
