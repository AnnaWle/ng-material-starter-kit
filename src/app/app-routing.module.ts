import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './ui/product-list/product-list.component';
import { CategoryListComponent } from './ui/category-list/category-list.component';
import { CryptoChipsListComponent } from './ui/crypto-chips-list/crypto-chips-list.component';
import { PublicHolidaysComponent } from './ui/public-holidays/public-holidays.component';
import { CategoryCheckboxListComponent } from './ui/category-checkbox-list/category-checkbox-list.component';
import { CategoryMenuComponent } from './ui/category-menu/category-menu.component';
import { ProductTableComponent } from './ui/product-table/product-table.component';
import { ProductFormComponent } from './ui/product-form/product-form.component';
import { ProductListComponentModule } from './ui/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoryListComponentModule } from './ui/category-list/category-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CryptoChipsListComponentModule } from './ui/crypto-chips-list/crypto-chips-list.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { PublicHolidaysComponentModule } from './ui/public-holidays/public-holidays.component-module';
import { PublicHolidaysServiceModule } from './services/public-holidays.service-module';
import { CategoryCheckboxListComponentModule } from './ui/category-checkbox-list/category-checkbox-list.component-module';
import { CategoryMenuComponentModule } from './ui/category-menu/category-menu.component-module';
import { ProductTableComponentModule } from './ui/product-table/product-table.component-module';
import { ProductFormComponentModule } from './ui/product-form/product-form.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductListComponent }, { path: 'categories', component: CategoryListComponent }, { path: 'crypto', component: CryptoChipsListComponent }, { path: 'public-holidays', component: PublicHolidaysComponent }, { path: 'checkbox-categories', component: CategoryCheckboxListComponent }, { path: 'categories-menu', component: CategoryMenuComponent }, { path: 'product-search', component: ProductTableComponent }, { path: 'create-product', component: ProductFormComponent }]), ProductListComponentModule, ProductsServiceModule, CategoryListComponentModule, CategoriesServiceModule, CryptoChipsListComponentModule, CryptoServiceModule, PublicHolidaysComponentModule, PublicHolidaysServiceModule, CategoryCheckboxListComponentModule, CategoryMenuComponentModule, ProductTableComponentModule, ProductFormComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
