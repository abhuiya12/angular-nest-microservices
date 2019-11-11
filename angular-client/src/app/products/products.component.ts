import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  allProducts: Array<Product> = [];
  title: string;
  description: string;
  price: number;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  private getAllProducts() {
    this.productService.getAllProducts().subscribe(allProducts => {
      this.allProducts = allProducts;
    });
  }

  addProduct() {
    // alert(this.userName);
    this.productService.addProduct(this.title, this.description, this.price).subscribe(response => {
    console.log(response);
    this.getAllProducts();
    });
  }
}
