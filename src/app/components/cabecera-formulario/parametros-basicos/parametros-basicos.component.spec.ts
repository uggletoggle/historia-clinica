import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrosBasicosComponent } from './parametros-basicos.component';

describe('ParametrosBasicosComponent', () => {
  let component: ParametrosBasicosComponent;
  let fixture: ComponentFixture<ParametrosBasicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrosBasicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrosBasicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
