import { Component, OnInit } from '@angular/core';
//importing the laptop class and service
import { Laptop } from 'src/app/laptop';
import { LaptopService } from 'src/app/laptop.service';

@Component({
  selector: 'app-laptop-child',
  templateUrl: './laptop-child.component.html',
  styleUrls: ['./laptop-child.component.css']
})
export class LaptopChildComponent implements OnInit {

   //taking the details from laptop class and puting that into an array
   laptopdetails:Laptop[]=[];
   //creating a constructor for accessing the deatils
   constructor(private lapservice:LaptopService) { }

 //to fetch the details automatically to the website
  ngOnInit(): void {
    const lapObservable=this.lapservice.getlaptopdeatils();
    lapObservable.subscribe((lapData: Laptop[]) =>{
      this.laptopdetails=lapData;
    });
  }

}
