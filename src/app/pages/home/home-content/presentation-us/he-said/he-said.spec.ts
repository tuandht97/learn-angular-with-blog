import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeSaid } from './he-said';

describe('HeSaid', () => {
  let component: HeSaid;
  let fixture: ComponentFixture<HeSaid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeSaid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeSaid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
