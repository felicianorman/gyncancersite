import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromLifeWithCancer from './life-with-cancer.reducers';

export interface LifeWithCancerState {
  lifeWithCancer: fromLifeWithCancer.LifeWithCancerState;
}

export const reducersLifeWithCancer: ActionReducerMap<
  LifeWithCancerState,
  any
> = {
  lifeWithCancer: fromLifeWithCancer.reducer,
};

export const getLifeWithCancerState =
  createFeatureSelector<LifeWithCancerState>('lifeWithCancer');

export const getLifeWithCancerEntitiesState = createSelector(
  getLifeWithCancerState,
  (state) => state.lifeWithCancer,
);

export const getLifeWithCancer = createSelector(
  getLifeWithCancerEntitiesState,
  fromLifeWithCancer.getLifeWithCancer,
);

export const getLifeWithCancerLoaded = createSelector(
  getLifeWithCancerEntitiesState,
  fromLifeWithCancer.getLifeWithCancerLoaded,
);

export const getLifeWithCancerLoading = createSelector(
  getLifeWithCancerEntitiesState,
  fromLifeWithCancer.getLifeWithCancerLoading,
);
