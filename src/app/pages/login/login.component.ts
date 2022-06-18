import { Component, OnInit } from '@angular/core';
import { ClientauthService } from 'src/app/shared/services/clientauth.service';
import { HotToastService } from '@ngneat/hot-toast';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private clientauthService: ClientauthService,
    private toast: HotToastService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.isAuth()
  }

  isAuth() {
    if (this.clientauthService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }

  onSubmit() {
    if (this.loginForm.status == 'INVALID') {
      this.toast.show('Data entered invalid.', {
        theme: 'snackbar',
        position: 'bottom-center',
      });
      return;
    }

    const res = this.clientauthService.login(this.loginForm.value);

    if (res?.status == 401) {
      this.toast.error(res.msg, { position: 'top-right' });
    }
  }
}
