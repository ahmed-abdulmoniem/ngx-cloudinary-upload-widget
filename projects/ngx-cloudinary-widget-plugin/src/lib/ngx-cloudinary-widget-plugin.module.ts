import { ModuleWithProviders, NgModule } from '@angular/core';
import { CloudinaryWidgetManager } from './cloudinary-widget-manager';
import { ProviderNames } from './constaint';
import { IOption } from './interfaces';



@NgModule({
  imports: [
  ],
  exports: []
})
export class NgxCloudinaryWidgetModule {
  static forRoot(config: IOption): ModuleWithProviders<NgxCloudinaryWidgetModule> {
    return {
      ngModule: NgxCloudinaryWidgetModule,
      providers: [
        CloudinaryWidgetManager,
        {
          provide: ProviderNames.CLOUDINARY_WIDGET,
          useValue: config,
        }
      ]
    };
  }
}
