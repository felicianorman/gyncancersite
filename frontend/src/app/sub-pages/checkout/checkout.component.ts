import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CartService } from 'src/services/cart.service';
import { OrderService } from 'src/services/order.service';
import { Actions } from 'src/store/order/actions/order.actions';
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
  public images: string[] = []; // Use an array to store image URLs
  public orderSuccess: boolean = false;

  constructor(
    private cartService: CartService,
    private store: Store<fromStore.OrderState>,
  ) {
    this.store.select((state) => state.order);
  }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
      // this.images = items.map(
      //   (item) => 'http://localhost:3000/' + item.img.url,
      // );
      // console.log(this.images);
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

    console.log('order registered, local storage cleared');
  }

  calculateTotalAmount(): number {
    return this.cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
  }
}
