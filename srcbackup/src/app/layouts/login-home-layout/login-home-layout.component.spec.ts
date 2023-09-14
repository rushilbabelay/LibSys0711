import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginHomeLayoutComponent } from './login-home-layout.component';

describe('LoginHomeLayoutComponent', () => {
  let component: LoginHomeLayoutComponent;
  let fixture: ComponentFixture<LoginHomeLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginHomeLayoutComponent]
    });
    fixture = TestBed.createComponent(LoginHomeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
