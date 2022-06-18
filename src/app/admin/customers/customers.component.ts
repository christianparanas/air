import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  users: any = null

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getCustomers()
  }

  getCustomers() {
    this.users = this.usersService.getUsers()

    console.log(this.users)
  }

}
