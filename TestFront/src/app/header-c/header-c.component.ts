import { Component, OnInit } from '@angular/core';
import { NavigationItem } from '../models/models';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserStoreService } from '../services/user-store.service';
import { ProductsService } from '../services/products.service';
import { UtilityService } from '../services/utility.service';


@Component({
  selector: 'app-header-c',
  templateUrl: './header-c.component.html',
  styleUrls: ['./header-c.component.css']
})
export class HeaderCComponent implements OnInit {
  public SearchTerm:string='';

  navigationList: NavigationItem[] = [
    {
      category: 'Snacks'
    },
    {
      category: 'Fruits'
    },
    {
      category: 'Vegetables'
    },
    {
      category: 'Drinks'
    },
    {
      category: 'Utensils'
    }
  ];

  public userName: string = " ";
  public userIsAdmin : string = " ";

  public cartItems : number =0 

  constructor(private router: Router,
    private authService: AuthService,
    private userStoreService: UserStoreService,
    private prodService:ProductsService,
    public utilityService: UtilityService) { }

  ngOnInit(): void {

    this.userStoreService.getNameFromStore().subscribe(
      val => {
        let userNameFromToken = this.authService.getNameFromToken();
        this.userName = val || userNameFromToken;
      }
    )

    this.userStoreService.getIsAdminFromStore().subscribe(
      val => {
        let userIsAdminFromToken = this.authService.getIsAdminFromToken();
        this.userIsAdmin = val || userIsAdminFromToken;
      }
    )



    
    this.utilityService.changeCart.subscribe((res:any)=>{

      this.cartItems += parseInt(res);
  
    })

  }

  gotoComponent(item:any)
  {
    this.SearchTerm=item.category;
    this.prodService.search.next(this.SearchTerm);
  }

 
  islogged(): boolean {
    return localStorage.getItem("access_token") ? true : false;
  }

  logout() {
    localStorage.removeItem("access_token");
    this.router.navigate(['dashboard']).then(()=>{
      window.location.reload();
    });
  }
  





}
