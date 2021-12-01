import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioseventosComponent } from './servicioseventos.component';

describe('ServicioseventosComponent', () => {
  let component: ServicioseventosComponent;
  let fixture: ComponentFixture<ServicioseventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioseventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioseventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
