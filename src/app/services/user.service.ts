import { Injectable } from '@angular/core';
import { IUser } from '../models/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // tslint:disable-next-line: variable-name
  private _currentUser: IUser;

  constructor(
  ) { }

  get currentUser(): IUser {
    if (localStorage.getItem('user')) {
      this._currentUser = JSON.parse(localStorage.getItem('user'));
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
