import { Component, OnInit} from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  data: any;
  constructor(private newsService:NewsService, private router:Router) { }

  ngOnInit() {
  this.newsService.getData('top-headlines?country=in&category=technology').subscribe(data =>{
    console.log(data);
    this.data = data ;
  });
  }

  onGoToNewsSinglePage(articles){
    this.newsService.currentArticles = articles;
    this.router.navigate(['/news-single']);
  }

  doRefresh(event) {
    this.newsService.getData('top-headlines?country=in&category=technology').subscribe(data =>{
      console.log(data);
      this.data = data ;
      event.target.complete();
      
    });
  }
}
