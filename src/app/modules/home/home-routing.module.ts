import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContextComponent} from "./components/context/context.component";
import {ProductsComponent} from "./components/products/products.component";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";
import {PlaceOrderComponent} from "./components/place-order/place-order.component";
import {OrdersComponent} from "./components/orders/orders.component";
import {CartComponent} from "./components/cart/cart.component";


const routes: Routes = [
  {path: '', redirectTo: '/home/process/products', pathMatch: 'full'},
  {
    path: 'process', component: ContextComponent, children: [
      {path: '', redirectTo: '/home/process/products', pathMatch: 'full'},
      {path:'products', component:ProductsComponent},
      {path:'details/:id', component:ProductDetailComponent},
      {path:'place-order/:id', component:PlaceOrderComponent},
      {path:'my-orders', component:OrdersComponent},
      {path:'cart', component:CartComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
