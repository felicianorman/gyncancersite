import { Component } from '@angular/core';
import { Product } from 'src/interfaces/Product';

import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  public selectedProduct: Product;

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
