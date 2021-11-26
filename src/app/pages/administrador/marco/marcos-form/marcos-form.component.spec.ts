import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcosFormComponent } from './marcos-form.component';

describe('MarcosFormComponent', () => {
  let component: MarcosFormComponent;
  let fixture: ComponentFixture<MarcosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcosFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
