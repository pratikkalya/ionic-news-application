import { Component } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {
  topics :any ;
  constructor(private searchService:SearchService){ } 
  
  search = {}
  searchByKeyword() {
     this.searchService.getTopics(this.search["query"]).subscribe(topics =>{
    console.log('https://newsapi.org/v2/everything' + '?q=' + this.search["query"] + '&apiKey=' + '6f0442792c1d4a2eab7d0b190b5adb40' );
    this.topics = topics;
  });
}
}
