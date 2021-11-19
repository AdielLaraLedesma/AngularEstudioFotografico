import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosFormComponent } from './empleados-form.component';

describe('EmpleadosFormComponent', () => {
  let component: EmpleadosFormComponent;
  let fixture: ComponentFixture<EmpleadosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadosFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
