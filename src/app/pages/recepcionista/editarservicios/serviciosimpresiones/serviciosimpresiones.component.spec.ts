import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosimpresionesComponent } from './serviciosimpresiones.component';

describe('ServiciosimpresionesComponent', () => {
  let component: ServiciosimpresionesComponent;
  let fixture: ComponentFixture<ServiciosimpresionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosimpresionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosimpresionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
