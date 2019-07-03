import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { defUsers } from '@/mocked-backened/MockedBackend'
import { User } from '@/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private static readonly keyUsers = 'users';
  private static readonly keyLoggedIn = 'loggedIn';
  private username: Subject<string> = new Subject<string>();
  private users: User[] = JSON.parse(localStorage.getItem('users')) || [];
  private loggedInUser: User = undefined;

  constructor() {
    const usrs = localStorage.getItem(AuthService.keyUsers);
    if (!usrs) {
      // TODO : for testing
      console.log("added 2 default users")
      localStorage.setItem(AuthService.keyUsers, JSON.stringify(defUsers));
      this.users = defUsers;
    }
  }

  sendUsername(name: string) {
    this.username.next(name);
  }

  clearUsername() {
    this.username.next(undefined);
  }

  isUserLoggedIn(): boolean {
    return this.getLoggedUsername() != null || this.loggedInUser !=  undefined
  }

  deleteUserCredentials(user: User) {
    if (this.users) {
      this.users = this.users.filter(u => u.email != user.email)
      localStorage.setItem(AuthService.keyUsers, JSON.stringify(this.users));
    }
  }

  signUp(user: User, loginNow = false): boolean {
    let usr = this.users.find(u => u.email == user.email)
    if (!usr) {
      user.id = this.users.length;
      this.users.push(user);
      localStorage.setItem(AuthService.keyUsers, JSON.stringify(this.users))
      if (loginNow) {
        localStorage.setItem(AuthService.keyLoggedIn, usr.firstName)
        this.loggedInUser = usr;
        this.sendUsername(usr.firstName);
      }
    }
    return usr == undefined
  }

  logIn(user: any): boolean {
    const usr = this.users.find(usr => usr.email == user.email && usr.password == user.password)
    if (usr) {
      localStorage.setItem(AuthService.keyLoggedIn, usr.firstName)
      this.loggedInUser = usr;
      this.sendUsername(usr.firstName)
    }
    return usr != undefined
  }

  logOut() {
    this.loggedInUser = undefined;
    localStorage.removeItem(AuthService.keyLoggedIn)
    this.clearUsername();
  }

  getLoggedUsername(): string | null {
    return localStorage.getItem(AuthService.keyLoggedIn)
  }

  getLoggedUserId(): string| undefined {
    return this.loggedInUser ? this.loggedInUser.email : undefined
  }

  getUsername(): Observable<string> {
    return this.username.asObservable();
  }

}
