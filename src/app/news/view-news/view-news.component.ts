import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/news';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.css']
})
export class ViewNewsComponent implements OnInit {

  news: News

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router, private DomSanitizer: DomSanitizer) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }

  id: number

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.id = parseInt(params.get("id"));
    })

    this.getNews()
  }

  getNews(){
    this.apiService.getNews().subscribe((news: News[])=>{
      this.news = this.getNewsById(news, this.id);
    });
  }

  getNewsById(items, id){
    for(var i = 0; i < items.length; i++){
      if(items[i].id == id)
        return items[i]
    }
    return []
  }

}
