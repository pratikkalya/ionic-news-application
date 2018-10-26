import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
private API_URL = 'https://newsapi.org/v2/everything';
private API_KEY = '6f0442792c1d4a2eab7d0b190b5adb40';
  constructor(private http: HttpClient) { }
  getTopics(url){
  return this.http.get(`${this.API_URL}?q=${url}&apiKey=${this.API_KEY}`);
  }
}
