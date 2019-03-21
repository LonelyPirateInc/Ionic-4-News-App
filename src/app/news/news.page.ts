import { Router } from '@angular/router';
import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  articles: any[];

  constructor(private newsService: NewsService,
              private router: Router ) { }

  ngOnInit() {
    this.newsService.getData('everything?q=bitcoin&from=2019-02-21&sortBy=publishedAt').subscribe(data => this.articles = data['articles']);
  }

  onGoToNewsSinglePage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

}
