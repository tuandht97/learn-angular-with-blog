import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSkills } from './our-skills';

describe('OurSkills', () => {
  let component: OurSkills;
  let fixture: ComponentFixture<OurSkills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurSkills]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurSkills);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
