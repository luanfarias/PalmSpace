import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxiasTipoOutrasPage } from './galaxias-tipo-outras.page';

describe('GalaxiasTipoOutrasPage', () => {
  let component: GalaxiasTipoOutrasPage;
  let fixture: ComponentFixture<GalaxiasTipoOutrasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalaxiasTipoOutrasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalaxiasTipoOutrasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
