import { Action } from '@ngrx/store';
import { Post } from 'src/interfaces/Post';

export const LOAD_SHARE_SITE = '[LandingPage] Get Share Site';
export const LOAD_SHARE_SITE_SUCCESS = '[LandingPage] Get Share Site Success';
export const LOAD_SHARE_SITE_FAIL = '[LandingPage] Get Share Site Failure';
export const LOAD_OUR_VISION = '[LandingPage] Get Our Vision';
export const LOAD_OUR_VISION_SUCCESS = '[LandingPage] Get Our Vision Success';
export const LOAD_OUR_VISION_FAIL = '[LandingPage] Get Our Vision Failure';

export class LoadShareSite implements Action {
  readonly type = LOAD_SHARE_SITE;

  constructor(public payload: any) {}
}

export class LoadShareSiteSuccess implements Action {
  readonly type = LOAD_SHARE_SITE_SUCCESS;

  constructor(public payload: Post) {}
}

export class LoadShareSiteFail implements Action {
  readonly type = LOAD_SHARE_SITE_FAIL;

  constructor(public payload: any) {}
}

export class LoadOurVision implements Action {
  readonly type = LOAD_OUR_VISION;

  constructor(public payload: any) {}
}

export class LoadOurVisionSuccess implements Action {
  readonly type = LOAD_OUR_VISION_SUCCESS;

  constructor(public payload: Post) {}
}

export class LoadOurVisionFail implements Action {
  readonly type = LOAD_OUR_VISION_FAIL;

  constructor(public payload: any) {}
}

export type Actions =
  | LoadShareSite
  | LoadShareSiteSuccess
  | LoadShareSiteFail
  | LoadOurVision
  | LoadOurVisionSuccess
  | LoadOurVisionFail;
