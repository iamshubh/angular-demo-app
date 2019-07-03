import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderHistoryService } from '@/services/order-history.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  baseImgUrl = "../../../assets/";

  allOrders: any[] = [];

  orderedItems = [
    {
      productName: "some name",
      date: '1975-08-19T23:15:30.000Z',
      price: 123.2,
      image: 'images/1_phone.jpg'
    },
    {
      productName: "some name2",
      date: '1975-08-19T23:15:30.000Z',
      image: 'images/1_phone.jpg',
      price: 123.2
    },
    {
      productName: "some name3",
      date: '1975-08-19T23:15:30.000Z',
      price: 123.2,
      image: 'images/1_phone.jpg'
    }
  ]
  constructor(private orderHistoryService: OrderHistoryService, private router: Router) { }

  ngOnInit() {
    this.allOrders = this.orderHistoryService.getUserOrders();
  }

  goToAllItems() {
    // redirect to all items screen
    this.router.navigate(['/home'])
  }

}
