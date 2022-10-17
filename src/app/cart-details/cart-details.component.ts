import { Component, OnInit } from '@angular/core';
import { Cartitem } from '../cartitem';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';//install

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  constructor(private cartSvc:CartService,private router:Router) { }

  carts:Cartitem={
    cart_id:0,
    cart_image:"",
    cart_name:"",
    cart_price:0,
    cart_quality:1,
    total_price:1
  }

  cartData:any=[];
  total_price:number=0;
  cart_quality=1;
  /*receivequntity($event:any){
    this.cart_quality=$event;
  }*/

  totalprice(data:any){
    debugger
    const intialvalue=0;
    this.cartData=data;
    const a=this.cartData.reduce((sum:any,item:any)=>sum+(item.cart_price),intialvalue);
    return a;
  }

  cart: Cartitem[] = [];

delete(deleteItem: Cartitem){
  this.cartSvc.removeCartitems(deleteItem).subscribe(
    ()=>console.log(deleteItem.cart_name)
  );

  const Toast = Swal.mixin({
    toast:true,
    position: 'top',
    showConfirmButton: false,
    timer:3000,
    timerProgressBar:true,
  })

  Toast.fire({
    icon: 'error',
    title: 'Item deleted successfully'
  })
  this.ngOnInit();
}

onClick(){
  this.router.navigate([''])
}

  ngOnInit(): void {
    this.cartSvc.getCartItems().subscribe(
      (response)=>{
        this.cart=response;
        console.log(this.cart);
      }
    )
  }

}
