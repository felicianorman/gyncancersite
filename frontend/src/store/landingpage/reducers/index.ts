import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromLandingPage from './landingpage.reducer';

export interface LandingPageState {
  landingPage: fromLandingPage.LandingPageState;
}

export const reducers: ActionReducerMap<LandingPageState, any> = {
  landingPage: fromLandingPage.reducer,
};

export const getLandingPageState =
  createFeatureSelector<LandingPageState>('landingPage');

export const getLandingPageEntitiesState = createSelector(
  getLandingPageState,
  (state) => state.landingPage,
);

export const getLandingPage = createSelector(
  getLandingPageEntitiesState,
  fromLandingPage.getLandingPageData,
);

export const getLoading = createSelector(
  getLandingPageEntitiesState,
  fromLandingPage.getLandingPageLoaded,
);

export const getLoaded = createSelector(
  getLandingPageEntitiesState,
  fromLandingPage.getLandingPageLoading,
);
