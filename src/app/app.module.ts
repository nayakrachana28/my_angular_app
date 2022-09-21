import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// imprted for two way binding gor ngmodel
import { FormsModule } from '@angular/forms';
//import the reactive modules for form validation
import { ReactiveFormsModule } from '@angular/forms';
//Import Httpclientmodule for accesting the http localhost
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { NavComponent } from './nav/nav.component';
import { CardComponent } from './card/card.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { TypeComponent } from './type/type.component';
import { DressComponent } from './dress/dress.component';
import { PantsComponent } from './dress/pants/pants.component';
import { TopsComponent } from './dress/tops/tops.component';
import { MobileComponent } from './mobile/mobile.component';
import { OfferComponent } from './offer/offer.component';
import { QuntityComponent } from './quntity/quntity.component';
import { CounterComponent } from './quntity/counter/counter.component';
import { CardChildComponent } from './card/card-child/card-child.component';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileChildComponent } from './mobile/mobile-child/mobile-child.component';
import { LaptopChildComponent } from './laptop/laptop-child/laptop-child.component';
import { AdvertismentComponent } from './advertisment/advertisment.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    CardComponent,
    ContentContainerComponent,
    TypeComponent,
    DressComponent,
    PantsComponent,
    TopsComponent,
    MobileComponent,
    OfferComponent,
    QuntityComponent,
    CounterComponent,
    CardChildComponent,
    LaptopComponent,
    MobileChildComponent,
    LaptopChildComponent,
    AdvertismentComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    CartDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
