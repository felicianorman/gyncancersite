import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromRehab from './rehab.reducers';

export interface RehabState {
  rehab: fromRehab.RehabState;
}

export const reducersRehab: ActionReducerMap<RehabState, any> = {
  rehab: fromRehab.reducer,
};

export const getRehabState = createFeatureSelector<RehabState>('rehab');

export const getRehabEntitiesState = createSelector(
  getRehabState,
  (state) => state.rehab,
);

export const getRehab = createSelector(
  getRehabEntitiesState,
  fromRehab.getRehab,
);

export const getRehabLoaded = createSelector(
  getRehabEntitiesState,
  fromRehab.getRehabLoaded,
);

export const getRehabLoading = createSelector(
  getRehabEntitiesState,
  fromRehab.getRehabLoading,
);
