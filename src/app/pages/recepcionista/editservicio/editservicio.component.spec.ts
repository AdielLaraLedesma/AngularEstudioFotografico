import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditservicioComponent } from './editservicio.component';

describe('EditservicioComponent', () => {
  let component: EditservicioComponent;
  let fixture: ComponentFixture<EditservicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditservicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditservicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
