import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromAboutUs from './about-us.reducers';

export interface AboutUsState {
  aboutUs: fromAboutUs.AboutUsState;
}

export const reducersAboutUs: ActionReducerMap<AboutUsState, any> = {
  aboutUs: fromAboutUs.reducer,
};

export const getAboutUsState = createFeatureSelector<AboutUsState>('aboutUs');

export const getAboutUsEntitiesState = createSelector(
  getAboutUsState,
  (state) => state.aboutUs,
);

export const getAboutUs = createSelector(
  getAboutUsEntitiesState,
  fromAboutUs.getAboutUs,
);

export const getAboutUsLoaded = createSelector(
  getAboutUsEntitiesState,
  fromAboutUs.getAboutUsLoaded,
);

export const getAboutUsLoading = createSelector(
  getAboutUsEntitiesState,
  fromAboutUs.getAboutUsLoading,
);
