import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaNerviosoComponent } from './sistema-nervioso.component';

describe('SistemaNerviosoComponent', () => {
  let component: SistemaNerviosoComponent;
  let fixture: ComponentFixture<SistemaNerviosoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SistemaNerviosoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemaNerviosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
