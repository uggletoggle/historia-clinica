import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabezaCuelloComponent } from './cabeza-cuello.component';

describe('CabezaCuelloComponent', () => {
  let component: CabezaCuelloComponent;
  let fixture: ComponentFixture<CabezaCuelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabezaCuelloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabezaCuelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
