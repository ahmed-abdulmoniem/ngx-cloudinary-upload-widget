import { ModuleWithProviders, NgModule } from '@angular/core';
import { CloudinaryWidgetManager } from './cloudinary-widget-manager';



@NgModule({
  imports: [
  ],
  exports: []
})
export class NgxCloudinaryWidgetModule {
  static forRoot(): ModuleWithProviders<NgxCloudinaryWidgetModule> {
    return {
      ngModule: NgxCloudinaryWidgetModule,
      providers: [
        CloudinaryWidgetManager,
      ]
    };
  }
}
