import { Action } from '@ngrx/store';
import { Product } from 'src/interfaces/Product';

export const LOAD_PRODUCTS = '[Products] Get Products';
export const LOAD_PRODUCTS_SUCCESS = '[Products] Get Products Success';
export const LOAD_PRODUCTS_FAIL = '[Products] Get Products Failure';

export class LoadProducts implements Action {
  readonly type = LOAD_PRODUCTS;

  constructor(public payload: any) {}
}

export class LoadProductsSuccess implements Action {
  readonly type = LOAD_PRODUCTS_SUCCESS;

  constructor(public payload: Product[]) {}
}

export class LoadProductsFail implements Action {
  readonly type = LOAD_PRODUCTS_FAIL;

  constructor(public payload: any) {}
}

export type Actions = LoadProducts | LoadProductsSuccess | LoadProductsFail;
