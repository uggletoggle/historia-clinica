import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedimientosComponent } from './procedimientos.component';

describe('ProcedimientosComponent', () => {
  let component: ProcedimientosComponent;
  let fixture: ComponentFixture<ProcedimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
