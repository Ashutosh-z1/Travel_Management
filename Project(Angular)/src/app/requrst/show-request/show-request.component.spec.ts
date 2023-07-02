import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRequestComponent } from './show-request.component';

describe('ShowRequestComponent', () => {
  let component: ShowRequestComponent;
  let fixture: ComponentFixture<ShowRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowRequestComponent]
    });
    fixture = TestBed.createComponent(ShowRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
