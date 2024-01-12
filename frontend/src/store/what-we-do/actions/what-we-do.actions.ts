import { Action } from '@ngrx/store';
import { Post } from 'src/interfaces/Post';

export const LOAD_WHAT_WE_DO = '[What We Do] Get What We Do';
export const LOAD_WHAT_WE_DO_SUCCESS = '[What We Do] Get What We Do Success';
export const LOAD_WHAT_WE_DO_FAIL = '[What We Do] Get What We Do Failure';

export class LoadWhatWeDo implements Action {
  readonly type = LOAD_WHAT_WE_DO;

  constructor(public payload: any) {}
}

export class LoadWhatWeDoSuccess implements Action {
  readonly type = LOAD_WHAT_WE_DO_SUCCESS;

  constructor(public payload: Post[]) {}
}

export class LoadWhatWeDoFail implements Action {
  readonly type = LOAD_WHAT_WE_DO_FAIL;

  constructor(public payload: any) {}
}

export type Actions = LoadWhatWeDo | LoadWhatWeDoSuccess | LoadWhatWeDoFail;
