import { Injectable } from '@angular/core';
import { User } from './data';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor() {}

  getUserData(): Promise<User[]> {
    return fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => data as User[]);
  }

}
