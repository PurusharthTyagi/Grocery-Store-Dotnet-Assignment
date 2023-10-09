import { Component, Input, OnInit } from '@angular/core';
import { Category, Product } from '../models/models';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserStoreService } from '../services/user-store.service';

@Component({
  selector: 'app-dashboard-c',
  templateUrl: './dashboard-c.component.html',
  styleUrls: ['./dashboard-c.component.css']
})
export class DashboardCComponent implements OnInit {
  searchKey:string='search';

  @Input() count: number = 3;
  @Input() view: 'dashboard' | 'cart' | 'prevOrders' = 'dashboard';

  @Input() category: Category = {
    id: 0,
    category: ''
  }

  sortby: 'default' | 'htl' | 'lth' = 'default';

  products: Product[] = [];

  public userIsAdmin : string = " ";

  constructor(private productsService: ProductsService, private router: Router,
    private authService: AuthService,
    private userStoreService: UserStoreService) { }


  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (response) => {
        console.log(response)
      }
    });
    this.productsService.search.subscribe((response:any)=>{
      this.searchKey=response;
    });

    this.userStoreService.getIsAdminFromStore().subscribe(
      val => {
        let userIsAdminFromToken = this.authService.getIsAdminFromToken();
        this.userIsAdmin = val || userIsAdminFromToken;
      }
    )

  }

  delete(productId: string) {
    this.productsService.deleteProduct(productId).subscribe({
      next: (response) => {
        window.location.reload()
      }
    })
  }

  defaultSort() {
    this.sortby = 'default';
    window.location.reload()
  }

  htlSort() {
    this.sortby = 'htl';
    this.products = this.products.sort((a, b) => b.price - a.price);
  }

  lthSort() {
    this.sortby = 'lth';
    console.log(this.products)
    this.products = this.products.sort((a, b) => a.price - b.price);
  }


}
