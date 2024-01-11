import { Order } from 'src/interfaces/Order';
import * as fromOrder from '../actions/order.actions';

export interface OrderState {
  data: Order;
  loaded: boolean;
  loading: boolean;
}

export const initialState: OrderState = {
  data: {
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    products: [],
  },
  loaded: false,
  loading: false,
};

export function reducer(
  state: OrderState = initialState,
  action: fromOrder.Actions,
): OrderState {
  switch (action.type) {
    case fromOrder.CREATE_ORDER: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromOrder.CREATE_ORDER_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
      };
    }

    case fromOrder.CREATE_ORDER_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

    default:
      return state;
  }
}

export const getOrderLoading = (state: OrderState) => state.loading;

export const getOrderLoaded = (state: OrderState) => state.loaded;

export const getOrder = (state: OrderState) => state.data;
