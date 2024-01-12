import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromWhatWeDo from './what-we-do-reducers';

export interface WhatWeDoState {
  whatWeDo: fromWhatWeDo.WhatWeDoState;
}

export const reducersWhatWeDo: ActionReducerMap<WhatWeDoState, any> = {
  whatWeDo: fromWhatWeDo.reducer,
};

export const getWhatWeDoState =
  createFeatureSelector<WhatWeDoState>('whatWeDo');

export const getWhatWeDoEntitiesState = createSelector(
  getWhatWeDoState,
  (state) => state.whatWeDo,
);

export const getWhatWeDo = createSelector(
  getWhatWeDoEntitiesState,
  fromWhatWeDo.getWhatWeDo,
);

export const getWhatWeDoLoaded = createSelector(
  getWhatWeDoEntitiesState,
  fromWhatWeDo.getWhatWeDoLoaded,
);

export const getLoadingWhatWeDo = createSelector(
  getWhatWeDoEntitiesState,
  fromWhatWeDo.getWhatWeDoLoading,
);
