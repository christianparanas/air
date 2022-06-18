import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  bookings: any = []

  constructor() { }

  storeBooking(data: any) {
    const booking = {
      bookingnumber: Math.random().toString(36).slice(2, 30),
      flightnumber: Math.random().toString(36).slice(2, 30),
      ...data
    }

    if (localStorage.getItem('bookings') === null) {
      this.bookings.push(booking);

      localStorage.setItem('bookings', JSON.stringify(this.bookings));
    } else {
      const res: any = localStorage.getItem('bookings');
      let bookings = JSON.parse(res);
      localStorage.removeItem('bookings');

      bookings.push(booking);
      localStorage.setItem('bookings', JSON.stringify(bookings));
    }

    return {
      status: 201,
      msg: "Transaction Added!"
    }
  }

  getBookings() {
    if (localStorage.getItem('bookings') === null) {
      return false;
    }

    const res: any = localStorage.getItem('bookings');
    let bookings = JSON.parse(res);

    return bookings;
  }
}
