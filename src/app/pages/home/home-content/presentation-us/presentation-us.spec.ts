import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationUs } from './presentation-us';

describe('PresentationUs', () => {
  let component: PresentationUs;
  let fixture: ComponentFixture<PresentationUs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationUs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationUs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
