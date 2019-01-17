import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysInfoComponent } from './days-info.component';

describe('DaysInfoComponent', () => {
  let component: DaysInfoComponent;
  let fixture: ComponentFixture<DaysInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
