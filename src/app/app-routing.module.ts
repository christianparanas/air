import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FaqsComponent } from './pages/faqs/faqs.component';
import { FeedbacksComponent } from './pages/feedbacks/feedbacks.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LandingComponent } from './pages/landing/landing.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'feedbacks', component: FeedbacksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
