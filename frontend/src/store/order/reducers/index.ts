import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromOrder from './order.reducers';

export interface OrderState {
  order: fromOrder.OrderState;
}

export const reducersOrder: ActionReducerMap<OrderState, any> = {
  order: fromOrder.reducer,
};

export const getOrderState = createFeatureSelector<OrderState>('order');

export const getOrderEntitiesState = createSelector(
  getOrderState,
  (state) => state.order,
);

export const getOrder = createSelector(
  getOrderEntitiesState,
  fromOrder.getOrder,
);

export const getOrderLoaded = createSelector(
  getOrderEntitiesState,
  fromOrder.getOrderLoaded,
);

export const getLoadingOrder = createSelector(
  getOrderEntitiesState,
  fromOrder.getOrderLoading,
);
