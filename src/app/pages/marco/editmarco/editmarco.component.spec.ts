import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmarcoComponent } from './editmarco.component';

describe('EditmarcoComponent', () => {
  let component: EditmarcoComponent;
  let fixture: ComponentFixture<EditmarcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditmarcoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmarcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
