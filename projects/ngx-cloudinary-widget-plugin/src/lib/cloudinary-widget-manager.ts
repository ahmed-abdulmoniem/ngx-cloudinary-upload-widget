import { Inject, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, map, reduce } from 'rxjs/operators';
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
  getAsObserable(): Observable<any> {
    return this.subject.asObservable();
  }

  private createUploadWidget(config: IOption): Observable<any> {
    if (!this.widget) {
      this.widget = cloudinary.createUploadWidget(
        {
          ...this.config,
          ...config
        },
        (error, result) => {
          if (error) {
            this.subject.next(error);
          } else {
            this.subject.next(result);
            if (result.event === EEvent.close) {
              this.subject.observers = [];
            }
          }
        }
      );
    } else {
      this.widget.update(config);
    }
    this.widget.open();
    return this.getAsObserable();
  }

  open(option: Partial<IOption>): Observable<any> {
    let config: Partial<IOption> = option as IOption;
    if (typeof option === 'string') {
      config = {
        uploadPreset: option
      };
    }
    return this.createUploadWidget({
      ...this.config,
      ...config
    });
  }

  onClose(option: Partial<IOption>): Observable<any[]> {
    const result = [];
    let config: Partial<IOption> = option as IOption;
    if (typeof option === 'string') {
      config = {
        uploadPreset: option
      };
    }
    return this.createUploadWidget(
      { ...this.config, ...config }
    ).pipe(map((value) => {
      if (value.event === EEvent.success) {
        const { info } = value;
        result.push(info);
      }
      return value;
    }), filter((item) => {
      return item.event === EEvent.close;
    }),
      map(() => {
        return result;
      })
    );
  }
}
