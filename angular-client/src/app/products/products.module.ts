import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [ProductsComponent],
  exports: [ProductsComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ProductListModule { }
