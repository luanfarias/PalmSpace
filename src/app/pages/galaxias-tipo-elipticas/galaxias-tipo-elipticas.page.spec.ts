import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxiasTipoElipticasPage } from './galaxias-tipo-elipticas.page';

describe('GalaxiasTipoElipticasPage', () => {
  let component: GalaxiasTipoElipticasPage;
  let fixture: ComponentFixture<GalaxiasTipoElipticasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalaxiasTipoElipticasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalaxiasTipoElipticasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
