import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightBgComponent } from './flight-bg.component';

describe('FlightBgComponent', () => {
  let component: FlightBgComponent;
  let fixture: ComponentFixture<FlightBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightBgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
