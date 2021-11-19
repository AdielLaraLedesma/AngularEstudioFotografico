import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcosComponent } from './marcos.component';

describe('MarcosComponent', () => {
  let component: MarcosComponent;
  let fixture: ComponentFixture<MarcosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
