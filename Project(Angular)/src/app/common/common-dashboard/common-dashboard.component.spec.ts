import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonDashboardComponent } from './common-dashboard.component';

describe('CommonDashboardComponent', () => {
  let component: CommonDashboardComponent;
  let fixture: ComponentFixture<CommonDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonDashboardComponent]
    });
    fixture = TestBed.createComponent(CommonDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
