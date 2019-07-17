import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaSolarAnoesPage } from './sistema-solar-anoes.page';

describe('SistemaSolarAnoesPage', () => {
  let component: SistemaSolarAnoesPage;
  let fixture: ComponentFixture<SistemaSolarAnoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SistemaSolarAnoesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemaSolarAnoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
