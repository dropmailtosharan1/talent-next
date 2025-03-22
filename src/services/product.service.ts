import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  brand: string;
  category: string;
}

export interface ProductResponse {
  products: Product[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<ProductResponse>(this.apiUrl)
      .pipe(map(response => response.products));
  }

  getFilteredProducts(): Observable<Product[]> {
    return this.getAllProducts().pipe(
      map(products => products.filter(product => 
        product.discountPercentage > 10 || product.price > 1000
      ))
    );
  }

  getAppleProducts(): Observable<Product[]> {
    return this.getAllProducts().pipe(
      map(products => products.filter(product => 
        product.brand.toLowerCase() === 'apple'
      ))
    );
  }
}