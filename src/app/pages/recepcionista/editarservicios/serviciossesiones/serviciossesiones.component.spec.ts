import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciossesionesComponent } from './serviciossesiones.component';

describe('ServiciossesionesComponent', () => {
  let component: ServiciossesionesComponent;
  let fixture: ComponentFixture<ServiciossesionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciossesionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciossesionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
