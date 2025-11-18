import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDot } from './change-dot';

describe('ChangeDot', () => {
  let component: ChangeDot;
  let fixture: ComponentFixture<ChangeDot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
