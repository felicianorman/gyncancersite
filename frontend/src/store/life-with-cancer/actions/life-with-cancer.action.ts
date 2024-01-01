import { Action } from '@ngrx/store';
import { Post } from 'src/interfaces/Post';

export const LOAD_LIFE_WITH_CANCER = '[LifeWithCancer] Get LifeWithCancer';

export const LOAD_LIFE_WITH_CANCER_SUCCESS =
  '[LifeWithCancer] Get LifeWithCancer Success';
export const LOAD_LIFE_WITH_CANCER_FAIL =
  '[LifeWithCancer] Get LifeWithCancer Failure';

export class LoadLifeWithCancer implements Action {
  readonly type = LOAD_LIFE_WITH_CANCER;

  constructor(public payload: any) {}
}

export class LoadLifeWithCancerSuccess implements Action {
  readonly type = LOAD_LIFE_WITH_CANCER_SUCCESS;

  constructor(public payload: Post) {}
}

export class LoadLifeWithCancerFail implements Action {
  readonly type = LOAD_LIFE_WITH_CANCER_FAIL;

  constructor(public payload: any) {}
}

export type Actions =
  | LoadLifeWithCancer
  | LoadLifeWithCancerSuccess
  | LoadLifeWithCancerFail;
