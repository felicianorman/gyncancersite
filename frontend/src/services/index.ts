import { DonateService } from './donate.service';
import { LandingPageService } from './landingpage.service';
import { SupportUsService } from './support-us.service';

export const servicesLandingPage: any[] = [LandingPageService];

export const servicesSupportUs: any[] = [SupportUsService];

export const servicesDonate: any[] = [DonateService];

export * from './landingpage.service';
