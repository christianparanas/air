import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers() {
    if(localStorage.getItem('users') === null) {
      return false
    }
  
    const res: any = localStorage.getItem('users');
    let users = JSON.parse(res);

    return users
  }

  getUserId() {
    const res: any = localStorage.getItem('userId')
    return JSON.parse(res)
  }
}
