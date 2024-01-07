import { Action } from '@ngrx/store';
import { Page } from 'src/interfaces/Page';

export const LOAD_KNOWLEDGE = '[Knowledge] Get Knowledge';
export const LOAD_KNOWLEDGE_SUCCESS = '[Knowledge] Get Knowledge Success';
export const LOAD_KNOWLEDGE_FAIL = '[Knowledge] Get Knowledge Failure';

export class LoadKnowledge implements Action {
  readonly type = LOAD_KNOWLEDGE;

  constructor(public payload: any) {}
}

export class LoadKnowledgeSuccess implements Action {
  readonly type = LOAD_KNOWLEDGE_SUCCESS;

  constructor(public payload: Page[]) {}
}

export class LoadKnowledgeFail implements Action {
  readonly type = LOAD_KNOWLEDGE_FAIL;

  constructor(public payload: any) {}
}

export type Actions = LoadKnowledge | LoadKnowledgeSuccess | LoadKnowledgeFail;
