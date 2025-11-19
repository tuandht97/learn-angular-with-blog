import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoetryNews } from './poetry-news';

describe('PoetryNews', () => {
  let component: PoetryNews;
  let fixture: ComponentFixture<PoetryNews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoetryNews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoetryNews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
