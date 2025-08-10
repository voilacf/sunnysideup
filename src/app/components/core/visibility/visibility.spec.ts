import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Visibility } from './visibility';

describe('Visibility', () => {
  let component: Visibility;
  let fixture: ComponentFixture<Visibility>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Visibility]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Visibility);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
