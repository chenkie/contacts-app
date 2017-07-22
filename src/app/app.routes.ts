import { Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactResolverService } from './contact/contact-resolver.service';

export const ROUTES: Array<Route> = [
  { path: '', component: HomeComponent },
  {
    path: 'contacts',
    component: ContactListComponent,
    children: [
      {
        path: ':id',
        component: ContactDetailComponent,
        resolve: { contact: ContactResolverService }
      }
    ]
  }
];
