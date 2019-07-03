import { Injectable } from '@angular/core';
import { Item } from '@/model/item';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartUpdate: Subject<Item[]> = new Subject()
  private static readonly keyCarts = 'carts';
  cart: any = []

  constructor() { }

  storeItem(userId: string, item: Item) {
    // var cart = JSON.parse(localStorage.getItem(CartService.keyCarts)) || [];
    // console.log("cart:\t" + cart);
    // if (cart && cart[userId]) {
    //   cart[userId].push(item)
    // } else {
    //   cart[userId] = [];
    //   cart[userId].push(item)
    // }
    // console.log("after addition cart:\t" +  JSON.stringify(cart));
    // let a = JSON.stringify(cart);
    // localStorage.setItem(CartService.keyCarts, JSON.stringify(cart));
    // this.cartUpdate.next(cart[userId]);

    this.cart.push(item);
    console.log("after addition cart:\t" +  JSON.stringify(this.cart));
    let a = JSON.stringify(this.cart);
    localStorage.setItem(CartService.keyCarts, JSON.stringify(this.cart));
    this.cartUpdate.next(this.cart);
  }

  removeItem(userId: string, item: Item) {
    // var cart = JSON.parse(localStorage.getItem("cart")) || [];
    // console.log("cart:\t" + cart);
    // if (cart && cart[userId]) {
    //   cart[userId] = cart[userId].filter(i => i.id != item.id)
    // }
    // console.log("after removing item\t" + JSON.stringify(cart));
    // localStorage.setItem("cart", JSON.stringify(cart))   
    // this.cartUpdate.next(cart[userId]);

    console.log("cart:\t" + this.cart);
    this.cart = this.cart.filter(i => i.id != item.id)
    console.log("after removing item\t" + JSON.stringify(this.cart));
    this.cartUpdate.next(this.cart);
  }

  emptyCart(userId: string) {
    // var cart = JSON.parse(localStorage.getItem("cart")) || [];
    // if (cart && cart[userId]) {
    //   delete cart[userId]
    // }
    // console.log("empty-cart"+cart)
    // localStorage.setItem("cart", JSON.stringify(cart))
    // this.cartUpdate.next([]);

    this.cart=[]
    console.log("empty-cart"+this.cart)
    localStorage.setItem("cart", JSON.stringify(this.cart))
    this.cartUpdate.next([]);

  }

  getItems(userId: string): Item[] {
    //let cart = JSON.parse(localStorage.getItem("cart")) || [];
    //return this.cart[userId] || []
    return this.cart;
  }

  getCartUpdation() {
    return this.cartUpdate.asObservable();
  }
}
