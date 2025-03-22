import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../../services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>All Products</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Discount %</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        @for (product of products$ | async; track product.id) {
          <tr>
            <td>{{ product.id }}</td>
            <td>{{ product.title }}</td>
            <td>{{ product.brand }}</td>
            <td>{{ product.price | currency }}</td>
            <td>{{ product.discountPercentage }}%</td>
            <td>{{ product.category }}</td>
          </tr>
        }
      </tbody>
    </table>
  `,
  styles: [`
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }
    th {
      background-color: #f4f4f4;
    }
  `]
})
export class ProductTableComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.getAllProducts();
  }

  ngOnInit(): void {}
}