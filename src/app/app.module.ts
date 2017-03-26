import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { TabsPage } from '../pages/tabs/tabs';
import { EventsPage } from "../pages/events/events";
import { HouseworkPage } from "../pages/housework/housework";

@NgModule({
  declarations: [
    MyApp,
    EventsPage,
    HouseworkPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventsPage,
    HouseworkPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
