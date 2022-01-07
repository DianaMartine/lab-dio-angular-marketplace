import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { CheckoutComponent } from './views/checkout/checkout.component';
import { HomeComponent } from './views/home/home.component';
import { ListFilmsComponent } from './views/list-films/list-films.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "list-films",
  component: ListFilmsComponent
},
{
  path: "checkout",
  component: CheckoutComponent
},
{
  path: 'about',
  component: AboutComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }