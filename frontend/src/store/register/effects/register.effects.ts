import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Apollo, gql } from 'apollo-angular';
import { EMPTY, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Register } from 'src/interfaces/Register';
import * as RegisterActions from '../actions/register.action';

@Injectable()
export class RegisterEffects {
  constructor(
    private actions$: Actions,
    private apollo: Apollo,
  ) {}

  private readonly NEW_USER = gql`
    mutation createRegister($data: RegisterInput!) {
      createRegister(data: $data) {
        data {
          attributes {
            firstName
            lastName
            age
            region
            role
            email
          }
        }
      }
    }
  `;

  createRegister$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegisterActions.CREATE_REGISTER),
      switchMap(({ payload }: { payload: Register }) =>
        this.apollo
          .mutate({
            mutation: this.NEW_USER,
            variables: {
              data: payload,
            },
          })
          .pipe(
            switchMap(() =>
              this.apollo
                .mutate<{
                  register: any;
                  data: { register: { data: { attributes: Register } } };
                }>({
                  mutation: gql`
                    mutation createRegister($data: RegisterInput!) {
                      createRegister(data: $data) {
                        data {
                          attributes {
                            firstName
                            lastName
                            age
                            region
                            role
                            email
                          }
                        }
                      }
                    }
                  `,
                })
                .pipe(
                  map(
                    (result) =>
                      new RegisterActions.CreateRegisterSuccess(
                        result.data?.register.data.attributes,
                      ),
                  ),
                  catchError((error) =>
                    of(new RegisterActions.CreateRegisterFail(error)),
                  ),
                ),
            ),
          ),
      ),
    ),
  );
}
