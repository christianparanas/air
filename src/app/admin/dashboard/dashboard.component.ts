import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { FlightsService } from 'src/app/shared/services/flights.service';
import { BookingsService } from 'src/app/shared/services/bookings.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: any = null
  flights: any = null
  bookings: any = null

  constructor(private usersService: UsersService, private flightsService: FlightsService, private bookingsService: BookingsService) { }

  ngOnInit(): void {
    this.getCustomers()
    this.getFlights()
    this.getBookings()
  }

  getCustomers() {
    this.users = this.usersService.getUsers()
  }

  getFlights() {
    this.flights = this.flightsService.getFlights()
  }

  getBookings() {
    this.bookings = this.bookingsService.getBookings()
  }

}
