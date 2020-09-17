import { TestBed } from '@angular/core/testing';

import { CloudinaryWidgetManager } from './cloudinary-widget-manager';

describe('NgxCloudinaryWidgetPluginService', () => {
  let service: CloudinaryWidgetManager;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CloudinaryWidgetManager);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
