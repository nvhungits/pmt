import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ApiService } from '../api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  products:  Product[];
  cartItems: Product[] = []
  cartItemsInfo = {
    count: 0,
    total_price: 0,
    unit: "VND"
  }
  isLoading: boolean

  constructor(private apiService: ApiService, private DomSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getCartItems();
  }

  getCartItems(){
    this.isLoading = true;
    var _cartItems = localStorage.getItem('carts');
    var productIds = _cartItems != undefined ? JSON.parse(_cartItems) : [];
    this.apiService.getProduct().subscribe((products: Product[])=>{
      this.products = products;
      for(var i = 0; i < productIds.length; i++){
        for(var j = 0; j < products.length; j++){
          if(products[j].id == productIds[i].id){
            var item = products[j];
            item.quantity = productIds[i].quantity
            this.cartItems.push(item);
            break;
          }
        }
      }
      this.summaryCartItems(this.cartItems);
      this.isLoading = false;
    });
  }

  removeCartItems(item){
    var index = this.cartItems.indexOf(item);
    this.cartItems.splice(index, 1);   
    localStorage.setItem('carts', JSON.stringify(this.cartItems));
    this.summaryCartItems(this.cartItems);
  }

  summaryCartItems(products){
    this.cartItemsInfo.count = 0;
    this.cartItemsInfo.total_price = 0;

    for(var i = 0; i < products.length; i++){
        var item = products[i];
        this.cartItemsInfo.count++;
        this.cartItemsInfo.total_price += (parseInt(item.price)*item.quantity);
    }
  }

}
