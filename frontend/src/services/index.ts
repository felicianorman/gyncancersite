import { AboutUsService } from './about-us.service';
import { CartService } from './cart.service';
import { closeRelativeService } from './close-relative.services';
import { DonateService } from './donate.service';
import { KnowledgeService } from './knowledge.service';
import { LandingPageService } from './landingpage.service';
import { LifeAfterCancerService } from './life-after-cancer.service';
import { LifeWithCancerService } from './life-with-cancer.service';
import { OrderService } from './order.service';
import { PatientStoriesService } from './patient-stories.service';
import { ProductService } from './products.service';
import { RegisterService } from './register.service';
import { SupportUsService } from './support-us.service';
import { WhatWeDoServices } from './we-do.services';

export const servicesLandingPage: any[] = [LandingPageService];

export const servicesSupportUs: any[] = [SupportUsService];

export const servicesDonate: any[] = [DonateService];

export const servicesRegister: any[] = [RegisterService];

export const servicesLifeWithCancer: any[] = [LifeWithCancerService];

export const servicesProducts: any[] = [ProductService];

export const servicesLifeAfterCancer: any[] = [LifeAfterCancerService];

export const servicesKnowledge: any[] = [KnowledgeService];

export const servicesPatientStories: any[] = [PatientStoriesService];

export const servicesCart: any[] = [CartService];

export const servicesAboutUs: any[] = [AboutUsService];

export const servicesOrder: any[] = [OrderService];

export const servicesWhatWeDo: any[] = [WhatWeDoServices];

export const servicesCloseRelative: any[] = [closeRelativeService];

export * from './landingpage.service';
