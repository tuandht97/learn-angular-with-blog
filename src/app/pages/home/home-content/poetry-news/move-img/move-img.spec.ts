import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveImg } from './move-img';

describe('MoveImg', () => {
  let component: MoveImg;
  let fixture: ComponentFixture<MoveImg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoveImg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveImg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
