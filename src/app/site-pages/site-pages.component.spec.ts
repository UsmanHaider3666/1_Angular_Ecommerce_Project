import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitePagesComponent } from './site-pages.component';

describe('SitePagesComponent', () => {
  let component: SitePagesComponent;
  let fixture: ComponentFixture<SitePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitePagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
