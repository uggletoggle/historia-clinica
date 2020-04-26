import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraFormularioComponent } from './cabecera-formulario.component';

describe('CabeceraFormularioComponent', () => {
  let component: CabeceraFormularioComponent;
  let fixture: ComponentFixture<CabeceraFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabeceraFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
