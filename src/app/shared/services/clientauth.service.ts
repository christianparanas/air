import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class ClientauthService {
  users: any = [];

  constructor(public router: Router, private toast: HotToastService) {}

  login(data: any) {
    if(localStorage.getItem('users') === null) {
      return {
        status: 401,
        msg: "Invalid Email or Password"
      }
    }

    const res = this.emailExists(data.email)

    if(res == undefined || res.password != data.password) {
      return {
        status: 401,
        msg: "Invalid Email or Password"
      }
    }

    this.setSession(res.id)
    this.router.navigate(['/home']);
  }

  signup(data: any) {
    const user = {
      id: Math.random().toString(36).slice(2, 30),
      ...data,
    };

    const result = this.emailExists(data.email)

    if(result != undefined && result != "empty") {
      return {
        status: 401,
        msg: "Email already used!"
      }
    }

    if (localStorage.getItem('users') === null) {
      this.users.push(user);

      localStorage.setItem('users', JSON.stringify(this.users));
    } else {
      const res: any = localStorage.getItem('users');
      let users = JSON.parse(res);
      localStorage.removeItem('users');

      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
    }

    return {
      status: 201,
      msg: "Account created!"
    }
  }

  emailExists(email: any) {
    if(localStorage.getItem('users') === null) {
      return "empty"
    }

    const usersArr = this.getUsers()
    return usersArr.find((item: any) => item.email == email)
  }

  getUsers() {
    const res: any = localStorage.getItem('users');
    let users = JSON.parse(res);

    return users
  }

  setSession(id: any) {
    const expires_at = moment().add(7200, 'second');
    localStorage.setItem('userId', JSON.stringify(id));
    localStorage.setItem('expires_at', JSON.stringify(expires_at.valueOf()));
  }

  logout() {
    localStorage.removeItem('expires_at');
    localStorage.removeItem('userId');
    this.router.navigate(['/']);
  }

  public isLoggedIn(): boolean {
    if(localStorage.getItem('expires_at') === null) return false

    if (moment().isBefore(this.getExpiration()) == false) this.logout();
    return moment().isBefore(this.getExpiration());
  }

  getExpiration() {
    const expiration: any = localStorage.getItem('expires_at');
    const expires_at = JSON.parse(expiration);
    return moment(expires_at);
  }

  canActivate(): boolean {
    if (!this.isLoggedIn()) {
      this.router.navigate(['/login']);
      this.toast.info('Please login first!', { position: 'top-right' });
      return false;
    }
    return true;
  }
}
