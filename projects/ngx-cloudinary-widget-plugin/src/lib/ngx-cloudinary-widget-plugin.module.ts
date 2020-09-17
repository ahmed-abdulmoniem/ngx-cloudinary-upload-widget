import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxCloudinaryWidgetPluginComponent } from './ngx-cloudinary-widget-plugin.component';
import { CloudinaryWidgetManager } from './cloudinary-widget-manager';



@NgModule({
  declarations: [NgxCloudinaryWidgetPluginComponent],
  imports: [
  ],
  exports: [NgxCloudinaryWidgetPluginComponent]
})
export class NgxCloudinaryWidgetPluginModule {
  static forRoot(): ModuleWithProviders<NgxCloudinaryWidgetPluginModule> {
    return {
      ngModule: NgxCloudinaryWidgetPluginModule,
      providers: [
        CloudinaryWidgetManager,
      ]
    };
  }
}
