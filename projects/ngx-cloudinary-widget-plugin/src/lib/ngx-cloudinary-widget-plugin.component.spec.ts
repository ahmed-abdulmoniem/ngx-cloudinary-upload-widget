import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCloudinaryWidgetPluginComponent } from './ngx-cloudinary-widget-plugin.component';

describe('NgxCloudinaryWidgetPluginComponent', () => {
  let component: NgxCloudinaryWidgetPluginComponent;
  let fixture: ComponentFixture<NgxCloudinaryWidgetPluginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCloudinaryWidgetPluginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCloudinaryWidgetPluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
