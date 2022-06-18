import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  flights: any = [];

  constructor() {}

  storeFlight(data: any) {
    const flightData = {
      flightnumber: Math.random().toString(36).slice(2, 30),
      ...data
    }

    if (localStorage.getItem('flights') === null) {
      this.flights.push(flightData);

      localStorage.setItem('flights', JSON.stringify(this.flights));
    } else {
      const res: any = localStorage.getItem('flights');
      let flights = JSON.parse(res);
      localStorage.removeItem('flights');

      flights.push(flightData);
      localStorage.setItem('flights', JSON.stringify(flights));
    }

    return {
      status: 201,
      msg: "Flight Added!"
    }
  }

  getFlights() {
    if (localStorage.getItem('flights') === null) {
      return false;
    }

    const res: any = localStorage.getItem('flights');
    let flights = JSON.parse(res);

    return flights;
  }
}
