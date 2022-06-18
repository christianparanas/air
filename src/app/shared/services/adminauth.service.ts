import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {
  constructor(public router: Router, private toast: HotToastService) {}

  canActivate(): boolean {
    if (!this.isLoggedIn()) {
      this.router.navigate(['/admin/auth']);
      this.toast.info('Please login first!', { position: 'top-right' });
      return false;
    }
    return true;
  }

  login(data: any) {
    const { username, password } = data

    if(username == "admin" && password == "admin") {
      this.setSession()

      this.router.navigate(['/admin']);
      this.toast.info('Logging In!', { position: 'top-right' });
    }
    else {
      this.toast.error('Unauthorized!', { position: 'top-right' });
    }
  }

  setSession() {
    const admin_expires_at = moment().add(7200, 'second');
    localStorage.setItem('admin_expires_at', JSON.stringify(admin_expires_at.valueOf()));
  }

  logout() {
    localStorage.removeItem('admin_expires_at');
    this.router.navigate(['/admin/auth']);
  }

  public isLoggedIn(): boolean {
    if(localStorage.getItem('admin_expires_at') === null) return false

    if (moment().isBefore(this.getExpiration()) == false) this.logout();
    return moment().isBefore(this.getExpiration());
  }

  getExpiration() {
    const expiration: any = localStorage.getItem('admin_expires_at');
    const admin_expires_at = JSON.parse(expiration);
    return moment(admin_expires_at);
  }

}
