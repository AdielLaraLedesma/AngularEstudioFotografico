import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisserviciosComponent } from './misservicios.component';

describe('MisserviciosComponent', () => {
  let component: MisserviciosComponent;
  let fixture: ComponentFixture<MisserviciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisserviciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
