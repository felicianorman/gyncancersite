import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Apollo, gql } from 'apollo-angular';
import { EMPTY, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Order } from 'src/interfaces/Order';
import * as OrderActions from '../actions/order.actions';

@Injectable()
export class OrderEffects {
  constructor(
    private actions$: Actions,
    private apollo: Apollo,
  ) {}

  createOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.CREATE_ORDER),
      switchMap(({ payload }: { payload: Order }) =>
        this.apollo
          .mutate({
            mutation: gql`
              mutation createOrder($data: OrderInput!) {
                createOrder(data: $data) {
                  data {
                    attributes {
                      firstName
                      lastName
                      address
                      email
                      products
                    }
                  }
                }
              }
            `,
            variables: {
              data: payload,
            },
          })
          .pipe(
            map(
              (result: any) =>
                new OrderActions.CreateOrderSuccess(
                  result.data?.createRegister.data.attributes,
                ),
            ),
            catchError((error) => of(new OrderActions.CreateOrderFail(error))),
          ),
      ),
    ),
  );
}
