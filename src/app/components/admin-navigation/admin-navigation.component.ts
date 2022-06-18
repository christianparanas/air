import { Component, OnInit } from '@angular/core';
import { AdminauthService } from 'src/app/shared/services/adminauth.service';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.css']
})
export class AdminNavigationComponent implements OnInit {

  constructor(private adminauthService: AdminauthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.adminauthService.logout()
  }

}
