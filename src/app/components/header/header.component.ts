import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterComponent } from '../register/register.component';
import { CartService } from '@/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  username: string = undefined;
  authSubscription: Subscription;
  cartSubscription: Subscription;
  itemCount: string = undefined;

  constructor(public dialog: MatDialog,
    private authService: AuthService,
    private cartService: CartService) { }

  ngOnInit() {
    this.username = this.authService.getLoggedUsername();
    this.authSubscription = this.authService.getUsername()
      .subscribe(name => { console.log(name); this.username = name; });

    this.cartSubscription = this.cartService.getCartUpdation().subscribe(items => {
      console.log("cart items:\t" + items)
      if (items) {
        if (items.length > 0) {
          this.itemCount = items.length.toString()
        } else {
          this.itemCount = undefined;
        }
      }
    })
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
    this.cartSubscription.unsubscribe();
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
