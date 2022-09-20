import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//Access the class laptop.ts by importing
import { Laptop } from './laptop';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  constructor() { }

  //Created an array for the class and retriving the details in an array
  laptops: Laptop[] = [
    {
      lid:1,
      lname:"Lenovo ThinkBook 11 Gen",
      ldescription:"11th Generation Intel® Core™ i5-1135G7 Processor (2.40 GHz up to 4.20 GHz), Memory: 8 GB SDRAM DDR4 Accent green",
      lprice:67000.00,
      lstatus:"InStock",
      loldprice:75000.00,
      limage:"https://www.lenovo.com/medias/ThinkBook-14-Gen-2-Intel-hero.png?context=bWFzdGVyfHJvb3R8NjYwMDh8aW1hZ2UvcG5nfGg2NC9oZjYvMTMwMzMyMzY0NjM2NDYucG5nfDdlZWU5OGJlYzllYWI0OTM2NDcyMjMwYzA4ZmY3OWRjZDFkNTI4NjgxNWJhOGRmNmZlYTE3OWUzODhmOWQyZjM"
    },
    {
      lid: 2,
      lname: "Acer Aspire 7 ",
      ldescription: "Acer Aspire 7 A715-42G 15.6 inch FHD Gaming Laptop – NH.QAYSI.001 | Ryzen 5 5500U | 8GB DDR4 RAM| i5-1135G7 Processor",
      lprice: 60999.00,
      lstatus: "OutofStock",
      loldprice:65000.00,
      limage: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/16-5620/media-gallery/notebook-inspiron-16-5620-2-in-1-gy-fpr-gallery-3.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=570&qlt=100,0&resMode=sharp2&size=570,402"
    },
    {
      lid: 3,
      lname: "HP Pavilion Laptop 14",
      ldescription: "Windows OS · AMD GPU · Solid State Drive · With No-glare Screen, / NVIDIA Graphics / Win 11",
      lprice: 49300.00,
      lstatus: "InStock",
      loldprice:59000.00,
      limage: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSNkFbLsTYf9X_GM3EpdnF6tScwLnizJ98CeYal2qjkI2ChRpDkcQ37LS6n9izDoMGpFWaL3_7GeI1RTg9cCAY0Vcjg9tE1EC47AE0WsWA42FcHQtHTuYow"
    },
    {
      lid: 4,
      lname: "Lenovo 7KIN IdeaPad slim 3i laptop",
      ldescription: "Intel celeron N4020/4GB/256GB/ Window 11/MSO/HD, 35.56 cm(14 inch) / NVIDIA Graphics / Win 11",
      lprice: 78000.00,
      lstatus: "OutofStock",
      loldprice:84000.00,
      limage: "https://www.reliancedigital.in/medias/Lenovo-81WH007KIN-LAPTOP-492849666-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3MzM3OHxpbWFnZS9qcGVnfGltYWdlcy9oYmQvaDViLzk4NDkyMzg0NTQzMDIuanBnfDE1ZDJmMzI4OWM0ZTRhZTU5ZmYxZTlmZGEwMmI2ZmY5OWIzOGJmMWQxMTBjYTgzZDA0MDEyMjJiMWNmMjdmMzU"
    },
    {
      lid: 5,
      lname: "Dell Inspiron 3511 D560674WIN9S",
      ldescription: "11th Gen Intel i5 Processor/ 8 GB RAM / 1 TB HDD + 256 GB SSD / 15.6 inch(39.62cm)Display / NVIDIA Graphics / Win 10",
      lprice: 54000.00,
      lstatus: "InStock",
      loldprice:63890.00,
      limage: "https://d2xamzlzrdbdbn.cloudfront.net/products/6a94ad6b-ae8e-4479-b6ef-cba7d0bf180922221224_416x416.jpg"
    },
    {
      lid: 6,
      lname: "Dell Inspiron 3515 AMD Ryzen 3",
      ldescription: "14 inch, 8GB, 1TB, Windows 11, MS Office 2021, AMD Radeon Vega Graphics, FHD IPS Display, Accent Black, D552234WIN9B",
      lprice: 43500.00,
      lstatus: "InStock",
      loldprice:54378.00,
      limage: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1648102081/Croma%20Assets/Computers%20Peripherals/Laptop/Images/250374_dtw0uc.png/mxw_2048,f_auto"
    },
    {
      lid: 7,
      lname: "MacBook Air - Gold",
      ldescription: "Apple M1 chip with 8‑core CPU, 7‑core GPU, 16‑core Neural Engine 8GB unified memory 256GB SSD storage Best for gameing",
      lprice: 90400.00,
      lstatus: "OutofStock",
      loldprice:96800.00,
      limage: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-gold-select-201810?wid=1078&hei=624&fmt=jpeg&qlt=90&.v=1633027804000"
    },
  ];

  
  //Create a function to access the array
  //Obesrvable is used to access any datatype and used the arrow function in javascript to access the details from laptops
  public getlaptopdeatils(): any {
    const laptopObservable = new Observable (observe => {
      //setTimeout is the function that takes the details and set the time
      setTimeout(() => {
        observe.next(this.laptops);
      },1000);
    });
    return laptopObservable;
  }
}
