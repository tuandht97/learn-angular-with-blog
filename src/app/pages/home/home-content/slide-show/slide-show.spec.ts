import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideShow } from './slide-show';

describe('SlideShow', () => {
  let component: SlideShow;
  let fixture: ComponentFixture<SlideShow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideShow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideShow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
