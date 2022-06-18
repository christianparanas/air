import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ClientauthService } from 'src/app/shared/services/clientauth.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { FlightsService } from 'src/app/shared/services/flights.service';
import { BookingsService } from 'src/app/shared/services/bookings.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  flightDeals: any = [];
  createFlightModal: boolean = false;
  bookingForm: FormGroup;
  userBookings: any = []

  airports: any = [
    'Bacolod–Silay International Airport',
    'Bicol International Airport',
    'Cagayan North International Airport',
    'Clark International Airport',
    'Francisco Bangoy International Airport',
    'General Santos International Airport',
    'Iloilo International Airport',
    'Kalibo International Airport',
    'Laguindingan International Airport',
    'Laoag International Airport',
    'Mactan–Cebu International Airport',
    'Ninoy Aquino International Airport',
    'Zamboanga International Airport',
  ];

  constructor(
    private clientauthService: ClientauthService,
    private flightsService: FlightsService,
    private toast: HotToastService,
    private usersService: UsersService,
    private bookingsService: BookingsService
  ) {
    this.bookingForm = new FormGroup({
      from: new FormControl('', Validators.required),
      to: new FormControl('', Validators.required),
      fare: new FormControl(3501, Validators.required),
      date: new FormControl('', Validators.required),
      coupon: new FormControl(''),
      type: new FormControl('personal'),
      status: new FormControl('pending'),
    });
  }

  ngOnInit(): void {
    this.getFlightDeals();
    this.getBookings()
  }

  refreshData() {
    this.getFlightDeals();
    this.getBookings()
  }

  getFlightDeals() {
    this.flightDeals = this.flightsService.getFlights();
  }

  openCloseModal() {
    this.createFlightModal = !this.createFlightModal;
  }

  onSubmit() {
    if (this.bookingForm.status == 'INVALID') {
      this.toast.show('Data entered invalid.', {
        theme: 'snackbar',
        position: 'bottom-center',
      });
      return;
    }

    const data = {
      ...this.bookingForm.value,
      customerId: this.usersService.getUserId()
    }

    const res = this.bookingsService.storeBooking(data);

    if (res.status == 201) {
      this.refreshData()
      this.toast.success(res.msg, { position: 'top-right' });
      this.openCloseModal();
    }
  }

  bookDeal(data: any) {
    const arr = {
      ...data,
      customerId: this.usersService.getUserId()
    }

    const res = this.bookingsService.storeBooking(arr);

    if (res.status == 201) {
      this.refreshData()
      this.toast.success(res.msg, { position: 'top-right' });
    }
  }

  getBookings() {
    const bookings = this.bookingsService.getBookings()
    this.userBookings = bookings.filter((obj: any) => obj.customerId == this.usersService.getUserId())
  }

  logout() {
    this.clientauthService.logout();
  }

  date(param: any) {
    return moment(param).format('MMMM Do YYYY, h:mm:ss a');
  }
}
