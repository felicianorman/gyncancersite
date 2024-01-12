import { Action } from '@ngrx/store';
import { Order } from 'src/interfaces/Order';

export const CREATE_ORDER = '[Order] Create Order';
export const CREATE_ORDER_SUCCESS = '[Order] Create Order Success';
export const CREATE_ORDER_FAIL = '[Order] Create Order Failure';

export class CreateOrder implements Action {
  readonly type = CREATE_ORDER;

  constructor(public payload: Order) {}
}

export class CreateOrderSuccess implements Action {
  readonly type = CREATE_ORDER_SUCCESS;

  constructor(public payload: Order) {}
}

export class CreateOrderFail implements Action {
  readonly type = CREATE_ORDER_FAIL;

  constructor(public payload: any) {}
}

export type Actions = CreateOrder | CreateOrderSuccess | CreateOrderFail;
