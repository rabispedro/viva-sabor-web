import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LandpageComponent } from './pages/landpage/landpage.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // { path: '/home', component:  },
  // { path: '/orders', component:  },
  // { path: '/search', component:  },
  // { path: '/profile', component:  },
  { path: '', component: LandpageComponent },
];
