import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  allEmployees: Array<Product> = [];
  url = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(this.url + 'products/getallproducts');
  }

  addProduct(title: string, description: string, price: number): any {
    const newProduct = new Product();
    newProduct.title = title;
    newProduct.description = description;
    newProduct.price = price;
    return this.httpClient.post(this.url + 'products/addproduct', newProduct);
  }
}
