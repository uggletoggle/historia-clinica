import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespiratorioComponent } from './respiratorio.component';

describe('RespiratorioComponent', () => {
  let component: RespiratorioComponent;
  let fixture: ComponentFixture<RespiratorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespiratorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespiratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
