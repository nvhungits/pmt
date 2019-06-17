import { Component, OnInit } from '@angular/core';
import { News } from '../news';
import { ApiService } from '../api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: News[] = new Array<News>()
  newsTop1: News

  constructor(private apiService: ApiService, private DomSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getNews()
  }

  getNews(){
    this.apiService.getNews().subscribe((news: News[])=>{
      this.news = news;
      this.newsTop1 = this.get1News()
    });
  }

  get1News(){
    return this.news.length > 0 ? this.news[0] : null
  }

}
