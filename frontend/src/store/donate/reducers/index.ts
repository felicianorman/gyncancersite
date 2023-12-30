import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromDonate from './donate.reducers';

export interface DonateState {
  donate: fromDonate.DonateState;
}

export const reducersDonate: ActionReducerMap<DonateState, any> = {
  donate: fromDonate.reducer,
};

export const getDonateState = createFeatureSelector<DonateState>('donate');

export const getDonateEntitiesState = createSelector(
  getDonateState,
  (state) => state.donate,
);

export const getDonate = createSelector(
  getDonateEntitiesState,
  fromDonate.getDonate,
);

export const getDonateLoaded = createSelector(
  getDonateEntitiesState,
  fromDonate.getDonateLoaded,
);

export const getDonateLoading = createSelector(
  getDonateEntitiesState,
  fromDonate.getDonateLoading,
);
