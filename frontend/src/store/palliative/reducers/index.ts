import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromPalliative from './palliative.reducers';

export interface PalliativeState {
  palliative: fromPalliative.PalliativeState;
}

export const reducersPalliative: ActionReducerMap<PalliativeState, any> = {
  palliative: fromPalliative.reducer,
};

export const getPalliativeState =
  createFeatureSelector<PalliativeState>('palliative');

export const getPalliativeEntitiesState = createSelector(
  getPalliativeState,
  (state) => state.palliative,
);

export const getPalliative = createSelector(
  getPalliativeEntitiesState,
  fromPalliative.getPalliativeData,
);

export const getPalliativeLoaded = createSelector(
  getPalliativeEntitiesState,
  fromPalliative.getPalliativeLoaded,
);

export const getPalliativeLoading = createSelector(
  getPalliativeEntitiesState,
  fromPalliative.getPalliativeLoading,
);
