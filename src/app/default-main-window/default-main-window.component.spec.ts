import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultMainWindowComponent } from './default-main-window.component';

describe('DefaultMainWindowComponent', () => {
  let component: DefaultMainWindowComponent;
  let fixture: ComponentFixture<DefaultMainWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultMainWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultMainWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
