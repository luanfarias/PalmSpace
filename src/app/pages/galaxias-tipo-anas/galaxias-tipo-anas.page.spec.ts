import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxiasTipoAnasPage } from './galaxias-tipo-anas.page';

describe('GalaxiasTipoAnasPage', () => {
  let component: GalaxiasTipoAnasPage;
  let fixture: ComponentFixture<GalaxiasTipoAnasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalaxiasTipoAnasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalaxiasTipoAnasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
