import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './ui/product-list/product-list.component';
import { ProductListComponentModule } from './ui/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'products',
    component: ProductListComponent
  }]), ProductListComponentModule, ProductsServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
