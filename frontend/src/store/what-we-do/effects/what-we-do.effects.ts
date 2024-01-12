import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Apollo, gql } from 'apollo-angular';
import { EMPTY } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Post } from 'src/interfaces/Post';
import * as WhatWeDoActions from '../actions/what-we-do.actions';

@Injectable()
export class WhatWeDoEffects {
  constructor(
    private actions$: Actions,
    private apollo: Apollo,
  ) {}

  loadWhatWeDo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WhatWeDoActions.LOAD_WHAT_WE_DO),
      switchMap(() =>
        this.apollo
          .query({
            query: gql`
              query getWhatWeDo {
                gynekologiskCancers {
                  data {
                    attributes {
                      title
                      content
                    }
                  }
                }
              }
            `,
          })
          .pipe(
            switchMap(() =>
              this.apollo
                .query<{
                  gynekologiskCancers: any;
                  data: { gynekologiskCancers: { data: { attributes: Post } } };
                }>({
                  query: gql`
                    query getWhatWeDo {
                      gynekologiskCancers {
                        data {
                          attributes {
                            title
                            content
                          }
                        }
                      }
                    }
                  `,
                })
                .pipe(
                  map(
                    (result) =>
                      new WhatWeDoActions.LoadWhatWeDoSuccess(
                        result.data.gynekologiskCancers.data.attributes,
                      ),
                  ),
                  catchError((error) => EMPTY),
                ),
            ),
          ),
      ),
    ),
  );
}
