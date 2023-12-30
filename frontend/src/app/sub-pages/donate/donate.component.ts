import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { Donate } from 'src/interfaces/Donate';
import { DonateService } from 'src/services/donate.service';
import * as fromStore from '../../../store/donate/index';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss'],
})
export class DonateComponent implements OnInit {
  public vaccineText: string = '';
  public vaccineImg: string = '';
  public levaLiteTillText: string = '';
  public levaLiteTillImg: string = '';
  public meetUpText: string = '';
  public meetUpImg: string = '';
  public gynCancerDagenText: string = '';
  public gynCancerDagenImg: string = '';

  posts$: Observable<Donate>;
  posts: Donate;

  constructor(
    private apollo: Apollo,
    private store: Store<fromStore.DonateState>,
    private donateService: DonateService,
  ) {
    this.store.select((state) => state.donate);
  }

  ngOnInit(): void {
    this.posts$ = this.store.select(fromStore.getDonate);
    this.store.dispatch({ type: '[Donate] Get Leva' });
    this.store.dispatch({ type: '[Donate] Get Vaccine' });
    this.store.dispatch({ type: '[Donate] Get Meetup' });
    this.store.dispatch({ type: '[Donate] Get Gyncancerdagen' });

    this.donateService.getLevaLiteTill().valueChanges.subscribe((result) => {
      this.levaLiteTillText = (result.data as any)[
        'doneraLevalitetill'
      ].data.attributes.content;
      this.levaLiteTillImg =
        'http://localhost:1337' +
        (result.data as any)['doneraLevalitetill'].data.attributes.img.data
          .attributes.url;
    });

    this.donateService.getVaccine().valueChanges.subscribe((result) => {
      this.vaccineText = (result.data as any)[
        'doneraVaccin'
      ].data.attributes.content;
      this.vaccineImg =
        'http://localhost:1337' +
        (result.data as any)['doneraVaccin'].data.attributes.img.data.attributes
          .url;
    });

    this.donateService.getMeetup().valueChanges.subscribe((result) => {
      this.meetUpText = (result.data as any)[
        'doneraMeetup'
      ].data.attributes.content;
      this.meetUpImg =
        'http://localhost:1337' +
        (result.data as any)['doneraMeetup'].data.attributes.img.data.attributes
          .url;
    });

    this.donateService.getGynCancerdagen().valueChanges.subscribe((result) => {
      this.gynCancerDagenText = (result.data as any)[
        'doneraGyncancerdagen'
      ].data.attributes.content;
      this.gynCancerDagenImg =
        'http://localhost:1337' +
        (result.data as any)['doneraGyncancerdagen'].data.attributes.img.data
          .attributes.url;
    });
  }
}
