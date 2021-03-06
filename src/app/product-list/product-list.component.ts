import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Product } from '../product';
import { Company } from '../company';
import { Subcategory } from '../subcategory';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:  Product[];
  subcategories:  Subcategory[];
  company:  Company;
  productDetail: Product;
  category_id: number;
  subcategory_id: number

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private apiService: ApiService,
    private DomSanitizer: DomSanitizer,
    private titleService: Title
  ) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
        this.category_id = parseInt(params.get("category_id"));
        this.subcategory_id = parseInt(params.get("subcategory_id"));
    })
    this.getProducts();
    this.getSubCategory();
  }

  getProducts(){
    this.apiService.getProduct().subscribe((products: Product[])=>{
      this.products = products;
      if(this.category_id && this.subcategory_id){
        this.products = this.getProductBySubCategoryIdAndCategoryId(this.subcategory_id, this.category_id);
      }
      else if(this.category_id){
        this.products = this.getProductByCategoryId(this.category_id);
      }
    });
  }

  getSubCategory(){
    this.apiService.getSubcategory().subscribe((subcategories: Subcategory[])=>{
      this.subcategories = subcategories;
    });
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
    for(let i = 0; i < this.products.length; i++){
        if(this.products[i].category_id == categoryId && this.products[i].subcategory_id == subCategoryId){
          products.push(this.products[i]);
        }
    }
    return products;
  }

  viewProductDetail(item){
    this.productDetail = item;
  }

  addToCarts(id){
    var _cartItems = localStorage.getItem('carts');
    var cartItems = _cartItems != undefined ? JSON.parse(_cartItems) : [];

    var duplicate = false;
    for(var i = 0; i < cartItems.length; i++){
      if(cartItems[i].id == id){
        cartItems[i].quantity++;
        duplicate = true;
        break;
      }
    }
    if(!duplicate){
      cartItems.push({
        "id": id,
        "quantity": 1
      });
    }
    localStorage.setItem('carts', JSON.stringify(cartItems));
  }

  changeTitle(item){
    this.titleService.setTitle("Sản phẩm - " + item.name);
  }

}
