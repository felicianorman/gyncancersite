import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CartService } from 'src/services/cart.service';
import { OrderActions } from '../../../store/order/actions';
import * as fromStore from '../../../store/order/index';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent implements OnInit {
  cartItems: any[] = [];
  totalAmount: number = 0;
  form: FormGroup;
  public orderSuccess: boolean = false;

  constructor(
    private cartService: CartService,
    private store: Store<fromStore.OrderState>,
  ) {
    this.store.select((state) => state.order);
  }

  ngOnInit(): void {
    localStorage.getItem('cartItems');
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
    });

    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      products: new FormControl(this.cartItems),
    });
  }

  public registerOrder() {
    this.store.dispatch(new OrderActions.CreateOrder(this.form.value));
    localStorage.clear();
    this.orderSuccess = true;
  }

  calculateTotalAmount(): number {
    return this.cartItems.reduce(
      (reduce, item) => reduce + item.price * item.quantity,
      0,
    );
  }
}
