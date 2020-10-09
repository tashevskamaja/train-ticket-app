import { Component, OnInit } from '@angular/core';
import { SearchCardInterface } from './search-card-interface.search-card.interface.ts'
import {SearchService} from 'src/app/components/search-card/search-card.service';


@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})
export class SearchCardComponent implements OnInit {
  model: SearchCardInterface;
 
  constructor(private service: SearchService) { }
 
  ngOnInit() {
    this.model = {tripType: '0', origin: 'Bangalore', destination: 'Hyderabad', departureDate: new Date(),
    arrivalDate: new Date()};
  }
 
  onSubmit() {
    this.service.getSearchResults(this.model);
  }
}
