import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../models/order';
import { AuthService } from '../services/auth.service';
import { ProductsService } from '../services/products.service';
import { UserStoreService } from '../services/user-store.service';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-product-details-c',
  templateUrl: './product-details-c.component.html',
  styleUrls: ['./product-details-c.component.css']
})
export class ProductDetailsCComponent implements OnInit {

  product: any

  public userIsAdmin: string = " ";

  priceAfterDiscount: number = 0


  constructor(private currentRoute: ActivatedRoute,
    private authService: AuthService,
    private userStoreService: UserStoreService, private prodservice: ProductsService,
    public utilityService: UtilityService) { }

  ngOnInit(): void {
    const details = this.currentRoute.snapshot.paramMap.get('product')

    if (details != null) {

      this.product = JSON.parse(details);

      this.priceAfterDiscount = this.utilityService.applyDiscount(this.product.price, this.product.discount)

    }

    this.userStoreService.getIsAdminFromStore().subscribe(
      val => {
        let userIsAdminFromToken = this.authService.getIsAdminFromToken();
        this.userIsAdmin = val || userIsAdminFromToken;

      }
    );

  }
  AddProductToCart(product: any) {
    this.utilityService.addToCart();
    var username = localStorage.getItem('UserName');
    if (username) {
      console.log(product);
      var cartitem: Order = {
        OrderId: 0,
        productId: product.productId,
        username: username,
        productName: product.productName,
        productDescription: product.productDescription,
        category: product.category,
        availableQuantity: product.availableQuantity,
        price: product.price,
        discount: product.discount,
        img: product.img,
        specification: product.specification
      }
      this.prodservice.AddToCart(cartitem).subscribe((response) => console.log(response));
    }
  }

  islogged(): boolean {
    return localStorage.getItem("access_token") ? true : false;
  }

}
