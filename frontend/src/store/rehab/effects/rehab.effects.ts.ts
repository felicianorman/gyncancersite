import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Apollo, gql } from 'apollo-angular';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { Post } from 'src/interfaces/Post';
import * as rehabActions from '../actions/rehab.actions';

@Injectable()
export class RehabEffects {
  constructor(
    private actions$: Actions,
    private apollo: Apollo,
  ) {}

  loadRehab$ = createEffect(() =>
    this.actions$.pipe(
      ofType(rehabActions.LOAD_REHAB),
      switchMap(() =>
        this.apollo
          .query({
            query: gql`
              query getRehab {
                rehabs {
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
                  rehabs: any;
                  data: { rehabs: { data: { attributes: Post } } };
                }>({
                  query: gql`
                    query getRehab {
                      rehabs {
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
                      new rehabActions.LoadRehabSuccess(
                        result.data.rehabs.data.attributes,
                      ),
                  ),
                  catchError(() => EMPTY),
                ),
            ),
          ),
      ),
    ),
  );
}
