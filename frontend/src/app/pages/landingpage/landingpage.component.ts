import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/interfaces/Post';
import { LandingPageService } from 'src/services';
import * as fromStore from '../../../store/landingpage/index';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss'],
})
export class LandingpageComponent {
  loading = true;
  error: any;

  posts$: Observable<Post>;
  posts: Post;

  public shareTitle: string = '';
  public shareContent: string = '';
  public visionTitle: string = '';
  public visionContent: string = '';

  public navigateTo() {
    this.router.navigate(['/stod-oss']);
  }

  constructor(
    private router: Router,
    private store: Store<fromStore.LandingPageState>,
    private landingPageService: LandingPageService,
  ) {
    this.store.select((state) => state.landingPage);
  }

  ngOnInit() {
    this.posts$ = this.store.select(fromStore.getLandingPage);
    this.store.dispatch({ type: '[LandingPage] Get Share Site' });
    this.store.dispatch({ type: '[LandingPage] Get Our Vision' });

    this.landingPageService.getShareSite().valueChanges.subscribe((result) => {
      this.shareTitle = (result.data as any)[
        'lpSharesite'
      ].data.attributes.title;
      this.shareContent = (result.data as any)[
        'lpSharesite'
      ].data.attributes.content;
    });

    this.landingPageService.getOurVision().valueChanges.subscribe((result) => {
      this.visionTitle = (result.data as any)[
        'ourVision'
      ].data.attributes.title;
      this.visionContent = (result.data as any)[
        'ourVision'
      ].data.attributes.content;
    });
  }
}
