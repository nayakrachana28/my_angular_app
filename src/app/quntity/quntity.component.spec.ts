import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuntityComponent } from './quntity.component';

describe('QuntityComponent', () => {
  let component: QuntityComponent;
  let fixture: ComponentFixture<QuntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuntityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
