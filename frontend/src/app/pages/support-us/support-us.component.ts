import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { Post } from 'src/interfaces/Post';
import { LandingPageService } from 'src/services';
import { SupportUsService } from 'src/services/support-us.service';
import * as fromStore from '../../../store/support-us/index';

@Component({
  selector: 'app-support-us',
  templateUrl: './support-us.component.html',
  styleUrls: ['./support-us.component.scss'],
})
export class SupportUsComponent implements OnInit {
  posts$: Observable<Post>;
  posts: Post;

  public supportTitle: string = '';
  public supportContent: string = '';

  public supportInfoTitle: string = '';
  public supportInfoContent: string = '';

  constructor(
    private router: Router,
    private store: Store<fromStore.SupportUsState>,
    private supportusService: SupportUsService,
  ) {
    this.store.select((state) => state.supportUs);
  }

  public navigateTo() {
    this.router.navigate(['/stod-oss/donate']);
  }
  ngOnInit() {
    this.posts$ = this.store.select(fromStore.getSupportUs);
    this.store.dispatch({ type: '[Support Us] Get Support Us' });
    this.store.dispatch({ type: '[Support Us] Get Support Us Info' });

    this.supportusService.getSupportUs().valueChanges.subscribe((result) => {
      this.supportTitle = (result.data as any)[
        'supportUs'
      ].data.attributes.title;
      this.supportContent = (result.data as any)[
        'supportUs'
      ].data.attributes.content;
    });

    this.supportusService
      .getSupportUsInfo()
      .valueChanges.subscribe((result) => {
        this.supportInfoTitle = (result.data as any)[
          'supportUsInfo'
        ].data.attributes.title;
        this.supportInfoContent = (result.data as any)[
          'supportUsInfo'
        ].data.attributes.content;
      });
  }
}
