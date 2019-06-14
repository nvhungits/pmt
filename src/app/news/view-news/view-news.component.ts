import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/news';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.css']
})
export class ViewNewsComponent implements OnInit {

  news: News

  constructor() { }

  ngOnInit() {
    this.news = {
      id: 1,
      title: "HELLO " + 1,
      short_description: "Hello Title " + 1,
      description: "NHỮNG GIẢI THƯỞNG ĐẠT ĐƯỢC \
      1 – Vì Sự Nghiệp Sắc Đẹp Châu Á Thái Bình Dương 2016 \
      2 – Thương Hiệu Sao Vàng 2016 \
      3 – Sao Vàng Doanh Nhân Đất Việt 2016 \
      4 – Sản Phẩm Chất Lượng – Dịch Vụ Tiêu Dùng – Thương Hiệu Uy Tín 2016 \
      5 – Top 10 thương hiệu dẫn đầu Việt Nam 2017",
      tags: "hồng âm, phụ khoa, mỹ phẩm, mocha",
      created: new Date().toLocaleString(),
      views: Math.floor(Math.random() * 100),
      comments_count: Math.floor(Math.random() * 10),
      image: "img" + (1) + ".jpg",
      created_by: "admin"
    }
  }

}
