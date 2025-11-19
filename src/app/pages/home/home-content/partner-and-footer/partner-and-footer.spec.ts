import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerAndFooter } from './partner-and-footer';

describe('PartnerAndFooter', () => {
  let component: PartnerAndFooter;
  let fixture: ComponentFixture<PartnerAndFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnerAndFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerAndFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
