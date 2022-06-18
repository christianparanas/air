import { Component, OnInit } from '@angular/core';
import { ClientauthService } from 'src/app/shared/services/clientauth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private clientauthService: ClientauthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.clientauthService.logout()
  }

}
