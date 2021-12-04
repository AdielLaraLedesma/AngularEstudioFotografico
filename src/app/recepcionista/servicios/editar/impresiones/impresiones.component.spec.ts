import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarImpresionesComponent } from './impresiones.component';

describe('EditarImpresionesComponent', () => {
  let component: EditarImpresionesComponent;
  let fixture: ComponentFixture<EditarImpresionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarImpresionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarImpresionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
