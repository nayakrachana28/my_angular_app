import { Component, OnInit, Input } from '@angular/core';
import { retry } from 'rxjs';
//importing the laptop class and service
import { Laptop } from '../laptop';
import { LaptopService } from '../laptop.service';

import { CartService } from '../cart.service';
import { Cartitem } from '../cartitem';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {


  constructor(private cartsvc:CartService) { }
  cart:Cartitem={
    cart_id:0,
    cart_image:"",
    cart_name:"",
    cart_price:0,
    cart_quality:1,
    total_price:1
  }
  quantity:number=1;

  addToCart(product:any){
    this.cart.cart_image=product.limage;
    this.cart.cart_name=product.lname;
    this.cart.cart_price=product.lprice;
    this.cart.cart_quality=product.quantity;
    this.cart.cart_id=product.lid;
    this.cart.total_price=product.total_price;
    this.cartsvc.addToCart(this.cart);
    console.log(product.lid);
    const Tost= Swal.mixin({
      toast:true,
      position:'top',
      showConfirmButton:false,
      timer:3000,
      timerProgressBar:true,
    })
    Tost.fire({
      icon:'success',
      title:'Item Added Successfully'
    })
    this.cartsvc.getCount();
  }  

 
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
