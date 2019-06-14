import { Component, OnInit } from '@angular/core';
import { News } from '../news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: News[] = new Array<News>()
  newsTop1: News

  constructor() { }

  ngOnInit() {
    for(var i = 0; i < 7; i++){
      this.news.push({
        id: 1,
        title: "HELLO " + i,
        short_description: "Hello Title " + 1,
        description: "AAA " + i,
        tags: "hồng âm, phụ khoa, mỹ phẩm, mocha",
        created: new Date().toLocaleDateString(),
        views: Math.floor(Math.random() * 100),
        comments_count: Math.floor(Math.random() * 10),
        image: "img" + (i+1) + ".jpg",
        created_by: "admin"
      })
    } 
    this.newsTop1 = this.get1News()
  }

  get1News(){
    return this.news.length > 0 ? this.news[0] : null
  }

}
