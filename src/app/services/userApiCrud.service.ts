import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '../models/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserApiCrudService {

  private url = 'https://localhost:44372/api/user';

  // tslint:disable-next-line: variable-name
  private _currentUser: IUser;

constructor(
  private _client: HttpClient,
  private _router: Router

) { }

getall(): Observable<IUser[]> {
    return this._client.get<IUser[]>(this.url);
  }

  getById(id: number): Observable<IUser> {
    return this._client.get<IUser>(this.url + id.toString());
  }


  CreateContact(u: IUser) {
    this._client.post(this.url, u).subscribe({
      next: () => this._router.navigate(['/home']),
      error: (error) => console.log(error)
    });
  }

  delete(id: number) {
    this._client.delete(this.url + id).subscribe({
      next: () => alert('Cet utilisateur a été supprimé'),
      error: (error) => alert(error)
    });
  }

  // tslint:disable-next-line: typedef
  update(u: IUser) {
    this._client.put(this.url, u).subscribe({
      next: () => this._router.navigate(['/home']),
      error: (error) => alert(error)
    });
  }
}
