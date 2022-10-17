import { Injectable } from '@angular/core';
//import Httpclient for the http request for local host
import { HttpClient } from '@angular/common/http'; 
import { Cartitem } from './cartitem';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  url:string=""
  //extarct the url from environment
  carturl=environment.cartapi;

  constructor(private http:HttpClient) { 
    this.url=this.carturl+"/";
  }

  addToCart(product:Cartitem){
    this.http.post<Cartitem>(this.carturl,product).subscribe(data=>{
      console.log(product)
    })

  }

  getCartItems(){
    return this.http.get<Cartitem[]>(this.carturl);
  }

  removeCartitems(item:any){
   return this.http.delete(this.url+item.id);
  }

  public countproduct=new Subject<number>();
  getCount(){
    return this.getCartItems().subscribe(res=>{
      this.countproduct.next(res.length);
      console.log(this.countproduct+ "inside sub")
    })
  }

}
