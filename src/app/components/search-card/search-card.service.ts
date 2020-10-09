import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
 
import { SearchCardInterface } from 'src/app/components/search-card/search-card-interface.search-card.interface.ts'

@Injectable()
export class SearchService {
 

    
 private resultsSource = new Subject<any>();
 

 
 results$ = this.resultsSource.asObservable();
constructor(private http: HttpClient) { }
getSearchResults(model: SearchCardInterface) {
 const baseUrl = 'https://www.goibibo.com/train/';
 const endpoint = 'api/train/search/';
 const params = {
 app_id: 'APPID',
 key: 'AIzaSyC8HWgHXN0RIoP8pdAU4J5baTSS9jsrzV0',
 format: 'json',
 source: model.origin,
 destination: model.destination,
 dateofdeparture: this.formatDate(model.departureDate),
 dateofarrival: this.formatDate(model.arrivalDate)
 }
 const url = `${baseUrl}${endpoint}?${this.objToUrlParams(params)}`;
 this.http.get(url).subscribe(data => {
 this.resultsSource.next(data['data']);
 });
 }

 formatDate(date: Date): string {
 const mm = date.getMonth() + 1; 
 const dd = date.getDate();
 return `${date.getFullYear()}${ mm > 9 ? mm : '0' + mm}${dd > 9 ? dd : '0' + dd}`;
 }
 

 objToUrlParams(params): string {
 let toret = '';
 for (const key in params) {
 if (params.hasOwnProperty(key)) {
 toret += `${key}=${encodeURIComponent(params[key])}&`;
 }
 }
 return toret;
 }
 
};
