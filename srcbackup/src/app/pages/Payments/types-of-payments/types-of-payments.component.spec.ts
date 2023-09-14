import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesOfPaymentsComponent } from './types-of-payments.component';

describe('TypesOfPaymentsComponent', () => {
  let component: TypesOfPaymentsComponent;
  let fixture: ComponentFixture<TypesOfPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesOfPaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypesOfPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
