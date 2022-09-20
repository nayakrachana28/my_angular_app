import { Component, OnInit } from '@angular/core';
//Import the service and classes
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactdetails:Contact[]=[];

  constructor(private contservice:ContactService) { }

  ngOnInit(): void {
    const contObservable=this.contservice.getcontactdetails();
    contObservable.subscribe((contactData: Contact[])=>{
      this.contactdetails=contactData;
    });
  }

}
