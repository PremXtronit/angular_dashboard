import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;
  constructor(private auth: AuthService) {}

  ngOnInit() {
  }

  submit(f) {
    this.auth.login(f);
  }
}
