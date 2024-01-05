import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromLifeAfterCancer from './life-after-cancer.reducers';

export interface LifeAfterCancerState {
  lifeAfterCancer: fromLifeAfterCancer.LifeAfterCancerState;
}

export const reducersLifeAfterCancer: ActionReducerMap<
  LifeAfterCancerState,
  any
> = {
  lifeAfterCancer: fromLifeAfterCancer.reducer,
};

export const getLifeAfterCancerState =
  createFeatureSelector<LifeAfterCancerState>('lifeAfterCancer');

export const getLifeAfterCancerEntitiesState = createSelector(
  getLifeAfterCancerState,
  (state) => state.lifeAfterCancer,
);

export const getLifeAfterCancer = createSelector(
  getLifeAfterCancerEntitiesState,
  fromLifeAfterCancer.getLifeAfterCancer,
);

export const getLifeAfterCancerLoaded = createSelector(
  getLifeAfterCancerEntitiesState,
  fromLifeAfterCancer.getLifeAfterCancerLoaded,
);

export const getLifeAfterCancerLoading = createSelector(
  getLifeAfterCancerEntitiesState,
  fromLifeAfterCancer.getLifeAfterCancerLoading,
);
