import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    });
  }

  public navigateToCart() {
    this.router.navigate(['/checkout']);
  }

  public addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  public removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  calculateTotalAmount(): number {
    return this.cartItems.reduce(
      (reduce, item) => reduce + item.price * item.quantity,
      0,
    );
  }
}
