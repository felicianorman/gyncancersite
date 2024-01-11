import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CartService {
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  private localStorageKey = 'cartItems';

  constructor() {
    const storedCartItems = localStorage.getItem(this.localStorageKey);
    if (storedCartItems) {
      this.cartItemsSubject.next(JSON.parse(storedCartItems));
    }
  }

  addToCart(product: any) {
    const currentCartItems = this.cartItemsSubject.value;
    const existingProductIndex = currentCartItems.findIndex(
      (item) => item.productId === product.productId,
    );

    if (existingProductIndex !== -1) {
      const updatedCartItems = [...currentCartItems];
      updatedCartItems[existingProductIndex].quantity += 1;
      this.updateCartItems(updatedCartItems);
    } else {
      const updatedCartItems = [
        ...currentCartItems,
        { ...product, quantity: 1 },
      ];
      this.updateCartItems(updatedCartItems);
    }
  }

  removeFromCart(productId: number) {
    const currentCartItems = this.cartItemsSubject.value;
    const existingProductIndex = currentCartItems.findIndex(
      (item) => item.productId === productId,
    );

    if (existingProductIndex !== -1) {
      const updatedCartItems = [...currentCartItems];

      if (updatedCartItems[existingProductIndex].quantity > 1) {
        updatedCartItems[existingProductIndex].quantity -= 1;
      } else {
        updatedCartItems.splice(existingProductIndex, 1);
      }

      this.updateCartItems(updatedCartItems);
    }
  }

  private updateCartItems(updatedCartItems: any[]) {
    this.cartItemsSubject.next(updatedCartItems);
    localStorage.setItem(
      this.localStorageKey,
      JSON.stringify(updatedCartItems),
    );
  }
}
