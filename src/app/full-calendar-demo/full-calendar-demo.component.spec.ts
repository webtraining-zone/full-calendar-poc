import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCalendarDemoComponent } from './full-calendar-demo.component';

describe('FullCalendarDemoComponent', () => {
  let component: FullCalendarDemoComponent;
  let fixture: ComponentFixture<FullCalendarDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullCalendarDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullCalendarDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
