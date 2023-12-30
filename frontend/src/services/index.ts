import { DonateService } from './donate.service';
import { LandingPageService } from './landingpage.service';
import { RegisterService } from './register.service';
import { SupportUsService } from './support-us.service';

export const servicesLandingPage: any[] = [LandingPageService];

export const servicesSupportUs: any[] = [SupportUsService];

export const servicesDonate: any[] = [DonateService];

export const servicesRegister: any[] = [RegisterService];

export * from './landingpage.service';
