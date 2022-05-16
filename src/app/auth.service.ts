import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor() { }

  login(member: any) {
    const user = this.getUser(member);
    if (user) {
      localStorage.setItem('token', user.userName);
    }
    return user;
  }

  logout() {
    localStorage.removeItem('token');
  }

  // Get single user
  getUser(user: any) {
        let UsersArray = [];
        if (localStorage.getItem('Users')) {
          UsersArray = JSON.parse(localStorage.getItem('Users') as string);
        }
        return UsersArray.find((p: { userName: any; userPassword: any; }) => p.userName === user.userName && p.userPassword === user.userPassword );
  }

}
