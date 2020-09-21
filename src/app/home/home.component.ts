import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session/session.service';
import { WebAnalyticsService } from '../services/web-analytics/web-analytics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(protected webAnalyticsService: WebAnalyticsService, private sessionService: SessionService) {
    webAnalyticsService.emitAnlayticsEvent("HOME_PAGE_VISIT");
  }

  ngOnInit(): void {
    this.webAnalyticsService.emitAnlayticsEvent("HOME_PAGE_VISIT");
    this.sessionService.getSessions().subscribe((data) => {
      console.log("Sessions data? ", data);
    });
  }

}
