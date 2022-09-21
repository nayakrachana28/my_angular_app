import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Cartitem } from 'src/app/cartitem';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-mobile-child',
  templateUrl: './mobile-child.component.html',
  styleUrls: ['./mobile-child.component.css']
})
export class MobileChildComponent implements OnInit {

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
    this.cart.cart_image=product.img;
    this.cart.cart_name=product.pname;
    this.cart.cart_price=product.price;
    this.cart.cart_quality=product.quantity;
    this.cart.cart_id=product.pid;
    this.cart.total_price=product.total_price;
    this.cartsvc.addToCart(this.cart);
    console.log(product.pid);
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
