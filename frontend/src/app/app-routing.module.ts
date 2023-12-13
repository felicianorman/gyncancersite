import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { ForpatientsComponent } from './pages/forpatients/forpatients.component';
import { KnowledgeComponent } from './pages/knowledge/knowledge.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { SupportUsComponent } from './pages/support-us/support-us.component';
import { DonateComponent } from './sub-pages/donate/donate.component';
import { RegisterComponent } from './sub-pages/register/register.component';

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
    path: 'kunskap',
    component: KnowledgeComponent,
  },
  {
    path: 'kontakt',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
