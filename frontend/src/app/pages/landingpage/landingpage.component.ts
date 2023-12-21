import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { Article } from 'src/app/models/Article';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss'],
})
export class LandingpageComponent {
  public articles: Article[] = [];
  loading = true;
  error: any;

  public shareTitle: string = '';
  public shareContent: string = '';
  public visionTitle: string = '';
  public visionContent: string = '';

  public navigateTo() {
    this.router.navigate(['/stod-oss']);
  }

  constructor(
    private apollo: Apollo,
    private router: Router,
  ) {}

  ngOnInit() {
    //shareSite
    this.apollo
      .watchQuery({
        query: gql`
          query getShareSite {
            lpSharesite {
              data {
                attributes {
                  title
                  content
                }
              }
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        console.log('sharesite:', result.data.lpSharesite.data.attributes);

        this.shareTitle = result.data.lpSharesite.data.attributes.title;
        this.shareContent = result.data.lpSharesite.data.attributes.content;
      });

    //ourvision
    this.apollo
      .watchQuery({
        query: gql`
          query getOurVision {
            ourVision {
              data {
                attributes {
                  title
                  content
                }
              }
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        console.log('vision:', result.data.ourVision.data.attributes);

        this.visionTitle = result.data.ourVision.data.attributes.title;
        this.visionContent = result.data.ourVision.data.attributes.content;
      });
  }
}
