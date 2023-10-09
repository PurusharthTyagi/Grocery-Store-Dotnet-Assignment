import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardCComponent } from './dashboard-c/dashboard-c.component';
import { ProductDetailsCComponent } from './product-details-c/product-details-c.component';
import { CartCComponent } from './cart-c/cart-c.component';
import { MyOrdersCComponent } from './my-orders-c/my-orders-c.component';
import { HeaderCComponent } from './header-c/header-c.component';
import { FooterCComponent } from './footer-c/footer-c.component';
import { PageNotFoundCComponent } from './page-not-found-c/page-not-found-c.component';
import { OpenProductsDirective } from './open-products.directive';
import { OpenProductsDetailsDirective } from './open-products-details.directive';
import { SignupCComponent } from './signup-c/signup-c.component';
import { LoginCComponent } from './login-c/login-c.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddProductCComponent } from './add-product-c/add-product-c.component';
import { EditProductCComponent } from './edit-product-c/edit-product-c.component';
import { AuthService } from './services/auth.service';
import { FilterPipe } from './Shared/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DashboardCComponent,
    ProductDetailsCComponent,
    CartCComponent,
    MyOrdersCComponent,
    HeaderCComponent,
    FooterCComponent,
    PageNotFoundCComponent,
    OpenProductsDirective,
    OpenProductsDetailsDirective,
    SignupCComponent,
    LoginCComponent,
    AddProductCComponent,
    EditProductCComponent,
    FilterPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
