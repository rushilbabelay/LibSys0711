import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feedback1Component } from './feedback1.component';

describe('Feedback1Component', () => {
  let component: Feedback1Component;
  let fixture: ComponentFixture<Feedback1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feedback1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feedback1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
