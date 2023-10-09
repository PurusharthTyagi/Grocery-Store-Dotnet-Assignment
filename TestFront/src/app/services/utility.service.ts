import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';




@Injectable({

  providedIn: 'root'

})

export class UtilityService {




  changeCart = new Subject();




  constructor() { }




  applyDiscount(price: number, discount: number): number {

    let priceAfterDiscount = price - (price * (discount / 100));

    return priceAfterDiscount

  }




  addToCart() {

    this.changeCart.next(1);

  }

}