import { Product } from 'src/interfaces/Product';
import * as fromProducts from '../actions/products.actions';

export interface ProductState {
  data: Product[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: ProductState = {
  data: [
    {
      title: '',
      description: '',
      price: 0,
      img: '',
      productId: 0,
    },
  ],
  loaded: false,
  loading: false,
};

export function reducer(
  state: ProductState = initialState,
  action: fromProducts.Actions,
): ProductState {
  switch (action.type) {
    case fromProducts.LOAD_PRODUCTS: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromProducts.LOAD_PRODUCTS_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
      };
    }

    case fromProducts.LOAD_PRODUCTS_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
  }
}

export const getProductLoading = (state: ProductState) => state.loading;

export const getProductLoaded = (state: ProductState) => state.loaded;

export const getProductData = (state: ProductState) => state.data;
