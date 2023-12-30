import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromSupportUs from './support-us.reducer';

export interface SupportUsState {
  supportUs: fromSupportUs.SupportUsState;
}

export const reducersSupportUs: ActionReducerMap<SupportUsState, any> = {
  supportUs: fromSupportUs.reducer,
};

export const getSupportUsState =
  createFeatureSelector<SupportUsState>('supportUs');

export const getSupportUsEntitiesState = createSelector(
  getSupportUsState,
  (state) => state.supportUs,
);

export const getSupportUs = createSelector(
  getSupportUsEntitiesState,
  fromSupportUs.getSupportUs,
);

export const getSupportUsLoaded = createSelector(
  getSupportUsEntitiesState,
  fromSupportUs.getSupportUsLoaded,
);

export const getLoadingSupportUs = createSelector(
  getSupportUsEntitiesState,
  fromSupportUs.getSupportUsLoading,
);
