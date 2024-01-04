import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/interfaces/Product';
import { ProductService } from 'src/services/products.service';
import * as fromStore from '../../../store/products/index';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  public products$: Observable<Product[]>;
  public products: Product[] = [];
  public productDetails: any[] = [];

  public title: string = '';
  public description: string = '';
  public price: number = 0;
  public img: string = '';

  constructor(
    private store: Store<fromStore.ProductState>,
    private productService: ProductService,
  ) {
    this.store.select((state) => state.products);
  }

  ngOnInit(): void {
    this.products$ = this.store.select(fromStore.getProducts);
    this.store.dispatch({ type: '[Product] Get Products' });

    this.productService.getProducts().valueChanges.subscribe((result) => {
      this.products = (result.data as any)['products'].data;
      console.log(this.products);

      this.productDetails = this.products.map((product: any) => {
        return {
          title: product.attributes.title,
          description: product.attributes.description,
          price: product.attributes.price,
          img:
            'http://localhost:1337' +
              product.attributes.img?.data?.attributes?.url || '',
        };
      });

      console.log('Processed productDetails:', this.productDetails);
    });
  }

  public onProductClick(product: any) {
    this.title = product.title;
    this.description = product.description;
    this.price = product.price;
    this.img = product.img;

    console.log('Product clicked:', product);
  }
}
