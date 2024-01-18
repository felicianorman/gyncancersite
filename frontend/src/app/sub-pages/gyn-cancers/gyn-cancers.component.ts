import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Page } from 'src/interfaces/Page';
import { KnowledgeService } from 'src/services/knowledge.service';
import * as fromStore from '../../../store/knowledge/index';

@Component({
  selector: 'app-gyn-cancers',
  templateUrl: './gyn-cancers.component.html',
  styleUrls: ['./gyn-cancers.component.scss'],
})
export class GynCancersComponent implements OnInit {
  public page$: Observable<Page[]>;
  public pages: Page[] = [];
  public pageDetails: any[] = [];

  public title: string = '';
  public content: string = '';
  public img: string = '';
  public preview: string = '';

  constructor(
    private store: Store<fromStore.KnowledgeState>,
    private knowledgeService: KnowledgeService,
    private router: Router,
  ) {
    this.store.select((state) => state.knowledge);
  }

  ngOnInit() {
    this.page$ = this.store.select(fromStore.getKnowledge);
    this.store.dispatch({ type: '[Knowledge] Get Knowledge' });

    this.knowledgeService.getKnowledge().valueChanges.subscribe((result) => {
      this.pages = (result.data as any)['kunskaps'].data;

      this.pageDetails = this.pages.map((page: any) => {
        return {
          title: page.attributes.title,
          content: page.attributes.content,
          preview: page.attributes.preview,
          img: page.attributes.img?.data?.attributes.url,
        };
      });
    });
  }

  public ovarianCancer() {
    const navigationExtras: NavigationExtras = {
      state: {
        pageDetails: this.pageDetails,
      },
    };

    this.router.navigate(['kunskap/aggstockscancer'], navigationExtras);
  }

  public endoCancer() {
    const navigationExtras: NavigationExtras = {
      state: {
        pageDetails: this.pageDetails,
      },
    };

    this.router.navigate(['kunskap/livmoderkroppscancer'], navigationExtras);
  }

  public cervicalCancer() {
    const navigationExtras: NavigationExtras = {
      state: {
        pageDetails: this.pageDetails,
      },
    };

    this.router.navigate(['kunskap/livmoderhalscancer'], navigationExtras);
  }

  public vulvaCancer() {
    const navigationExtras: NavigationExtras = {
      state: {
        pageDetails: this.pageDetails,
      },
    };

    this.router.navigate(['kunskap/vulvacancer'], navigationExtras);
  }
}
