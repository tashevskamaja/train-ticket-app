import { Component } from '@angular/core';
import {SearchService} from 'src/app/components/search-card/search-card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchService]
})
export class AppComponent {
  title = 'train-ticket-app';
}
