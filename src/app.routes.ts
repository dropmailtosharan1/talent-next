import { Routes } from '@angular/router';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { FilteredProductsComponent } from './components/filtered-products/filtered-products.component';
import { AppleProductsComponent } from './components/apple-products/apple-products.component';

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductTableComponent },
  { path: 'filtered', component: FilteredProductsComponent },
  { path: 'apple', component: AppleProductsComponent }
];