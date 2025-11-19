import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedPoetry } from './need-poetry';

describe('NeedPoetry', () => {
  let component: NeedPoetry;
  let fixture: ComponentFixture<NeedPoetry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeedPoetry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeedPoetry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
