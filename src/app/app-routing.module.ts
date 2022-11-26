import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './ui/product-list/product-list.component';
import { CategoryListComponent } from './ui/category-list/category-list.component';
import { CryptoChipsListComponent } from './ui/crypto-chips-list/crypto-chips-list.component';
import { PublicHolidaysComponent } from './ui/public-holidays/public-holidays.component';
import { ProductListComponentModule } from './ui/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoryListComponentModule } from './ui/category-list/category-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CryptoChipsListComponentModule } from './ui/crypto-chips-list/crypto-chips-list.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { PublicHolidaysComponentModule } from './ui/public-holidays/public-holidays.component-module';
import { PublicHolidaysServiceModule } from './services/public-holidays.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductListComponent }, { path: 'categories', component: CategoryListComponent }, { path: 'crypto', component: CryptoChipsListComponent }, { path: 'public-holidays', component: PublicHolidaysComponent }]), ProductListComponentModule, ProductsServiceModule, CategoryListComponentModule, CategoriesServiceModule, CryptoChipsListComponentModule, CryptoServiceModule, PublicHolidaysComponentModule, PublicHolidaysServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
