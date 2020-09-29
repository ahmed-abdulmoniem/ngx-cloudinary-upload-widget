import { Component } from '@angular/core';
import { CloudinaryWidgetManager } from 'ngx-cloudinary-widget-plugin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'integration';
  constructor(private manager: CloudinaryWidgetManager) {

  }

  onOpen(): void {
    this.manager.open({ uploadPreset: 'p3cq3brm', clientAllowedFormats: ['docx'] }).subscribe((resp) => {
      console.log(resp);
    }, (err) => {
      console.log('err', err);
    }, () => {
      console.log('complete');
    });
  }

  onComplete(): void {
    this.manager.onComplete({ uploadPreset: 'p3cq3brm', clientAllowedFormats: ['docx'] }).subscribe((resp) => {
      console.log(resp);
    }, (err) => {
      console.log('err', err);
    }, () => {
      console.log('complete');
    });
  }
}
