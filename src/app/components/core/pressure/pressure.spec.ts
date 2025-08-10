import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pressure } from './pressure';

describe('Pressure', () => {
  let component: Pressure;
  let fixture: ComponentFixture<Pressure>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pressure]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pressure);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
