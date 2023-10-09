import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-cart-c',
  templateUrl: './cart-c.component.html',
  styleUrls: ['./cart-c.component.css']
})
export class CartCComponent implements OnInit {

  public cartList: any;

  priceAfterDiscount: number = 0;

  constructor(private productService: ProductsService,
    public utilityService: UtilityService) {

  }

  ngOnInit(): void {
    var usrname = localStorage.getItem('UserName');
    if (usrname) {
      console.log(usrname);
      this.productService.GetCartProduct(usrname).subscribe((response) => {
        // var order=response;
        // console.log("order",order);
        this.cartList = response;
        console.log("hello", this.cartList);
      });
    }
  }


  remove(username: string, productId: string) {

    this.productService.removeFromCart(username, productId).subscribe((res) => {

      window.location.reload()

    })

  }


}
