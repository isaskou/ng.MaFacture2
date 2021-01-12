import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  login(): void {
    this._router.navigate(['dashboard']);
  }

}
