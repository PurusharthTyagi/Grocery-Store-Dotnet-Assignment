import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductCComponent } from './add-product-c/add-product-c.component';
import { CartCComponent } from './cart-c/cart-c.component';
import { DashboardCComponent } from './dashboard-c/dashboard-c.component';
import { EditProductCComponent } from './edit-product-c/edit-product-c.component';
import { LoginCComponent } from './login-c/login-c.component';
import { MyOrdersCComponent } from './my-orders-c/my-orders-c.component';
import { PageNotFoundCComponent } from './page-not-found-c/page-not-found-c.component';
import { ProductDetailsCComponent } from './product-details-c/product-details-c.component';
import { SignupCComponent } from './signup-c/signup-c.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardCComponent },
  { path: 'product-details', component: ProductDetailsCComponent },
  { path: 'add-product', component: AddProductCComponent },
  { path: 'cart', component: CartCComponent },
  { path: 'my-orders', component: MyOrdersCComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginCComponent },
  { path: 'signup', component: SignupCComponent },
  { path: 'dashboard/edit-product/:productId', component: EditProductCComponent },
  { path: '**', component: PageNotFoundCComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
