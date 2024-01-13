import { Action } from '@ngrx/store';
import { Post } from 'src/interfaces/Post';

export const LOAD_REHAB = '[Rehab] Get Rehab';
export const LOAD_REHAB_SUCCESS = '[Rehab] Get Rehab Success';
export const LOAD_REHAB_FAIL = '[Rehab] Get Rehab Failure';

export class LoadRehab implements Action {
  readonly type = LOAD_REHAB;

  constructor(public payload: any) {}
}

export class LoadRehabSuccess implements Action {
  readonly type = LOAD_REHAB_SUCCESS;

  constructor(public payload: Post[]) {}
}

export class LoadRehabFail implements Action {
  readonly type = LOAD_REHAB_FAIL;

  constructor(public payload: any) {}
}

export type Actions = LoadRehab | LoadRehabSuccess | LoadRehabFail;
