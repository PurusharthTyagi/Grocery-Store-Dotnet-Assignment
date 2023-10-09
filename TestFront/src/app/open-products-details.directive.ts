import { Directive, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[OpenProductsDetails]'
})
export class OpenProductsDetailsDirective {

  constructor(private router: Router) { }

  @Input() product: any

  @HostListener('click') openProductsDetails() {
    console.log(this.product)
    window.scrollTo(0, 0);
    this.router.navigate(['/product-details', {
      product: JSON.stringify(this.product)
    }])
  }

}
