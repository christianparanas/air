import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { FlightsService } from 'src/app/shared/services/flights.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: any = null
  flights: any = null

  constructor(private usersService: UsersService, private flightsService: FlightsService) { }

  ngOnInit(): void {
    this.getCustomers()
    this.getFlights()
  }

  getCustomers() {
    this.users = this.usersService.getUsers()
  }

  getFlights() {
    this.flights = this.flightsService.getFlights()
  }

}
