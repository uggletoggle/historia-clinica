import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivoLlamadaComponent } from './motivo-llamada.component';

describe('MotivoLlamadaComponent', () => {
  let component: MotivoLlamadaComponent;
  let fixture: ComponentFixture<MotivoLlamadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotivoLlamadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivoLlamadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
