import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Page } from 'src/interfaces/Page';
import { AboutUsService } from 'src/services/about-us.service';
import * as fromStore from '../../../store/about-us/index';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.scss'],
})
export class WhatWeDoComponent implements OnInit {
  public pages$: Observable<Page[]>;
  public pages: Page[] = [];
  public pageDetails: any[] = [];

  public title: string = '';
  public content: string = '';

  constructor(
    private store: Store<fromStore.AboutUsState>,
    private aboutUsService: AboutUsService,
  ) {
    this.store.select((state) => state.aboutUs);
  }

  ngOnInit(): void {
    this.pages$ = this.store.select(fromStore.getAboutUs);
    this.store.dispatch({ type: '[AboutUs] Get AboutUs' });

    this.aboutUsService.getAboutUs().valueChanges.subscribe((result) => {
      this.pages = (result.data as any)['aboutUses'].data;
      console.log(this.pages);

      this.pageDetails = this.pages.map((page: any) => {
        return {
          title: page.attributes.title,
          content: page.attributes.content,
        };
      });

      console.log('Processed pageDetails:', this.pageDetails);
    });
  }
}
