import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  users: any = null

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getCustomers()
  }

  getCustomers() {
    this.users = this.usersService.getUsers()

    console.log(this.users)
  }

}
