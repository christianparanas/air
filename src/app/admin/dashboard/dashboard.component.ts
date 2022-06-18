import { Component, OnInit } from '@angular/core';
import { AdminauthService } from 'src/app/shared/services/adminauth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private adminauthService: AdminauthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.adminauthService.logout()
  }
}
