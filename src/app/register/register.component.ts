import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userurl=environment.userapi;

  /*myForm:FormGroup|any;
  name:FormControl|any;
  email:FormControl|any;
  mobile:FormControl|any;
  password:FormControl|any;
  Confirmpassword:FormControl|any;*/

  formValue:FormGroup=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    mobile:new FormControl(''),
    password:new FormControl('')
  })

  submitted=false;
  constructor(private http:HttpClient,private router:Router,private formbuilder:FormBuilder) { }
  ngOnInit(): void {
/*
    //Instance for values
    this.name= new FormControl('',[Validators.required]);
    this.email=new FormControl('',[Validators.required]);
    this.mobile=new FormControl('',[Validators.required]);
    this.password=new FormControl('',[Validators.required]);
    this.Confirmpassword=new FormControl('',[Validators.required]);
    //Validators:[Validation.match('registerpassword','registerconfirmpassword')];
    this.myForm=new FormGroup(
      {
        'registername':this.name,
        'registermail':this.email,
        'registermobile':this.mobile,
        'registerpassword':this.password,
        'registerconfirmpassword':this.Confirmpassword
      }
    );*/

    this.formValue=this.formbuilder.group(
      {
        name:['',Validators.required],
        email:['',Validators.required],
        mobile:['',Validators.required],
        password:['',Validators.required]
      }
    );
  }

  get f(){return this.formValue.controls;}

  Addregistereduser(){
    this.submitted=true;
    if(this.formValue.invalid){
      return;
    }

    this.http.post<any>(this.userurl,this.formValue.value)
    .subscribe(res=>{
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      })
      Toast.fire({
        icon: 'success',
        title: 'Sign Up Successful'
      })
      this.formValue.reset();
      this.router.navigate(['login']);
    })
  }

}
