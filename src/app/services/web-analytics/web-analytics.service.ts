import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

declare let gtag: Function;
const GOOGLE_ANALYTICS_MEASUREMENT_ID = "G-DK7VWVP5BJ";

@Injectable({
  providedIn: 'root'
})
export class WebAnalyticsService {

  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', GOOGLE_ANALYTICS_MEASUREMENT_ID,
          {
            'page_path': event.urlAfterRedirects
          }
        );
      }
    });
  }

  public emitAnlayticsEvent(
    eventName: string,
    eventCategory: string = null,
    eventLabel: string = null,
    eventValue: number = null) {

    gtag('event', eventName, {
      'event_category': eventCategory,
      'event_label': eventLabel,
      'value': eventValue
    });

  }

}
