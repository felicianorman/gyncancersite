import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartComponent } from 'src/app/components/cart/cart.component';
import { Product } from 'src/interfaces/Product';
import { CartService } from 'src/services/cart.service';
import { ProductService } from 'src/services/products.service';
import * as fromStore from '../../../store/products/index';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  public selectedProduct: any;

  constructor(private cartService: CartService) {}

  public onProductSelected(product: any) {
    this.selectedProduct = product;
  }

  addToCart() {
    if (this.selectedProduct) {
      this.cartService.addToCart(this.selectedProduct);
    }
  }
}
