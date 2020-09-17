# ngx-Cloudinary-Upload-widget

<p align="center">
  <a href="https://twitter.com/__bangash"><img src="https://img.shields.io/twitter/follow/__bangash.svg?label=Follow"/></a>
</p>

This plugin is created a wrapper around on [Cloudinary Upload Widget](https://cloudinary.com/documentation/upload_widget).

## Reasons to Use This Plugin

It will help you to use Plugin like Angular service.

## Installation

Run the following code in your terminal:

```
yarn add ngx-cloudinary-upload-widget
```

or if you are using npm:

```
npm install ngx-cloudinary-upload-widget
```

## Usage

### Setup Before Initial Use

Import `NgxCloudinaryWidgetModule` into your root module like:

```TS
import { NgxLoadingPluginModule } from 'ngx-cloudinary-upload-widget';

@NgModule({
  imports: [
    NgxCloudinaryWidgetModule.forRoot(
        {
            cloudName:"cloudinary_name"
        }
    )
  ]
})
export class AppModule {}
```

```HTML
    <script src="https://widget.cloudinary.com/v2.0/global/all.js" type="text/javascript"></script>
```

put the above script in intex.html

```TS
import { CloudinaryWidgetManager } from 'ngx-cloudinary-widget-plugin';

constructor(private manager: CloudinaryWidgetManager) {}

 onOpenDialog(): void {
    this.manager.open().subscribe((result) => {
      console.log(result);
    }, (error) => {
      console.log(err);
    }, () => {
      console.log('complete');
    });
  }
```

### License and copy right

&copy; Shahid Ahmad

License under the [MIT License](LICENSE).
