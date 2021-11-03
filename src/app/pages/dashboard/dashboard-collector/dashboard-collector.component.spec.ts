import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCollectorComponent } from './dashboard-collector.component';

describe('DashboardCollectorComponent', () => {
  let component: DashboardCollectorComponent;
  let fixture: ComponentFixture<DashboardCollectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCollectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCollectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
