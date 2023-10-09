import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../models/models';
import { BehaviorSubject ,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public search=new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }

  url = 'https://localhost:7044';

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + '/api/Products');
  }



  addProduct(addProductRequest: any): Observable<any> {
    addProductRequest.productId = "00000000-0000-0000-0000-000000000000"
    return this.http.post<any>(this.url + '/api/Products', addProductRequest);
  }

  getProduct(productId: string): Observable<Product> {
    return this.http.get<Product>(this.url + '/api/Products/' + productId)
  }

  updateProduct(productId: string, updateProductRequest: Product): Observable<Product> {
    return this.http.put<Product>(this.url + '/api/Products/' + productId, updateProductRequest);
  }

  deleteProduct(productId: string) : Observable<Product> {
    return this.http.delete<Product>(this.url + '/api/Products/' + productId)
  }

  AddToCart(body:any)
  {
    return this.http.post('https://localhost:7044/api/Products/AddToCart',body);
  }
  GetCartProduct(username:string)
  {
    return this.http.get('https://localhost:7044/api/Products/GetProductCart/'+username);
  }
  removeFromCart(username: any, productID: string): Observable<any> {
     // console.log(username)
     // console.log(productID)
   return this.http.delete<any>(this.url + '/api/Products/DeleteFromCart/' + username + "/" + productID)

  }
  getProductByCategory(category:string)
  {
    return this.http.get('https://localhost:7044/api/Products/ProductByCategory/'+category);
  }
}
