import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxiasTipoEspiraisPage } from './galaxias-tipo-espirais.page';

describe('GalaxiasTipoEspiraisPage', () => {
  let component: GalaxiasTipoEspiraisPage;
  let fixture: ComponentFixture<GalaxiasTipoEspiraisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalaxiasTipoEspiraisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalaxiasTipoEspiraisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
