import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMsg: string;

  public get showIsConnected(): boolean {
    return this.userService.userIsConnected();
  }

  constructor(
    private router: Router,
    private builder: FormBuilder,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.builder.group({
      emailLogin: ['', [Validators.required]],
      pwdLogin: ['', [Validators.required]]
    });
  }

  login(): void {
    if (this.userService.currentUser !== null) {
      if (this.loginForm.get('email').value === this.userService.currentUser.email
        && this.loginForm.get('pwd').value === this.userService.currentUser.password) {
        const user = this.userService.currentUser;
        user.isConnected = true;
        localStorage.setItem('user', JSON.stringify(user));
        this.errorMsg = '';
        // tslint:disable-next-line: no-unused-expression
        this.router.navigate(['dashboard']).then;
      }
      else {
        this.errorMsg = 'l\'adresse mail et le mot de passe ne correspondent pas !';
      }
    }
  }

  logout(): void {
    const user = this.userService.currentUser;
    user.isConnected = false;
    localStorage.setItem('user', JSON.stringify(user));
  }

}
