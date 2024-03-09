import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/interfaces/Product';
import { ProductService } from 'src/services/products.service';
import * as fromStore from '../../../store/products/index';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  @Input() productDetails: any[] = [];
  @Output() public productClick: EventEmitter<any> = new EventEmitter<any>();

  public products$: Observable<Product[]>;
  public products: Product[] = [];

  public title: string = '';
  public description: string = '';
  public price: number = 0;
  public img: string = '';
  public id: number = 0;

  constructor(
    private store: Store<fromStore.ProductState>,
    private productService: ProductService,
    private router: Router,
  ) {
    this.store.select((state) => state.products);
  }

  ngOnInit(): void {
    this.products$ = this.store.select(fromStore.getProducts);
    this.store.dispatch({ type: '[Product] Get Products' });

    this.productService.getProducts().valueChanges.subscribe((result) => {
      this.products = (result.data as any)['products'].data;
      console.log(result.data, 'data')

      this.productDetails = this.products.map((product: any) => {
        return {
          title: product.attributes.title,
          id: product.attributes.productId,
          description: product.attributes.description,
          price: product.attributes.price,
          img: 'https://gyncancersite.vercel.app' + product.attributes.img.data.attributes.url || '',
        };

        
      });

      console.log(this.productDetails);
    });

   
  }

  public onProductClick(product: any) {
    this.productClick.emit(product);
    this.router.navigate(['/webshop', product.id]);
  }
}
