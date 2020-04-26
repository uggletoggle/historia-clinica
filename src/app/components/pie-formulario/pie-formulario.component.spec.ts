import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieFormularioComponent } from './pie-formulario.component';

describe('PieFormularioComponent', () => {
  let component: PieFormularioComponent;
  let fixture: ComponentFixture<PieFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
