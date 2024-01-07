import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromActions from './knowledge.reducers';

export interface KnowledgeState {
  knowledge: fromActions.KnowledgeState;
}

export const reducersKnowledge: ActionReducerMap<KnowledgeState, any> = {
  knowledge: fromActions.reducer,
};

export const getKnowledgeState =
  createFeatureSelector<KnowledgeState>('knowledge');

export const getKnowledgeEntitiesState = createSelector(
  getKnowledgeState,
  (state) => state.knowledge,
);

export const getKnowledge = createSelector(
  getKnowledgeEntitiesState,
  fromActions.getKnowledge,
);

export const getKnowledgeLoaded = createSelector(
  getKnowledgeEntitiesState,
  fromActions.getKnowledgeLoaded,
);

export const getKnowledgeLoading = createSelector(
  getKnowledgeEntitiesState,
  fromActions.getKnowledgeLoading,
);
