import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// imprted for two way binding gor ngmodel
import { FormsModule } from '@angular/forms';
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
    CardChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
