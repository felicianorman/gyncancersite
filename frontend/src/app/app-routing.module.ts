import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { DonateComponent } from './pages/donate/donate.component';
import { ForpatientsComponent } from './pages/forpatients/forpatients.component';
import { KnowledgeComponent } from './pages/knowledge/knowledge.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent,
  },
  {
    path: 'stod-oss',
    component: DonateComponent,
  },
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
