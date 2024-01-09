import { Action } from '@ngrx/store';
import { Blog } from 'src/interfaces/Blog';

export const LOAD_BLOG = '[Blog] Get Blog';
export const LOAD_BLOG_SUCCESS = '[Blog] Get Blog Success';
export const LOAD_BLOG_FAIL = '[Blog] Get Blog Failure';

export class LoadBlog implements Action {
  readonly type = LOAD_BLOG;

  constructor(public payload: any) {}
}

export class LoadBlogSuccess implements Action {
  readonly type = LOAD_BLOG_SUCCESS;

  constructor(public payload: Blog[]) {}
}

export class LoadBlogFail implements Action {
  readonly type = LOAD_BLOG_FAIL;

  constructor(public payload: any) {}
}

export type Actions = LoadBlog | LoadBlogSuccess | LoadBlogFail;
