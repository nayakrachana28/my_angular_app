import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  posturl=environment.postapi;

  postproduct(data:any){
    return this.http.post<any>(this.posturl,data).pipe(map((result:any)=>{
      return result;
    }))
  }

  getproduct(){
    return this.http.get<any>(this.posturl).pipe(map((result:any)=>{
      return result;
    }))
  }

  updateproduct(data:any,id:number){
    return this.http.put<any>(this.posturl+id,data).pipe(map((result:any)=>{
      return result;
    }))
  }

  deleteproduct(id:number){
    return this.http.delete<any>(this.posturl+id).pipe(map((result:any)=>{
      return result;
    }))
  }

}
