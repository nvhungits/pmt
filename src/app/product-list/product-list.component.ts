import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Product } from '../product';
import { Company } from '../company';
import { Subcategory } from '../subcategory';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:  Product[];
  subcategories:  Subcategory[];
  company:  Company;

  constructor(private apiService: ApiService, private DomSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.apiService.getProduct().subscribe((products: Product[])=>{
      this.products = products;
    });
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

}
