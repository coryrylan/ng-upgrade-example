
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { RouterModule, UrlHandlingStrategy } from '@angular/router';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';

import { MigrationUrlHandlingStrategy } from './router-strategy';
import { AppRoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    FaqComponent
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '!' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: UrlHandlingStrategy, useClass: MigrationUrlHandlingStrategy }
  ]
})
export class AppModule {
  constructor(public upgrade: UpgradeModule) { }
}