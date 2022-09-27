import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { UserService } from '../user.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private cartSvc:CartService,private authService:UserService,private authServiceadmin:AdminService) { }
  public logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6bG65rM5lr5sXogjdaT0PlxoykDZdqFqafQ&usqp=CAU";

  auth:boolean=false;
  auth_admin:boolean=false;

//Stayling the dropdowm menu
  drop_sty:any[]=['hovering'];
  //Add to cart count
  cartCount:number=0;
  ngOnInit(): void {
    //cart Count
    this.cartSvc.getCartItems().subscribe(
      (response)=>
      {
        this.cartCount=response.length;
        console.log(this.cartCount);
      }
    )
    this.cartSvc.countproduct.subscribe(
      (response)=>
      {
        this.cartCount=response;
        console.log(this.cartCount)
      }    
      )
      //register
      this.authService.authSubject.subscribe(
        data=>{
          console.log('auth inside nav component:'+data);
          this.auth=data;
        }
      );

      this.authServiceadmin.authSubject.subscribe(
        data=>{
          console.log('auth inside nav component:'+data);
          this.auth_admin=data;
        }
      );
  }

}
