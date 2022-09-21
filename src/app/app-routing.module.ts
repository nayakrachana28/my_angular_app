import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { TypeComponent } from './type/type.component';
import { CardComponent } from './card/card.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { DressComponent } from './dress/dress.component';
import { MobileComponent } from './mobile/mobile.component';
import { LaptopComponent } from './laptop/laptop.component';
import { LaptopChildComponent } from './laptop/laptop-child/laptop-child.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';


const routes: Routes = [
  {path:'',component:ContainerComponent},
  {path:'card',component:CardComponent},
  {path:'type',component:TypeComponent},
  {path:'content-container',component:ContentContainerComponent},
  {path:'pants',component:DressComponent},
  {path:'mobile',component:MobileComponent},
  {path:'laptop',component:LaptopComponent},
  {path:'laptop-child',component:LaptopChildComponent},
  {path:'contact',component:ContactComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'cart-details',component:CartDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
