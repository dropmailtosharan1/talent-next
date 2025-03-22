import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService, Product } from '../../services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-apple-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Apple Products</h2>
    <select [(ngModel)]="selectedProduct">
      <option value="">Select an Apple product</option>
      @for (product of appleProducts$ | async; track product.id) {
        <option [value]="product.id">{{ product.title }} - {{ product.price | currency }}</option>
      }
    </select>

    <h2>Apple Products</h2>
<select>
  <option *ngFor="let product of appleProducts$ | async" [value]="product.id">
    {{ product.title }}
  </option>
</select>
  `
})
export class AppleProductsComponent {
  // appleProducts$: Observable<Product[]>;
  selectedProduct: string = '';

  constructor(private productService: ProductService) {
    this.appleProducts$ = this.productService.getAppleProducts();
  }

  appleProducts$ = this.productService.getAppleProducts();
  // constructor(private productService: ProductService) {}

}