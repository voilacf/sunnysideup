import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DafaultComponent } from './dafault.component';

describe('DafaultComponent', () => {
  let component: DafaultComponent;
  let fixture: ComponentFixture<DafaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DafaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DafaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
