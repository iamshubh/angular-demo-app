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
  private users: User[] = []
  private isLoggedIn: boolean = false;

  constructor() {
    const usrs = localStorage.getItem(AuthService.keyUsers);
    if (!usrs) {
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
    return this.getLoggedUsername() != null || this.isLoggedIn
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
        this.isLoggedIn = true;
        this.sendUsername(user.firstName);
      }
    }
    return usr == undefined
  }

  logIn(user: any): boolean {
    const usr = this.users.find(usr => usr.email == user && usr.password == user.password)
    if (usr) {
      if (user.remember) {
        localStorage.setItem(AuthService.keyLoggedIn, usr.firstName)
      }
      this.isLoggedIn = true;
      this.sendUsername(usr.firstName)
    }
    return usr != undefined
  }

  logOut() {
    this.isLoggedIn = false;
    localStorage.removeItem(AuthService.keyLoggedIn)
    this.clearUsername();
  }

  getLoggedUsername(): string | null {
    return localStorage.getItem(AuthService.keyLoggedIn)
  }

  getUsername(): Observable<string> {
    return this.username.asObservable();
  }

}
