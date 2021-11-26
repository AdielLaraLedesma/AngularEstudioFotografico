import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleservicioComponent } from './detalleservicio.component';

describe('DetalleservicioComponent', () => {
  let component: DetalleservicioComponent;
  let fixture: ComponentFixture<DetalleservicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleservicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleservicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
