import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { DonateComponent } from './pages/donate/donate.component';
import { KnowledgeComponent } from './pages/knowledge/knowledge.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ForpatientsComponent } from './pages/forpatients/forpatients.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    DonateComponent,
    KnowledgeComponent,
    ContactComponent,
    ForpatientsComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
