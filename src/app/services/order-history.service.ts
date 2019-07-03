import { Injectable } from '@angular/core';
import { Item } from '@/model/item';
import { Order } from '@/model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {

  private history: any[] = [];
  constructor() {
  }

  saveOrders(items: Order[]) {
      this.history.push({
        "date": new Date().toJSON(),
        "items": items
      });
  }

  getUserOrders() {
    return this.history;
  }



//   saveOrders(userId: string, items: Order[]) {
//     var history = JSON.parse(localStorage.getItem("orders")) || []
//     if (history[userId]) {
//       let userOrders = history[userId] || [];
//       userOrders.push({
//         "date": new Date().toJSON(),
//         "items": items
//       });
//     } else {
//       history[userId] = [{
//         "date": new Date().toJSON(),
//         "items": items
//       }];
//   }
//   localStorage.setItem("orders", JSON.stringify(history))
// }

//   getUserOrders(userId: string): any[] {
//     let history = JSON.parse(localStorage.getItem("orders")) || [];
//     return history[userId] || [];
//   }
}

