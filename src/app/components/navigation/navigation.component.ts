import { Component, OnInit } from '@angular/core';
import { ClientauthService } from 'src/app/shared/services/clientauth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private clientauthService: ClientauthService) { }

  ngOnInit(): void {
  }

  isLogin(): boolean {
    return this.clientauthService.isLoggedIn()
  }

}
