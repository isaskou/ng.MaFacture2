import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscribable } from 'rxjs';
import { IUser } from '../models/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  private url = 'https://localhost:44372/api/user';

  // tslint:disable-next-line: variable-name
  private _currentUser: IUser;

  constructor(
  ) { }


  get currentUser(): IUser {
    if (sessionStorage.getItem('user')) {
      this._currentUser = JSON.parse(sessionStorage.getItem('user'));
      return this._currentUser;
    }
  }

  userIsConnected(): boolean {
    if (this.currentUser !== undefined && this.currentUser !== null) {
      return this._currentUser.isConnected;
    }
    return false;
  }


}
