import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  public isDropdownOpen = false;
  cartItems: any[] = [];
  totalAmount: number = 0;

  constructor(
    private cartService: CartService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;

      // this.totalAmount = items.reduce((acc, item) => acc + item.price, 0);
    });
  }

  public navigateToCart() {
    this.router.navigate(['/checkout']);
  }

  public removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  calculateTotalAmount(): number {
    return this.cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
  }
}
