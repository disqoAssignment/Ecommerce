import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from "./components/layout/layout.component";
import {LoginGuard} from "./login.guard";


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../inventory/inventory.module').then(m => m.InventoryModule)
      },
      {
        path: 'cart',
        canLoad: [LoginGuard],
        loadChildren: () => import('../cart/cart.module').then(m => m.CartModule)
      },
      {
        path: 'order',
        canLoad: [LoginGuard],
        loadChildren: () => import('../order/order.module').then(m => m.OrderModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../account/account.module').then(m => m.AccountModule)
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonsRoutingModule { }
