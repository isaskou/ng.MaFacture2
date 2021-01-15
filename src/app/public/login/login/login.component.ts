import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from 'src/app/services/userLogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMsg: string;

  // public get showIsConnected(): boolean {
  //   return this.userService.userIsConnected();
  // }

  constructor(
    private router: Router,
    private builder: FormBuilder,
    private user: UserLoginService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.builder.group({
      emailLogin: ['', [Validators.required]],
      pwdLogin: ['', [Validators.required]]
    });
  }

  login(): void {
    if (this.user.currentUser !== null) {
      if (this.loginForm.get('email').value === this.user.currentUser.email
        && this.loginForm.get('pwd').value === this.user.currentUser.password) {
        const user = this.user.currentUser;
        user.isConnected = true;
        sessionStorage.setItem('user', JSON.stringify(user));
        this.errorMsg = '';
        // tslint:disable-next-line: no-unused-expression
        this.router.navigate(['dashboard']).then;
      }
      else {
        this.errorMsg = 'l\'adresse mail et le mot de passe ne correspondent pas !';
      }
    }
  }

  // logout(): void {
  //   const user = this.userService.currentUser;
  //   user.isConnected = false;
  //   sessionStorage.setItem('user', JSON.stringify(user));
  // }

}
