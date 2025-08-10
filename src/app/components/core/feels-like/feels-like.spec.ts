import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeelsLike } from './feels-like';

describe('FeelsLike', () => {
  let component: FeelsLike;
  let fixture: ComponentFixture<FeelsLike>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeelsLike]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeelsLike);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
