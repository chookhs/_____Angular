import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {List1Component} from "./list1/list1.component";
import {List2Component} from "./list2/list2.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: 'list1', component: List1Component},
  {path: 'list2', component: List2Component},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
