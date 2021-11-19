import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpaqueteComponent } from './editpaquete.component';

describe('EditpaqueteComponent', () => {
  let component: EditpaqueteComponent;
  let fixture: ComponentFixture<EditpaqueteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpaqueteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpaqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
