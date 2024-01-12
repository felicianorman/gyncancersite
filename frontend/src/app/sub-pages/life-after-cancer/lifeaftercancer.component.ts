import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Page } from 'src/interfaces/Page';
import { LifeAfterCancerService } from 'src/services/life-after-cancer.service';
import * as fromStore from '../../../store/life-after-cancer/index';

@Component({
  selector: 'life-after-cancer',
  templateUrl: './life-after-cancer.component.html',
  styleUrls: ['./lifeaftercancer.component.scss'],
})
export class LifeaftercancerComponent implements OnInit {
  public pages$: Observable<Page[]>;
  public pages: Page[] = [];
  public pageDetails: any[] = [];

  public title: string = '';
  public content: string = '';
  public img: string = '';

  constructor(
    private store: Store<fromStore.LifeAfterCancerState>,
    private lifeAfterCancerService: LifeAfterCancerService,
    private router: Router,
  ) {
    this.store.select((state) => state.lifeAfterCancer);
  }

  ngOnInit(): void {
    this.pages$ = this.store.select(fromStore.getLifeAfterCancer);
    this.store.dispatch({ type: '[LifeAfterCancer] Get LifeAfterCancer' });

    this.lifeAfterCancerService
      .getLifeAfterCancer()
      .valueChanges.subscribe((result) => {
        this.pages = (result.data as any)['livetEfterCancers'].data;

        this.pageDetails = this.pages.map((page: any) => {
          const imgObject = page.attributes.img?.data?.[0];
          const imgUrl = imgObject?.attributes?.url || '';

          return {
            title: page.attributes.title,
            content: page.attributes.content,
            img: 'http://localhost:1337' + imgUrl,
          };
        });
      });
  }

  public navigateToWorry() {
    this.router.navigate(['for-patienter/livet-efter-cancerr/oro-och-angest']);
  }

  public navigateToRehab() {
    this.router.navigate(['for-patienter/livet-efter-cancer/rehab']);
  }

  public navigateToHangover() {
    this.router.navigate(['for-patienter/livet-efter-cancer/baksmallan']);
  }

  public navigateToStories() {
    this.router.navigate(['kunskap/patient-berattelser']);
  }

  public navigateToActivity() {
    this.router.navigate(['for-patienter/livet-efter-cancer/aktivitet']);
  }
}
