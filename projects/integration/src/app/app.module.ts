import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxCloudinaryWidgetModule } from 'ngx-cloudinary-widget-plugin';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxCloudinaryWidgetModule.forRoot({
      cloudName: 'smsami-uat',
      clientAllowedFormats: ['png'],
      cropping: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
