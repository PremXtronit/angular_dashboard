import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: Http) {}

  login(f) {
    console.log('Email is ' + f.value.username);
    console.log('Email is ' + f.value.password);
    console.log('Email is ' + f.value);
    this.http.post('http://localhost:8080/login', JSON.stringify(f.value))
    .subscribe(x => {
           console.log(x);
    });
  }
}
