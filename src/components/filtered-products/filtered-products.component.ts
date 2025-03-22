import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../../services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-filtered-products',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Filtered Products (Discount > 10% or Price > $1000)</h2>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Discount %</th>
        </tr>
      </thead>
      <tbody>
        @for (product of filteredProducts$ | async; track product.id) {
          <tr>
            <td>{{ product.title }}</td>
            <td>{{ product.brand }}</td>
            <td>{{ product.price | currency }}</td>
            <td>{{ product.discountPercentage }}%</td>
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
export class FilteredProductsComponent {
  filteredProducts$: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.filteredProducts$ = this.productService.getFilteredProducts();
  }
}