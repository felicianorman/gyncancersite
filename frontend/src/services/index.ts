import { DonateService } from './donate.service';
import { KnowledgeService } from './knowledge.service';
import { LandingPageService } from './landingpage.service';
import { LifeAfterCancerService } from './life-after-cancer.service';
import { LifeWithCancerService } from './life-with-cancer.service';
import { ProductService } from './products.service';
import { RegisterService } from './register.service';
import { SupportUsService } from './support-us.service';

export const servicesLandingPage: any[] = [LandingPageService];

export const servicesSupportUs: any[] = [SupportUsService];

export const servicesDonate: any[] = [DonateService];

export const servicesRegister: any[] = [RegisterService];

export const servicesLifeWithCancer: any[] = [LifeWithCancerService];

export const servicesProducts: any[] = [ProductService];

export const servicesLifeAfterCancer: any[] = [LifeAfterCancerService];

export const servicesKnowledge: any[] = [KnowledgeService];

export * from './landingpage.service';
