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
  servicesAboutUs,
  servicesCart,
  servicesCloseRelative,
  servicesDonate,
  servicesKnowledge,
  servicesLandingPage,
  servicesLifeAfterCancer,
  servicesLifeWithCancer,
  servicesOrder,
  servicesPatientStories,
  servicesProducts,
  servicesRegister,
  servicesSupportUs,
  servicesWhatWeDo,
} from 'src/services';

import { AboutUsEffects } from 'src/store/about-us';
import { DonateEffects } from 'src/store/donate/effects';
import { KnowledgeEffects } from 'src/store/knowledge';
import { LandingPageEffects } from 'src/store/landingpage/effects/landingpage.effects';
import { LifeAfterCancerEffects } from 'src/store/life-after-cancer/effects';
import { LifeWithCancerEffects } from 'src/store/life-with-cancer';
import { OrderEffects } from 'src/store/order';
import { PatientStoriesEffects } from 'src/store/patient-stories';
import { ProductEffects } from 'src/store/products/effects';
import { RegisterEffects } from 'src/store/register/effects/register.effects';
import { SupportUsEffects } from 'src/store/support-us/effects';
import { WhatWeDoEffects } from 'src/store/what-we-do';
import { CartComponent } from './components/cart/cart.component';
import { ProductIdComponent } from './components/product-id/product-id.component';
import { ProductsComponent } from './components/products/products.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ActivityComponent } from './sub-pages/activity/activity.component';
import { CheckoutComponent } from './sub-pages/checkout/checkout.component';
import { CloseRelativeComponent } from './sub-pages/close-relative/close-relative.component';
import { DietComponent } from './sub-pages/diet/diet.component';
import { EndoComponent } from './sub-pages/endo/endo.component';
import { GynCancersComponent } from './sub-pages/gyn-cancers/gyn-cancers.component';
import { LifeaftercancerComponent } from './sub-pages/life-after-cancer/lifeaftercancer.component';
import { LifewithcancerComponent } from './sub-pages/life-with-cancer/life-with-cancer.component';
import { CervicalCancerComponent } from './sub-pages/livmoderhalscancer/cerivalcancer.component';
import { OvarianComponent } from './sub-pages/ovarian/ovarian.component';
import { PreventionComponent } from './sub-pages/prevention/prevention.component';
import { RegisterComponent } from './sub-pages/register/register.component';
import { TreatmentComponent } from './sub-pages/treatment/treatment.component';
import { VulvaComponent } from './sub-pages/vulva/vulva.component';
import { WhatWeDoComponent } from './sub-pages/what-we-do/what-we-do.component';
import { WordsComponent } from './sub-pages/words/words.component';

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
    CartComponent,
    CheckoutComponent,
    DietComponent,
    WordsComponent,
    ActivityComponent,
    TreatmentComponent,
    OvarianComponent,
    EndoComponent,
    CervicalCancerComponent,
    VulvaComponent,
    WhatWeDoComponent,
    CloseRelativeComponent,
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
    StoreModule.forFeature('cart', {}),
    StoreModule.forFeature('about-us', {}),
    StoreModule.forFeature('order', {}),
    StoreModule.forFeature('what-we-do', {}),

    EffectsModule.forFeature(LandingPageEffects),
    EffectsModule.forFeature(SupportUsEffects),
    EffectsModule.forFeature(DonateEffects),
    EffectsModule.forFeature(RegisterEffects),
    EffectsModule.forFeature(LifeWithCancerEffects),
    EffectsModule.forFeature(ProductEffects),
    EffectsModule.forFeature(LifeAfterCancerEffects),
    EffectsModule.forFeature(KnowledgeEffects),
    EffectsModule.forFeature(PatientStoriesEffects),
    EffectsModule.forFeature(AboutUsEffects),
    EffectsModule.forFeature(OrderEffects),
    EffectsModule.forFeature(WhatWeDoEffects),
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
    servicesCart,
    servicesAboutUs,
    servicesOrder,
    servicesWhatWeDo,
    servicesCloseRelative,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
