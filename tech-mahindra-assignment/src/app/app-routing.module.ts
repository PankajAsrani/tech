import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { ShowComponent } from './show/show.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'show/:id',component:ShowComponent},
  {
    path:'new',component:NewComponent
  },{
    path:'**',component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
