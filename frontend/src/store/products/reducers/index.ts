import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromProducts from './products.reducers';

export interface ProductState {
  products: fromProducts.ProductState;
}

export const reducers: ActionReducerMap<ProductState, any> = {
  products: fromProducts.reducer,
};

export const getProductState = createFeatureSelector<ProductState>('products');

export const getProductEntitiesState = createSelector(
  getProductState,
  (state) => state.products,
);

export const getProducts = createSelector(
  getProductEntitiesState,
  fromProducts.getProductData,
);

export const getLoading = createSelector(
  getProductEntitiesState,
  fromProducts.getProductLoading,
);

export const getLoaded = createSelector(
  getProductEntitiesState,
  fromProducts.getProductLoaded,
);
