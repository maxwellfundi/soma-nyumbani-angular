import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaySessionsComponent } from './today-sessions.component';

describe('TodaySessionsComponent', () => {
  let component: TodaySessionsComponent;
  let fixture: ComponentFixture<TodaySessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaySessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaySessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
