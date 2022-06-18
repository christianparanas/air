import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { BookingsService } from 'src/app/shared/services/bookings.service';
import * as moment from 'moment';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookings: any = null

  constructor(private usersService: UsersService, private bookingsService: BookingsService) { }

  ngOnInit(): void {
    this.getBookings()
  }

  getBookings() {
    this.bookings = this.bookingsService.getBookings()
  }

  date(param: any) {
    return moment(param).format('MMMM Do YYYY, h:mm:ss a');
  }

}
