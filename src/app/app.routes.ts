import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { JobListComponent } from './features/job-list/job-list.component';
import { JobDetailComponent } from './features/job-detail/job-detail.component';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import { TermsComponent } from './features/terms/terms.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jobs', component: JobListComponent },
  { path: 'job/:id', component: JobDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'terms', component: TermsComponent },
  { path: '**', redirectTo: '' }
];