import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = null;

  constructor(private router: Router, private authService: AuthService) {
    this.form = new FormGroup({
      username: new FormControl('', Validators.minLength(3)),
      password: new FormControl('', Validators.minLength(5)),
    });
  }

  ngOnInit(): void {
    if (this.authService.isAuthorized()) {
      this.router.navigate(['/home']);
    }
  }

  public onSubmit(event: Event): void {
    event.preventDefault();

    const { password, username } = this.form.value;
    const isAuthorized: boolean = this.authService.authorize(username, password);

    if (isAuthorized) {
      this.router.navigate(['/home']);
    }
  }

}
