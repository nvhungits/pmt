import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  company: Company

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getCompany();
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

}
