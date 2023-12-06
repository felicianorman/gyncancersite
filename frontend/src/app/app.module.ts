import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { SupportUsComponent } from './pages/support-us/support-us.component';
import { KnowledgeComponent } from './pages/knowledge/knowledge.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ForpatientsComponent } from './pages/forpatients/forpatients.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './sub-pages/news/news.component';
import { BlogComponent } from './sub-pages/blog/blog.component';
import { DonateComponent } from './sub-pages/donate/donate.component';
import { RegisterComponent } from './sub-pages/register/register.component';
import { ShopComponent } from './sub-pages/shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    DonateComponent,
    KnowledgeComponent,
    SupportUsComponent,
    ContactComponent,
    ForpatientsComponent,
    NavigationComponent,
    FooterComponent,
    NewsComponent,
    BlogComponent,
    RegisterComponent,
    ShopComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, GraphQLModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
