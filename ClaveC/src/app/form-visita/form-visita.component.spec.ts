import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVisitaComponent } from './form-visita.component';

describe('FormVisitaComponent', () => {
  let component: FormVisitaComponent;
  let fixture: ComponentFixture<FormVisitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVisitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
