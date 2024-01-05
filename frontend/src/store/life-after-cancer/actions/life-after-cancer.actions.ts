import { Action } from '@ngrx/store';
import { Page } from 'src/interfaces/Page';

export const LOAD_LIFE_AFTER_CANCER = '[LifeAfterCancer] Get LifeAfterCancer';
export const LOAD_LIFE_AFTER_CANCER_SUCCESS =
  '[LifeAfterCancer] Get LifeAfterCancer Success';
export const LOAD_LIFE_AFTER_CANCER_FAIL =
  '[LifeAfterCancer] Get LifeAfterCancer Failure';

export class LoadLifeAfterCancer implements Action {
  readonly type = LOAD_LIFE_AFTER_CANCER;

  constructor(public payload: any) {}
}

export class LoadLifeAfterCancerSuccess implements Action {
  readonly type = LOAD_LIFE_AFTER_CANCER_SUCCESS;

  constructor(public payload: Page[]) {}
}

export class LoadLifeAfterCancerFail implements Action {
  readonly type = LOAD_LIFE_AFTER_CANCER_FAIL;

  constructor(public payload: any) {}
}

export type Actions =
  | LoadLifeAfterCancer
  | LoadLifeAfterCancerSuccess
  | LoadLifeAfterCancerFail;
