import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientauthService as clientGuard } from './shared/services/clientauth.service';
import { AdminauthService as adminGuard } from './shared/services/adminauth.service';

import { FaqsComponent } from './pages/faqs/faqs.component';
import { FeedbacksComponent } from './pages/feedbacks/feedbacks.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LandingComponent } from './pages/landing/landing.component';

import { AuthComponent } from './admin/auth/auth.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CustomersComponent } from './admin/customers/customers.component';
import { FlightsComponent } from './admin/flights/flights.component';
import { BookingsComponent } from './admin/bookings/bookings.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: HomeComponent, canActivate: [clientGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'feedbacks', component: FeedbacksComponent },

  { path: 'admin/auth', component: AuthComponent },
  { path: 'admin', component: DashboardComponent, canActivate: [adminGuard] },
  { path: 'admin/flights', component: FlightsComponent, canActivate: [adminGuard] },
  { path: 'admin/bookings', component: BookingsComponent, canActivate: [adminGuard] },
  { path: 'admin/customers', component: CustomersComponent, canActivate: [adminGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
