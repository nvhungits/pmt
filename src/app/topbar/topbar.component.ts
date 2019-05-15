import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Company } from '../company';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  company:  Company;

  ngOnInit() {
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
      console.log(this.company);
    })
  }

}
