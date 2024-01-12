import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
            img:
              'http://localhost:1337' +
                page.attributes.img?.data?.attributes?.url || '',
          };
        });
      });
  }

  public navigateToDoctor() {
    this.router.navigate(['/for-patienter/livet-med-cancer/lakarbesok']);
  }

  public navigateToAfter() {
    this.router.navigate(['/for-patienter/livet-med-cancer/efter-beskedet']);
  }

  public navigateToRights() {
    this.router.navigate(['/for-patienter/livet-med-cancer/rattigheter']);
  }

  public navigateToFatigue() {
    this.router.navigate(['/for-patienter/livet-med-cancer/fatigue']);
  }

  public navigateToSexuality() {
    this.router.navigate(['/for-patienter/livet-med-cancer/sexualitet']);
  }

  public navigateToLymph() {
    this.router.navigate(['/for-patienter/livet-med-cancer/lymfodem']);
  }

  public navigateToDiet() {
    this.router.navigate(['/for-patienter/livet-med-cancer/diet']);
  }

  public navigateToText() {
    this.router.navigate(['/for-patienter/livet-med-cancer/ordlista']);
  }
}
