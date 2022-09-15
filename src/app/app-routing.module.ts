import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { TypeComponent } from './type/type.component';
import { CardComponent } from './card/card.component';
import { ContentContainerComponent } from './content-container/content-container.component';


const routes: Routes = [
  {path:'',component:ContainerComponent},
  {path:'card',component:CardComponent},
  {path:'type',component:TypeComponent},
  {path:'content-container',component:ContentContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
