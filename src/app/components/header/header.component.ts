import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  username: string = undefined;
  subscription: Subscription;

  constructor(public dialog: MatDialog,
    private authService: AuthService) { }

  ngOnInit() {
    this.username = this.authService.getLoggedUsername();
    this.subscription = this.authService.getUsername()
      .subscribe(name => { console.log(name); this.username = name; });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openLoginSignUpForm() {
    const loginRef = this.dialog.open(LoginComponent, { width: '500px', height: '450px' });

    loginRef.afterClosed()
      .subscribe(result => {
        if (result.register) {
          this.openRegisterForm()
        }
        console.log(result);
      });
  }

  openRegisterForm() {
    const regRef = this.dialog.open(RegisterComponent, { width: '500px', height: '450px' });
    regRef.afterClosed().subscribe(result => console.log(result))
  }

  logOut() {
    this.username = undefined;
    this.authService.logOut();
  }
}
