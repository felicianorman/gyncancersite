import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Apollo, gql } from 'apollo-angular';
import { EMPTY, Observable } from 'rxjs';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { Post } from 'src/interfaces/Post';
import * as closeRelativeActions from '../actions/close-relative.actions';

@Injectable()
export class closeRelativeEffects {
  constructor(
    private actions$: Actions,
    private apollo: Apollo,
  ) {}

  loadCloseRelative$ = createEffect(() =>
    this.actions$.pipe(
      ofType(closeRelativeActions.LOAD_CLOSE_RELATIVE),
      switchMap(() =>
        this.apollo
          .query({
            query: gql`
              query getCloseRelative {
                foerNaerstaendes {
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
                  foerNaerstaendes: any;
                  data: { foerNaerstaendes: { data: { attributes: Post } } };
                }>({
                  query: gql`
                    query getCloseRelative {
                      foerNaerstaendes {
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
                      new closeRelativeActions.LoadCloseRelativeSuccess(
                        result.data.foerNaerstaendes.data.attributes,
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
