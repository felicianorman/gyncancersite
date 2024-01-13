import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromCloseRelative from './close-relative.reducers';

export interface CloseRelativeState {
  closeRelative: fromCloseRelative.CloseRelativeState;
}

export const reducersCloseRelative: ActionReducerMap<CloseRelativeState, any> =
  {
    closeRelative: fromCloseRelative.reducer,
  };

export const getCloseRelativeState =
  createFeatureSelector<CloseRelativeState>('closeRelative');

export const getCloseRelativeEntitiesState = createSelector(
  getCloseRelativeState,
  (state) => state.closeRelative,
);

export const getCloseRelative = createSelector(
  getCloseRelativeEntitiesState,
  fromCloseRelative.getCloseRelative,
);

export const getCloseRelativeLoaded = createSelector(
  getCloseRelativeEntitiesState,
  fromCloseRelative.getCloseRelativeLoaded,
);

export const getCloseRelativeLoading = createSelector(
  getCloseRelativeEntitiesState,
  fromCloseRelative.getCloseRelativeLoading,
);
