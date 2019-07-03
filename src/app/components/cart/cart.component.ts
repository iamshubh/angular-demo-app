import { Component, OnInit } from '@angular/core';
import { CartService } from '@/services/cart.service';
import { AuthService } from '@/services/auth.service';
import { OrderHistoryService } from '@/services/order-history.service';
import { Item } from '@/model/item';
import { Order } from '@/model/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  total = 0;
  cartItems: Item[] = []
  currUserId: string;
  baseImgUrl = "../../../assets/";

  constructor(private cartService: CartService, private authService: AuthService,
    private orderHistoryService: OrderHistoryService, private router: Router) { }

  ngOnInit() {
    this.currUserId = this.authService.getLoggedUserId();
    this.cartItems = this.cartService.getItems(this.currUserId);

    this.total = 0;
    this.cartItems.forEach(item => {
      this.total += item.price;
    })
  }

  ngOnChanges() {
    if (this.cartItems) {
      this.total = 0;
      this.cartItems.forEach(item => {
        this.total += item.price;
      })
    }
  }

  onCheckOut() {
    let orders: Order[] = this.cartItems.map(item => ({
      itemId: item.id,
      productName: item.name,
      price: item.price,
      image: item.image
    }))

    this.orderHistoryService.saveOrders(orders);
    this.cartService.emptyCart(this.currUserId);
    this.total = 0;

    this.router.navigate(['/home'])
  }

  goToShop() {
    this.router.navigate(['/home'])
  }
}
