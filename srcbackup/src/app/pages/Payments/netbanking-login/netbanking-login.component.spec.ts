import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetbankingLoginComponent } from './netbanking-login.component';

describe('NetbankingLoginComponent', () => {
  let component: NetbankingLoginComponent;
  let fixture: ComponentFixture<NetbankingLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetbankingLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetbankingLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
