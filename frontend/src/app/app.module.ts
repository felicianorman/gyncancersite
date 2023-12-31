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
  servicesKnowledge,
  servicesLandingPage,
  servicesLifeAfterCancer,
  servicesLifeWithCancer,
  servicesPatientStories,
  servicesProducts,
  servicesRegister,
  servicesSupportUs,
} from 'src/services';

import { DonateEffects } from 'src/store/donate/effects';
import { KnowledgeEffects } from 'src/store/knowledge';
import { LandingPageEffects } from 'src/store/landingpage/effects/landingpage.effects';
import { LifeAfterCancerEffects } from 'src/store/life-after-cancer/effects';
import { LifeWithCancerEffects } from 'src/store/life-with-cancer';
import { PatientStoriesEffects } from 'src/store/patient-stories';
import { ProductEffects } from 'src/store/products/effects';
import { RegisterEffects } from 'src/store/register/effects/register.effects';
import { SupportUsEffects } from 'src/store/support-us/effects';
import { ProductIdComponent } from './components/product-id/product-id.component';
import { ProductsComponent } from './components/products/products.component';
import { ShopComponent } from './pages/shop/shop.component';
import { GynCancersComponent } from './sub-pages/gyn-cancers/gyn-cancers.component';
import { LifeaftercancerComponent } from './sub-pages/life-after-cancer/lifeaftercancer.component';
import { LifewithcancerComponent } from './sub-pages/life-with-cancer/life-with-cancer.component';
import { PreventionComponent } from './sub-pages/prevention/prevention.component';
import { RegisterComponent } from './sub-pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    DonateComponent,
    KnowledgeComponent,
    SupportUsComponent,
    ContactComponent,
    ForpatientsComponent,
    LifewithcancerComponent,
    LifeaftercancerComponent,
    NavigationComponent,
    FooterComponent,
    NewsComponent,
    BlogComponent,
    RegisterComponent,
    ShopComponent,
    ProductsComponent,
    ProductIdComponent,
    GynCancersComponent,
    PreventionComponent,
    BlogComponent,
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
    StoreModule.forFeature('products', {}),
    StoreModule.forFeature('life-after-cancer', {}),
    StoreModule.forFeature('knowledge', {}),
    StoreModule.forFeature('patient-stories', {}),

    EffectsModule.forFeature(LandingPageEffects),
    EffectsModule.forFeature(SupportUsEffects),
    EffectsModule.forFeature(DonateEffects),
    EffectsModule.forFeature(RegisterEffects),
    EffectsModule.forFeature(LifeWithCancerEffects),
    EffectsModule.forFeature(ProductEffects),
    EffectsModule.forFeature(LifeAfterCancerEffects),
    EffectsModule.forFeature(KnowledgeEffects),
    EffectsModule.forFeature(PatientStoriesEffects),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [
    servicesDonate,
    servicesLandingPage,
    servicesSupportUs,
    servicesRegister,
    servicesLifeWithCancer,
    servicesProducts,
    servicesLifeAfterCancer,
    servicesKnowledge,
    servicesPatientStories,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
