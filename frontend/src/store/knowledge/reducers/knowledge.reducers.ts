import { Page } from 'src/interfaces/Page';
import * as fromKnowledge from '../actions/knowledge.actions';

export interface KnowledgeState {
  data: Page[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: KnowledgeState = {
  data: [
    {
      title: '',
      content: '',
      img: '',
    },
  ],
  loaded: false,
  loading: false,
};

export function reducer(
  state: KnowledgeState = initialState,
  action: fromKnowledge.Actions,
): KnowledgeState {
  switch (action.type) {
    case fromKnowledge.LOAD_KNOWLEDGE: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromKnowledge.LOAD_KNOWLEDGE_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
      };
    }
    case fromKnowledge.LOAD_KNOWLEDGE_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
    default:
      return state;
  }
}

export const getKnowledgeLoading = (state: KnowledgeState) => state.loading;

export const getKnowledgeLoaded = (state: KnowledgeState) => state.loaded;

export const getKnowledge = (state: KnowledgeState) => state.data;
