import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CartService {
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  public cartItems: any[] = [];

  private localStorageKey = 'cartItems';

  constructor() {
    // Retrieve cart items from local storage on service initialization
    const storedCartItems = localStorage.getItem(this.localStorageKey);
    if (storedCartItems) {
      this.cartItemsSubject.next(JSON.parse(storedCartItems));
    }
  }

  addToCart(product: any) {
    const currentCartItems = this.cartItemsSubject.value;
    const updatedCartItems = [...currentCartItems, product];
    this.cartItemsSubject.next(updatedCartItems);

    // Store updated cart items in local storage
    localStorage.setItem(
      this.localStorageKey,
      JSON.stringify(updatedCartItems),
    );
  }
}
