import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercipatationComponent } from './percipatation.component';

describe('PercipatationComponent', () => {
  let component: PercipatationComponent;
  let fixture: ComponentFixture<PercipatationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercipatationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PercipatationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
