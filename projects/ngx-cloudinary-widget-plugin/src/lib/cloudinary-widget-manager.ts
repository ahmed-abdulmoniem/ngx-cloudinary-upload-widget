import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EEvent } from './constaint';
import { ICloudinary, IOption, IWidget } from './interfaces';
declare var cloudinary: ICloudinary;
@Injectable({
  providedIn: 'root'
})
export class CloudinaryWidgetManager {
  widget: IWidget;
  subject = new Subject();
  constructor() {
  }

  private createUploadWidget(config: IOption): Observable<any> {
    return new Observable((observer) => {
      this.widget = cloudinary.createUploadWidget(
        config,
        (error, result) => {
          if (error) {
            observer.error(error);
          } else {
            observer.next(result);
            if (result.event === EEvent.close) {
              observer.complete();
            }
          }
        }
      );
      this.widget.open();
    });
  }

  open(): Observable<any> {
    return this.createUploadWidget({
      cloudName: 'smsami-uat',
      uploadPreset: 'p3cq3brm'
    });
  }
}
