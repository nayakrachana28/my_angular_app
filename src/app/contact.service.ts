import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import the contact class
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  //create an array with the containtent
  contact_details: Contact[]=[
    {
      contact_id:1,
      contact_image1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiohAU_ZNSO8DiHRCBxB-5bR87u6W1LJ4W4w&usqp=CAU",
      contact_image2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpTFc1wuTBalwiG2CbsaDFdotTBmiUzyCekQ&usqp=CAU",
      contact_type:"ADDRESS",
      contact_description1:`LifeStyle Store Group
      14th street near yamma street,
      Bangalore PINCODE: 555987`,
      contact_description2:"LifeStyle Store Office Kadamba road near hill station, Bangalore PINCODE: 456738",
      contact_description3:""
    },{
      contact_id:2,
      contact_image1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwsUNynh1bf44cYN4KSAreVndWGk21xRik6Q&usqp=CAU",
      contact_image2:"data:image/png;base64,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",
      contact_type:"PHONE",
      contact_description1:`Lifestyle Store Group:
      (+91)-7890876579`,
      contact_description2:"Lifestyle Store Office:(+91)-9878670905",
      contact_description3:"Landline Number: 65787-645670"
    },{
      contact_id:3,
      contact_image1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAflr61iYoZmXCQji72ALdXiyw9nS3LUuyXU_ISME970g2JOdmQ6SH1ZQhmAQKhZRFa44&usqp=CAU",
      contact_image2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXeYI2qpAOYcEN8Kw_RecGbOMcB7zaSU-Wg&usqp=CAU",
      contact_type:"EMAIL",
      contact_description1:"Lifestyle Store Group: lifestyle.store.group@lifestyle.com creative.store@lifestyle.com",
      contact_description2:"Lifestyle Store Office: lifestyle.office.group@lifestyle.com",
      contact_description3:""
    }
  ];

  //Create a function to access the array
  //Obesrvable is used to access any datatype and used the arrow function in javascript to access the details from laptops
  public getcontactdetails():any{
    const contactObservable= new Observable(observe=>{
      setTimeout(()=> {
        observe.next(this.contact_details);
      },1000);
    });
    return contactObservable;
  }
}
