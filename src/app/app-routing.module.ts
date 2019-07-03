import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component'
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AccountComponent } from './components/account/account.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'account', component: AccountComponent },
  { path: 'cart', component: CartComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
