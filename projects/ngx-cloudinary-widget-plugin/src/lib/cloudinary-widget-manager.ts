import { Inject, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EEvent, ProviderNames } from './constaint';
import { ICloudinary, IOption, IWidget } from './interfaces';
declare var cloudinary: ICloudinary;
@Injectable({
  providedIn: 'root'
})
export class CloudinaryWidgetManager {
  widget: IWidget;
  subject = new Subject();
  constructor(@Inject(ProviderNames.CLOUDINARY_WIDGET) private config: IOption) {
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

  open(option: Partial<IOption>): Observable<any> {
    return this.createUploadWidget({
      cloudName: (option && option.cloudName) || (this.config.cloudName),
      ...option
    });
  }
}
