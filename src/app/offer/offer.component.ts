import { Component, OnInit } from '@angular/core';
import * as product_offer from "../data/offers.json"

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  constructor() { }

  //extracting the JSON file product_offer from offers.json
  p_offer:any=(product_offer as any).default

  ngOnInit(): void {
  }

}
