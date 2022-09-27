import { Component, OnInit } from '@angular/core';
import { FormArrayName, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';
import Swal from 'sweetalert2';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formvalue!:FormGroup;

  userapi=environment.userapi;
  adminapi=environment.adminapi;

  submitted=false;
  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router,private userService:UserService,private adminService:AdminService) { }

  ngOnInit(): void {
    this.userService.validateAuth(false);
    this.adminService.validateAuth_admin(false);
    this.formvalue=this.formbuilder.group(
      {
        email:['',[Validators.required]],
        password:['',[Validators.required]]
      }
    );
   
  }

  get f(){return this.formvalue.controls;}

  submitHandler(){
    this.submitted=true;
    if(this.formvalue.invalid){
      return;
    }

    this.http.get<any>(this.adminapi)
    .subscribe(res=>{
      const admin=res.find((a:any)=>{
        return a.email === this.formvalue.value.email && a.password === this.formvalue.value.password
      });

      if(admin){
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        })
        Toast.fire({
          icon: 'success',
          title: 'Login Successful'
        })
        this.formvalue.reset();
        this.router.navigate([''])
        this.adminService.validateAuth_admin(true);
      }else{
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        })
        Toast.fire({
          icon: 'error',
          title: 'User not found'
        })     
        this.adminService.validateAuth_admin(false);      
      }
    })
  

    this.http.get<any>(this.userapi)
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.email === this.formvalue.value.email && a.password === this.formvalue.value.password
      });

      if(user){
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        })
        Toast.fire({
          icon: 'success',
          title: 'Login Successful'
        })
        this.formvalue.reset();
        this.router.navigate([''])
        this.userService.validateAuth(true);
      }else{
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        })
        Toast.fire({
          icon: 'error',
          title: 'User not found'
        })     
        this.userService.validateAuth(false);      
      }
    })
  }
}
