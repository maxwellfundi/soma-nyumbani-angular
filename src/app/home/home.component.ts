import { Component, OnInit } from '@angular/core';
import { WebAnalyticsService } from '../services/web-analytics/web-analytics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(protected webAnalyticsService: WebAnalyticsService) {
    webAnalyticsService.emitAnlayticsEvent("HOME_PAGE_VISIT");
  }

  ngOnInit(): void {
    this.webAnalyticsService.emitAnlayticsEvent("HOME_PAGE_VISIT");
  }

}
