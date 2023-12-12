import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Article } from 'src/app/models/Article';

@Component({
  selector: 'app-support-us',
  templateUrl: './support-us.component.html',
  styleUrls: ['./support-us.component.scss'],
})
export class SupportUsComponent implements OnInit {
  public supportTitle: string = '';
  public supportContent: string = '';

  public supportInfoTitle: string = '';
  public supportInfoContent: string = '';

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    //supportUs
    this.apollo
      .watchQuery({
        query: gql`
          query getSupportUs {
            supportUs {
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
        console.log(
          'support us',
          result.data.supportUs.data.attributes.content,
        );
        this.supportTitle = result.data.supportUs.data.attributes.title;
        this.supportContent = result.data.supportUs.data.attributes.content;
      });

    this.apollo
      .watchQuery({
        query: gql`
          query getSupportUsInfo {
            supportUsInfo {
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
        console.log(
          'support us info:',
          result.data.supportUsInfo.data.attributes,
        );

        this.supportInfoTitle = result.data.supportUsInfo.data.attributes.title;
        this.supportInfoContent =
          result.data.supportUsInfo.data.attributes.content;
      });
  }
}
