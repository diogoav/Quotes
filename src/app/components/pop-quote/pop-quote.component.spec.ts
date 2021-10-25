import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopQuoteComponent } from './pop-quote.component';

describe('PopQuoteComponent', () => {
  let component: PopQuoteComponent;
  let fixture: ComponentFixture<PopQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopQuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
