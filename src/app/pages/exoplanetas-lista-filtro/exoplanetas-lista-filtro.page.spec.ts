import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoplanetasListaFiltroPage } from './exoplanetas-lista-filtro.page';

describe('ExoplanetasListaFiltroPage', () => {
  let component: ExoplanetasListaFiltroPage;
  let fixture: ComponentFixture<ExoplanetasListaFiltroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExoplanetasListaFiltroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoplanetasListaFiltroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
