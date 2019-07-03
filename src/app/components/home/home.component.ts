import { Component, OnInit, Output, OnChanges, OnDestroy } from '@angular/core';
import { allItems } from '@/mocked-backened/MockedBackend';
import { CartService } from '@/services/cart.service';
import { AuthService } from '@/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  baseImgUrl = "../../../assets/"
  items: any[] = allItems;
  cartSubscription: Subscription;

  constructor(private cartService: CartService, private authService: AuthService) { }

  ngOnInit() {
    this.items = allItems;
    this.items.forEach(item => item.added = false);

    this.cartSubscription = this.cartService.getCartUpdation().subscribe(items => {
      if (items && items.length == 0) {
        this.items = allItems;
        this.items.forEach(item => item.added = false)
      }
    })
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }

  addToCart(item: any) {
    item.added = true;
    let userId = this.authService.getLoggedUserId() || 'guest';
    this.cartService.storeItem(userId, item)
    console.log("item added\t" + item);
  }

  removeFromCart(item: any) {
    item.added = false;
    let userId = this.authService.getLoggedUserId() || 'guest';
    this.cartService.removeItem(userId, item)
  }
}