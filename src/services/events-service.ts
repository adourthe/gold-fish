import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

@Injectable()
export class EventsService { 
  constructor(private http:Http) {
  }

  getEvents() {
    return this.http.request('./assets/data/events.json')
                 .map(res => res.json());
  }
}