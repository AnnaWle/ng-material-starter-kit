import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../model/product.model';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryMenuComponent {
  readonly menu$: Observable<ProductModel[]> = this._categoriesService.getAll();

  constructor(private _categoriesService: CategoriesService) {
  }
}
