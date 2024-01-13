import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductIdComponent } from './components/product-id/product-id.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ForpatientsComponent } from './pages/forpatients/forpatients.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { ShopComponent } from './pages/shop/shop.component';
import { SupportUsComponent } from './pages/support-us/support-us.component';
import { ActivityComponent } from './sub-pages/activity/activity.component';
import { BlogComponent } from './sub-pages/blog/blog.component';
import { CheckoutComponent } from './sub-pages/checkout/checkout.component';
import { CloseRelativeComponent } from './sub-pages/close-relative/close-relative.component';
import { ContactUsComponent } from './sub-pages/contact-us/contact-us.component';
import { DietComponent } from './sub-pages/diet/diet.component';
import { DonateComponent } from './sub-pages/donate/donate.component';
import { EndoComponent } from './sub-pages/endo/endo.component';
import { GynCancersComponent } from './sub-pages/gyn-cancers/gyn-cancers.component';
import { LifewithcancerComponent } from './sub-pages/life-with-cancer/life-with-cancer.component';
import { CervicalCancerComponent } from './sub-pages/livmoderhalscancer/cerivalcancer.component';
import { OvarianComponent } from './sub-pages/ovarian/ovarian.component';
import { PalliatveCareComponent } from './sub-pages/palliatve-care/palliatve-care.component';
import { PreventionComponent } from './sub-pages/prevention/prevention.component';
import { RegisterComponent } from './sub-pages/register/register.component';

import { RehabComponent } from './sub-pages/rehab/rehab.component';
import { VulvaComponent } from './sub-pages/vulva/vulva.component';
import { WhatWeDoComponent } from './sub-pages/what-we-do/what-we-do.component';
import { WordsComponent } from './sub-pages/words/words.component';

const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent,
  },
  {
    path: 'stod-oss',
    component: SupportUsComponent,
  },
  { path: 'stod-oss/donate', component: DonateComponent },
  { path: 'stod-oss/register', component: RegisterComponent },
  {
    path: 'for-patienter',
    component: ForpatientsComponent,
  },
  {
    path: 'for-patienter/livet-med-cancer',
    component: LifewithcancerComponent,
  },

  {
    path: 'for-patienter/rehab',
    component: RehabComponent,
  },
  {
    path: 'for-patienter/for-narstaende',
    component: CloseRelativeComponent,
  },
  {
    path: 'for-patienter/palliativ-vard',
    component: PalliatveCareComponent,
  },

  {
    path: 'kunskap',
    component: GynCancersComponent,
  },
  {
    path: 'kunskap/aggstockscancer',
    component: OvarianComponent,
  },
  {
    path: 'kunskap/livmoderkroppscancer',
    component: EndoComponent,
  },
  {
    path: 'kunskap/livmoderhalscancer',
    component: CervicalCancerComponent,
  },
  {
    path: 'kunskap/vulvacancer',
    component: VulvaComponent,
  },

  {
    path: 'kunskap/prevention',
    component: PreventionComponent,
  },

  {
    path: 'kunskap/patient-berattelser',
    component: BlogComponent,
  },
  {
    path: 'kontakt',
    component: ContactComponent,
  },
  {
    path: 'kontakt/vad-vi-gor',
    component: WhatWeDoComponent,
  },

  {
    path: 'kontakt/kontakta-oss',
    component: ContactUsComponent,
  },

  {
    path: 'webshop',
    component: ShopComponent,
  },
  {
    path: 'webshop/:id',
    component: ProductIdComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },

  {
    path: 'for-patienter/livet-med-cancer/diet',
    component: DietComponent,
  },
  {
    path: 'for-patienter/livet-med-cancer/ordlista',
    component: WordsComponent,
  },

  {
    path: 'for-patienter/livet-efter-cancer/aktivitet',
    component: ActivityComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
