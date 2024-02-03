import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenDayItemComponent } from './ten-day-item.component';

describe('TenDayItemComponent', () => {
  let component: TenDayItemComponent;
  let fixture: ComponentFixture<TenDayItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenDayItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenDayItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
