import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Apollo, gql } from 'apollo-angular';
import { EMPTY, Observable } from 'rxjs';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { Post } from 'src/interfaces/Post';
import * as PalliativeActions from '../actions/palliative.actions';

@Injectable()
export class PalliativeEffects {
  constructor(
    private actions$: Actions,
    private apollo: Apollo,
  ) {}

  loadVaccine$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PalliativeActions.LOAD_PALLIATIVE),
      switchMap(() =>
        this.apollo
          .query({
            query: gql`
              query getPalliative {
                palliativVards {
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
                  palliativVards: any;
                  data: { palliativVards: { data: { attributes: Post } } };
                }>({
                  query: gql`
                    query getPalliative {
                      palliativVards {
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
                      new PalliativeActions.LoadPalliativeSuccess(
                        result.data.palliativVards.data.attributes,
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
