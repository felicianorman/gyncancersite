import { HttpClientModule } from '@angular/common/http';
import { NgModule, SecurityContext } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MarkdownModule } from 'ngx-markdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { GraphQLModule } from './graphql.module';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ForpatientsComponent } from './pages/forpatients/forpatients.component';
import { KnowledgeComponent } from './pages/knowledge/knowledge.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { SupportUsComponent } from './pages/support-us/support-us.component';
import { BlogComponent } from './sub-pages/blog/blog.component';
import { DonateComponent } from './sub-pages/donate/donate.component';
import { NewsComponent } from './sub-pages/news/news.component';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {
  servicesDonate,
  servicesLandingPage,
  servicesLifeWithCancer,
  servicesRegister,
  servicesSupportUs,
} from 'src/services';

import { DonateEffects } from 'src/store/donate/effects';
import { LandingPageEffects } from 'src/store/landingpage/effects/landingpage.effects';
import { LifeWithCancerEffects } from 'src/store/life-with-cancer';
import { RegisterEffects } from 'src/store/register/effects/register.effects';
import { SupportUsEffects } from 'src/store/support-us/effects';
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
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE,
    }),
    MarkdownModule.forChild(),
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature('landingPage', {}),
    StoreModule.forFeature('support-us', {}),
    StoreModule.forFeature('donate', {}),
    StoreModule.forFeature('register', {}),
    StoreModule.forFeature('life-with-cancer', {}),
    EffectsModule.forFeature(LandingPageEffects),
    EffectsModule.forFeature(SupportUsEffects),
    EffectsModule.forFeature(DonateEffects),
    EffectsModule.forFeature(RegisterEffects),
    EffectsModule.forFeature(LifeWithCancerEffects),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [
    servicesDonate,
    servicesLandingPage,
    servicesSupportUs,
    servicesRegister,
    servicesLifeWithCancer,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
