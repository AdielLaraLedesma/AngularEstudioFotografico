import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarserviciosComponent } from './agregarservicios.component';

describe('AgregarserviciosComponent', () => {
  let component: AgregarserviciosComponent;
  let fixture: ComponentFixture<AgregarserviciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarserviciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
