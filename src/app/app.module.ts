import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { FeedbacksComponent } from './pages/feedbacks/feedbacks.component';
import { AuthComponent } from './admin/auth/auth.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HotToastModule } from '@ngneat/hot-toast';
import { CustomersComponent } from './admin/customers/customers.component';
import { FlightsComponent } from './admin/flights/flights.component';
import { BookingsComponent } from './admin/bookings/bookings.component';
import { AdminNavigationComponent } from './components/admin-navigation/admin-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NavigationComponent,
    FaqsComponent,
    FeedbacksComponent,
    AuthComponent,
    DashboardComponent,
    LandingComponent,
    CustomersComponent,
    FlightsComponent,
    BookingsComponent,
    AdminNavigationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule, HotToastModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
