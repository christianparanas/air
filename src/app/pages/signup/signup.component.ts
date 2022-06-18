import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { ClientauthService } from 'src/app/shared/services/clientauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private clientauthService: ClientauthService,
    private toast: HotToastService,
    private router: Router
  ) {
    this.signupForm = new FormGroup({
      name: new FormControl('', Validators.required),
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
    if (this.signupForm.status == 'INVALID') {
      this.toast.show('Data entered invalid.', {
        theme: 'snackbar',
        position: 'bottom-center',
      });
      return;
    }

    const res = this.clientauthService.signup(this.signupForm.value);

    if(res?.status == 401) {
      this.toast.error(res.msg, {position: "top-right"})
      this.signupForm.patchValue({ email: "" })
    }

    if(res?.status == 201) {
      this.signupForm.reset()
      this.toast.success(res.msg, {position: "top-right"})
    }
  }
}
