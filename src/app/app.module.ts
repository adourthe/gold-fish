import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { EventsPage } from "../pages/events/events";
import { HouseworkPage } from "../pages/housework/housework";
import { EventsService } from "../services/events-service";

@NgModule({
  declarations: [
    MyApp,
    EventsPage,
    HouseworkPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventsPage,
    HouseworkPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},EventsService]
})
export class AppModule {}
