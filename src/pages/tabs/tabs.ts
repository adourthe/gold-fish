import { Component } from '@angular/core';
import { HouseworkPage } from "../housework/housework";
import { EventsPage } from "../events/events";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = EventsPage;
  tab2Root: any = HouseworkPage;

  constructor() {

  }
}
