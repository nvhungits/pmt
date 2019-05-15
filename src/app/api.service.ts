import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from  './product';
import { Company } from  './company';
import { Subcategory } from  './subcategory';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = "http://phucminhtam.net";

  constructor(private httpClient: HttpClient) { }

  getProduct(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.PHP_API_SERVER}/product.php`);
  }

  getCompanyInfo(): Observable<Company[]>{
    return this.httpClient.get<Company[]>(`${this.PHP_API_SERVER}/company.php`);
  }
  
  getSubcategory(): Observable<Subcategory[]>{
    return this.httpClient.get<Subcategory[]>(`${this.PHP_API_SERVER}/subcategory.php`);
  }
}
