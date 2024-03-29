import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Page } from 'src/interfaces/Page';
import { LifeWithCancerService } from 'src/services/life-with-cancer.service';
import * as fromStore from '../../../store/life-with-cancer/index';

@Component({
  selector: 'life-with-cancer',
  templateUrl: './life-with-cancer.component.html',
  styleUrls: ['./life-with-cancer.component.scss'],
})
export class LifewithcancerComponent implements OnInit {
  public pages$: Observable<Page[]>;
  public pages: Page[] = [];
  public pageDetails: any[] = [];

  public title: string = '';
  public content: string = '';
  public img: string = '';

  constructor(
    private store: Store<fromStore.LifeWithCancerState>,
    private lifeWithCancerService: LifeWithCancerService,
    private router: Router,
  ) {
    this.store.select((state) => state.lifeWithCancer);
  }

  ngOnInit(): void {
    this.pages$ = this.store.select(fromStore.getLifeWithCancer);
    this.store.dispatch({ type: '[LifeWithCancer] Get LifeWithCancer' });

    this.lifeWithCancerService
      .getLifeWithCancer()
      .valueChanges.subscribe((result) => {
        this.pages = (result.data as any)['donates'].data;

        this.pageDetails = this.pages.map((page: any) => {
          return {
            title: page.attributes.title,
            content: page.attributes.content,
            img: page.attributes.img?.data?.attributes?.url || '',
          };
        });
      });
  }

  public navigateToDiet() {
    const navigationExtras: NavigationExtras = {
      state: {
        pageDetails: this.pageDetails,
      },
    };
    this.router.navigate(
      ['/for-patienter/livet-med-cancer/doctor'],
      navigationExtras,
    );
  }

  public navigateToText() {
    this.router.navigate(['/for-patienter/livet-med-cancer/ordlista']);
  }
}
