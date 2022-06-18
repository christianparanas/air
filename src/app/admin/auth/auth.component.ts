import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminauthService } from 'src/app/shared/services/adminauth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;

  constructor(
    private toast: HotToastService,
    private router: Router,
    private adminauthService: AdminauthService
  ) {
    this.authForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.isAuth();
  }

  isAuth() {
    if (this.adminauthService.isLoggedIn()) {
      this.router.navigate(['/admin']);
    }
  }

  onSubmit() {
    if (this.authForm.status == 'INVALID') {
      this.toast.show('Data entered invalid.', {
        theme: 'snackbar',
        position: 'bottom-center',
      });
      return;
    }

    this.adminauthService.login(this.authForm.value);
  }
}
