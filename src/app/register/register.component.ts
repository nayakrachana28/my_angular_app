import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  myForm:FormGroup|any;
  registername:FormControl|any;
  registermail:FormControl|any;
  registermobile:FormControl|any;
  registerpassword:FormControl|any;
  registerconfirmpassword:FormControl|any;
  registeracceptTerms:FormControl|any;

  ngOnInit(): void {

    //Instance for values
    this.registername= new FormControl('',[Validators.required,Validators.maxLength(15)]);
    this.registermail=new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$')]);
    this.registermobile=new FormControl('',[Validators.required,Validators.minLength(10)]);
    this.registerpassword=new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern('^[a-zA-Z0-9]{6,16}$')]);
    this.registerconfirmpassword=new FormControl('',[Validators.required]);
    this.registeracceptTerms=new FormControl([false,Validators.requiredTrue]);
    //Validators:[Validation.match('registerpassword','registerconfirmpassword')];
    this.myForm=new FormGroup(
      {
        'registername':this.registername,
        'registermail':this.registermail,
        'registermobile':this.registermobile,
        'registerpassword':this.registerpassword,
        'registerconfirmpassword':this.registerconfirmpassword
      }
    )
  }

}
