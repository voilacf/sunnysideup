import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Humidity } from './humidity';

describe('Humidity', () => {
  let component: Humidity;
  let fixture: ComponentFixture<Humidity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Humidity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Humidity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
