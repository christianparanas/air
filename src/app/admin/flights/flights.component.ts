import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FlightsService } from 'src/app/shared/services/flights.service';
import * as moment from 'moment';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'],
})
export class FlightsComponent implements OnInit {
  flights: any = null;
  createFlightModal: boolean = false;
  flightForm: FormGroup;

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
    private flightsService: FlightsService,
    private toast: HotToastService
  ) {
    this.flightForm = new FormGroup({
      from: new FormControl('', Validators.required),
      to: new FormControl('', Validators.required),
      fare: new FormControl(0, Validators.required),
      date: new FormControl('', Validators.required),
      coupon: new FormControl(''),
      type: new FormControl('deal'),
      status: new FormControl('confirmed'),
    });
  }

  ngOnInit(): void {
    this.getFlights();
  }

  openCloseModal() {
    this.createFlightModal = !this.createFlightModal;
  }

  getFlights() {
    this.flights = this.flightsService.getFlights();
  }

  onSubmit() {
    if (this.flightForm.status == 'INVALID') {
      this.toast.show('Data entered invalid.', {
        theme: 'snackbar',
        position: 'bottom-center',
      });
      return;
    }

    const res = this.flightsService.storeFlight(this.flightForm.value);

    if (res.status == 201) {
      this.toast.success(res.msg, { position: 'top-right' });
      this.getFlights();
      this.openCloseModal();
    }
  }

  date(param: any) {
    return moment(param).format('MMMM Do YYYY, h:mm:ss a');
  }
}
