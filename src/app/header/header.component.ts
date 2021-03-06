import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Product } from '../product';
import { Company } from '../company';
import { Subcategory } from '../subcategory';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService, 
    private router: Router, 
    private DomSanitizer: DomSanitizer) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }

  products:  Product[];
  subcategories:  Subcategory[];
  company:  Company;
  cartItems: Product[] = []
  cartItemsInfo = {
    count: 0,
    total_price: 0,
    unit: "VND"
  }

  ngOnInit() {
    this.getProducts();
    this.getCompany();
    this.getSubCategory();
  }

  getSubCategory(){
    this.apiService.getSubcategory().subscribe((subcategories: Subcategory[])=>{
      this.subcategories = subcategories;
    });
  }

  getCompany(){
    this.apiService.getCompanyInfo().subscribe((companies: Company[])=>{
      if(companies.length > 0)
      {
        for(let i = 0; i < companies.length; i++){
          if(companies[i].id == 1){
            this.company = companies[0];
            break
          }
        }
      }
    });
  }

  getProducts(){
    this.apiService.getProduct().subscribe((products: Product[])=>{
      this.products = products;

      //Get Cart Items
      var _cartItems = localStorage.getItem('carts');
      var productIds = _cartItems != undefined ? JSON.parse(_cartItems) : [];
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

  getSubcategoryByCategoryId(categoryId){
    let subcategories = [];
    for(let i = 0; i < this.subcategories.length; i++){
        if(this.subcategories[i].category_id == categoryId){
          subcategories.push(this.subcategories[i]);
        }
    }
    return subcategories;
  }

  getProductByCategoryId(categoryId){
    let products = [];
    for(let i = 0; i < this.products.length; i++){
        if(this.products[i].category_id == categoryId){
          products.push(this.products[i]);
        }
    }
    return products;
  }

  getProductBySubCategoryIdAndCategoryId(subCategoryId, categoryId){
    let products = [];
    let count = 0;
    for(let i = 0; i < this.products.length; i++){
        if(this.products[i].category_id == categoryId && this.products[i].subcategory_id == subCategoryId){
          products.push(this.products[i]);
        }
    }
    return products;
  }

}
