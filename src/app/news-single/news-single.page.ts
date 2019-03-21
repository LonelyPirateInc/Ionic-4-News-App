import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.page.html',
  styleUrls: ['./news-single.page.scss'],
})
export class NewsSinglePage implements OnInit {
  article: any;
  constructor(private newService: NewsService) { }

  ngOnInit() {
    console.log(this.newService.currentArticle);
    this.article = this.newService.currentArticle;
  }


}
