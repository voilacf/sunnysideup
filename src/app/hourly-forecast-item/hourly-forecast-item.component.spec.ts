import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyForecastItemComponent } from './hourly-forecast-item.component';

describe('HourlyForecastItemComponent', () => {
  let component: HourlyForecastItemComponent;
  let fixture: ComponentFixture<HourlyForecastItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HourlyForecastItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyForecastItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
