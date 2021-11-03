import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCollectorComponent } from './form-collector.component';

describe('FormCollectorComponent', () => {
  let component: FormCollectorComponent;
  let fixture: ComponentFixture<FormCollectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCollectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCollectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
