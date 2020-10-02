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
    const sub = this.manager.open({ uploadPreset: 'p3cq3brm', cropping: false }).subscribe((resp) => {
      console.log('onOpen Called', resp);
    }, (err) => {
      console.log('err', err);
    }, () => {
      console.log('complete');
    });
  }

  onComplete(): void {
    this.manager.onClose({ uploadPreset: 'p3cq3brm' }).subscribe((resp) => {
      console.log('onclose Called', resp);
    }, (err) => {
      console.log('err', err);
    }, () => {
      console.log('complete');
    });
  }
}
