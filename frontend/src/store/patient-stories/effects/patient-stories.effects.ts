import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Apollo, gql } from 'apollo-angular';
import { EMPTY, Observable } from 'rxjs';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { Blog } from 'src/interfaces/Blog';
import * as PatientStoriesActions from '../actions/patient-stories.actions';

@Injectable()
export class PatientStoriesEffects {
  constructor(
    private actions$: Actions,
    private apollo: Apollo,
  ) {}

  loadPatientStories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PatientStoriesActions.LOAD_BLOG),
      switchMap(() =>
        this.apollo
          .query({
            query: gql`
              query getStories {
                stories {
                  data {
                    attributes {
                      title
                      preview
                      img {
                        data {
                          attributes {
                            url
                          }
                        }
                      }
                      body
                      author
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
                  patientStories: any;
                  data: { patientStories: { data: { attributes: Blog } } };
                }>({
                  query: gql`
                    query getStories {
                      stories {
                        data {
                          attributes {
                            title
                            preview
                            img {
                              data {
                                attributes {
                                  url
                                }
                              }
                            }
                            body
                            author
                          }
                        }
                      }
                    }
                  `,
                })
                .pipe(
                  map(
                    (result) =>
                      new PatientStoriesActions.LoadBlogSuccess(
                        result.data.patientStories.data.attributes,
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
